@echo off
chcp 65001 >nul
cd /d %~dp0

REM ============================================================
REM  deploy.bat  —— 把资产里的 zxf-site.bundle 推送到 GitHub
REM  用法：
REM    1) 把从项目网盘「网站」下载的 zxf-site.bundle 放到本目录
REM       （或任意位置，然后用：deploy.bat D:\路径\zxf-site.bundle）
REM    2) 双击本文件即可；前提：本目录已是 git 仓库且已设好 origin
REM       （git remote add origin https://github.com/icyzhang666/zxf-site.git）
REM  推送后 Vercel 自动部署，稍后访问 https://xiaofen.pro
REM ============================================================

set "BUNDLE=%~dp0zxf-site.bundle"
if not "%~1"=="" set "BUNDLE=%~1"

if not exist "%BUNDLE%" (
  echo [错误] 找不到 bundle 文件：
  echo   %BUNDLE%
  echo.
  echo 请先把 zxf-site.bundle 放到本目录，或运行：
  echo   deploy.bat D:\你的路径\zxf-site.bundle
  pause
  exit /b 1
)

echo [1/3] 从 bundle 拉取提交：%BUNDLE%
git fetch "%BUNDLE%" master
if errorlevel 1 (
  echo [错误] git fetch 失败，请确认 bundle 完整且与本地仓库同源。
  pause
  exit /b 1
)

echo [2/3] 推送到 GitHub（origin/master）...
git push origin FETCH_HEAD:master
if errorlevel 1 (
  echo [错误] git push 失败，请确认已配置 GitHub 凭据（PAT / SSH）。
  pause
  exit /b 1
)

echo [3/3] 已完成。Vercel 会自动部署，稍后访问 https://xiaofen.pro 查看。
pause
