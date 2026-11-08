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

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226930_5f9a10f1.jpg" "images\sameer-khan.jpg"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226930_5f9a10f1.jpg" "assets\images\sameer-khan-court.jpg"

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226944_a8d47b03.jpg" "images\office-1.jpg"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226944_a8d47b03.jpg" "assets\images\chamber-wide.jpg"

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226968_bbb49e7b.jpg" "images\office-2.jpg"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226968_bbb49e7b.jpg" "assets\images\chamber-desk.jpg"

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226979_c0fec0d5.jpg" "images\sameer-khan-suit.jpg"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160226979_c0fec0d5.jpg" "assets\images\sameer-khan-suit.jpg"

copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160237571_4a99db40.png" "images\logo-banner.png"
copy /Y "C:\Users\admin\.gemini\antigravity\brain\17e11128-5a31-4447-b972-c48929554249\.user_uploaded\media_1794160237571_4a99db40.png" "assets\images\reference-banner.png"

echo.
echo Images successfully copied into images\ and assets\images\ folders!
pause
