@echo off
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"
cd /d "%~dp0"
echo ========================================================
echo  Pushing Volt's Legacy to GitHub (kashiasagar/Volt-s-Legacy)
echo ========================================================
echo.
echo If a browser window opens, click "Sign in with your browser" 
echo and click "Authorize" to connect your GitHub account.
echo.
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo  SUCCESS! All project files are now live on GitHub!
    echo  You can now return to Hostinger and click "Next".
    echo ========================================================
) else (
    echo.
    echo If sign-in failed, you can also generate a GitHub Personal
    echo Access Token at https://github.com/settings/tokens
)
echo.
pause
