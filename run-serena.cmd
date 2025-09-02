# run-serena.cmd
@echo off
REM 常にこのフォルダをカレントにして実行
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File ".\run-serena.ps1"