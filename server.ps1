# VOLT'S LEGACY ENERGY SOLUTIONS - High-Performance Local Development Server
$path = $PSScriptRoot
if (-not $path) { $path = (Get-Location).Path }

$candidatePorts = @(8080, 8085, 8000, 3000, 8088)
$activePort = $null
$listener = $null

foreach ($p in $candidatePorts) {
    try {
        $testListener = New-Object System.Net.HttpListener
        $testListener.Prefixes.Add("http://localhost:$p/")
        $testListener.Prefixes.Add("http://127.0.0.1:$p/")
        $testListener.Start()
        $listener = $testListener
        $activePort = $p
        break
    } catch {
        if ($testListener) {
            try { $testListener.Close() } catch {}
        }
    }
}

if (-not $listener) {
    Write-Host "Could not bind to standard ports. Trying fallback port 8090..." -ForegroundColor Yellow
    try {
        $listener = New-Object System.Net.HttpListener
        $listener.Prefixes.Add("http://localhost:8090/")
        $listener.Prefixes.Add("http://127.0.0.1:8090/")
        $listener.Start()
        $activePort = 8090
    } catch {
        Write-Error "Failed to start HttpListener: $_"
        exit 1
    }
}

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  VOLT'S LEGACY SOLAR - Web Server Active" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Local URL:  http://localhost:$activePort/" -ForegroundColor Yellow
Write-Host "  Commercial: http://localhost:$activePort/solar-for-commercial-institutions" -ForegroundColor Yellow
Write-Host "  Industrial: http://localhost:$activePort/solar-for-industrial-factories" -ForegroundColor Yellow
Write-Host "  Ground:     http://localhost:$activePort/solar-ground-mount" -ForegroundColor Yellow
Write-Host "  Serving:    $path" -ForegroundColor Gray
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server.`n"

# Open Chrome / Default browser
try {
    Start-Process "http://localhost:$activePort/"
} catch {}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath)
        if ($urlPath -eq "/" -or $urlPath -eq "") {
            $urlPath = "/index.html"
        }

        # Normalize nested SPA asset requests (e.g. /solar-solutions/assets/pic.jpg -> /assets/pic.jpg)
        if ($urlPath -match '(/assets/.*)$') {
            $urlPath = $matches[1]
        } elseif ($urlPath -match '(/css/.*)$') {
            $urlPath = $matches[1]
        } elseif ($urlPath -match '(/js/.*)$') {
            $urlPath = $matches[1]
        }

        $localFilePath = Join-Path $path ($urlPath.TrimStart('/').Replace('/', '\'))

        # Check if the requested static asset exists; otherwise fallback to index.html for SPA routes
        if (-not (Test-Path $localFilePath -PathType Leaf)) {
            $localFilePath = Join-Path $path "index.html"
        }

        if (Test-Path $localFilePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($localFilePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".webp" { "image/webp" }
                ".svg"  { "image/svg+xml" }
                ".json" { "application/json" }
                ".ico"  { "image/x-icon" }
                Default { "application/octet-stream" }
            }

            try {
                $bytes = [System.IO.File]::ReadAllBytes($localFilePath)
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.Length
                $response.Headers.Add("Access-Control-Allow-Origin", "*")
                $response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")
                $response.StatusCode = 200
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } catch {
                $response.StatusCode = 500
            } finally {
                $response.OutputStream.Close()
            }
        } else {
            $response.StatusCode = 404
            $response.OutputStream.Close()
        }
    }
} catch {
    Write-Host "Server shutting down..." -ForegroundColor Gray
} finally {
    if ($listener) {
        try { $listener.Stop() } catch {}
        try { $listener.Close() } catch {}
    }
}
