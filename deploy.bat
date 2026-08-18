@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ============================================================
echo   zxf-site 部署脚本（任意步骤出错都会暂停，便于查看原因）
echo ============================================================
echo.

set "REPO_DIR=%~dp0"
cd /d "%REPO_DIR%"
echo 仓库目录: %REPO_DIR%
echo.

:: 1) 定位 bundle 文件
set "BUNDLE="
if not "%~1"=="" (
    if exist "%~1" ( set "BUNDLE=%~1" ) else ( echo [错误] 指定文件不存在: %~1 & pause & exit /b 1 )
)
if not defined BUNDLE if exist "%REPO_DIR%zxf-site.bundle" set "BUNDLE=%REPO_DIR%zxf-site.bundle"
if not defined BUNDLE (
    for %%P in (
        "%USERPROFILE%\Downloads\zxf-site.bundle"
        "D:\downloads\zxf-site.bundle"
        "D:\zxf-site\zxf-site.bundle"
        "C:\zxf-site\zxf-site.bundle"
    ) do ( if exist "%%P" ( set "BUNDLE=%%P" & goto :found ) )
)
if not defined BUNDLE (
    echo [错误] 找不到 zxf-site.bundle
    echo 请把它放到本脚本同目录，或下载到 Downloads / D 盘，或手动指定：
    echo   deploy.bat "D:\你的路径\zxf-site.bundle"
    pause & exit /b 1
)
:found
echo 找到 bundle: %BUNDLE%
echo.

:: 2) 解包为 bare 仓库（绕开 file:// 协议读 bundle 不稳定的问题）
echo [1/4] 解包 bundle...
rmdir /s /q "%REPO_DIR%zxf-site-remote" 2>nul
git clone --bare "%BUNDLE%" "%REPO_DIR%zxf-site-remote"
if errorlevel 1 ( echo [错误] clone --bare 失败，bundle 可能损坏，请重新从网盘下载。 & pause & exit /b 1 )

:: 3) 注册临时 remote 并拉取
echo [2/4] 拉取提交...
git remote remove bundle 2>nul
git remote add bundle "%REPO_DIR%zxf-site-remote"
git fetch bundle master
if errorlevel 1 ( echo [错误] fetch 失败。 & pause & exit /b 1 )

:: 4) 推送到 GitHub
echo [3/4] 推送到 GitHub...
git push origin FETCH_HEAD:master
if errorlevel 1 ( echo [错误] push 失败，请确认 GitHub 凭据（PAT / SSH）已配置。 & pause & exit /b 1 )

:: 5) 清理临时文件
echo [4/4] 清理临时文件...
git remote remove bundle 2>nul
rmdir /s /q "%REPO_DIR%zxf-site-remote" 2>nul

echo.
echo ============================================================
echo   部署成功！1-2 分钟后访问 https://xiaofen.pro
echo ============================================================
pause
