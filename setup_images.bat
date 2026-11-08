@echo off
echo ===================================================
echo  Copying Advocate Sameer Khan & Associates Images
echo ===================================================

if not exist "assets\images" (
    mkdir "assets\images"
)
if not exist "images" (
    mkdir "images"
)

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794162000348_013a5d42.webp" "images\logo.webp"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794162000348_013a5d42.webp" "assets\images\logo.webp"

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226930_5f9a10f1.jpg" "images\sameer-khan.jpg"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226930_5f9a10f1.jpg" "assets\images\sameer-khan-court.jpg"

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226944_a8d47b03.jpg" "images\office-1.jpg"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226944_a8d47b03.jpg" "assets\images\chamber-wide.jpg"

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226968_bbb49e7b.jpg" "images\office-2.jpg"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226968_bbb49e7b.jpg" "assets\images\chamber-desk.jpg"

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226979_c0fec0d5.jpg" "images\sameer-khan-suit.jpg"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226979_c0fec0d5.jpg" "assets\images\sameer-khan-suit.jpg"

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794161959315_fa74b677.png" "images\logo-banner.png"

echo.
echo Images and Logo successfully copied into images\ and assets\images\ folders!
pause
