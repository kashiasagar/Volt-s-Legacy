
@echo off
title VOLT'S LEGACY ENERGY SOLUTIONS - Local Server
echo ========================================================
echo   VOLT'S LEGACY SOLAR - Starting Local Server...
echo ========================================================
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause

