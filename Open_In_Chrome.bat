@echo off
title VOLT'S LEGACY SOLAR - Web Server Launcher
cd /d "%~dp0"

echo ===================================================
echo   Starting VOLT'S LEGACY SOLAR Local Server...
echo ===================================================

:: Start local server in background if not already running
netstat -ano | findstr :8080 >nul
if %errorlevel% neq 0 (
    start /b powershell -ExecutionPolicy Bypass -File .\server.ps1
    timeout /t 1 >nul
)

:: Open Google Chrome directly
start chrome "http://localhost:8080/"

echo.
echo Website opened in Google Chrome!
echo Server is active at http://localhost:8080/
echo You can keep this window open or minimize it.
pause
