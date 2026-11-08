@echo off
echo ========================================================
echo  Advocate Sameer Khan & Associates — Image & Asset Setup
echo ========================================================

if not exist "assets\images" (
    mkdir "assets\images"
)
if not exist "images" (
    mkdir "images"
)

echo [1/3] Copying Official WebP Logo...
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794162000348_013a5d42.webp" "images\logo.webp"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794162000348_013a5d42.webp" "assets\images\logo.webp"

echo [2/3] Copying Photos...
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226930_5f9a10f1.jpg" "images\sameer-khan.jpg"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226930_5f9a10f1.jpg" "assets\images\sameer-khan-court.jpg"

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226944_a8d47b03.jpg" "images\office-1.jpg"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226944_a8d47b03.jpg" "assets\images\chamber-wide.jpg"

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226968_bbb49e7b.jpg" "images\office-2.jpg"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226968_bbb49e7b.jpg" "assets\images\chamber-desk.jpg"

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226979_c0fec0d5.jpg" "images\sameer-khan-suit.jpg"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226979_c0fec0d5.jpg" "assets\images\sameer-khan-suit.jpg"

echo [3/3] Deleting extra temporary and reference images to save space...
if exist "images\logo-banner.png" del /Q "images\logo-banner.png"
if exist "index.html.backup" del /Q "index.html.backup"
if exist "assets\test.txt" del /Q "assets\test.txt"
if exist "powershell.bat" del /Q "powershell.bat"

echo.
echo ========================================================
echo  All assets synchronized and extra files cleaned!
echo  To convert remaining JPGs to WebP, open convert_to_webp.html
echo ========================================================
pause
