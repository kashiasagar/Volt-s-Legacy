@echo off
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"
cd /d "%~dp0"
echo ========================================================
echo Pushing Volt's Legacy to GitHub...
echo ========================================================
git push -u origin main
echo.
pause
