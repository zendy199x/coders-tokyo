/**
 * 1. Ngoài static-server thì còn có những node package nào có thể tạo 1 web server
 * "local-web-server", "budo", "beefy" 
 * Gợi ý: Lên https://www.npmjs.com/ search với từ khoá web server hoặc static server hoặc server
 * 2. Thử dùng 1 vài công cụ khác static-server để tạo web server
 * 3. Ghi lại các cách mà bạn đã làm ở bước 2, càng cụ thể càng tốt.
 * "local-web-server": 
 - Mở terminal, cài đặt package bằng dòng lệnh "npm install -g local-web-server"
 - gõ "ws" để hiện những URL khả dụng với số port ở cuối
 * "budo":
 - cài đặt package bằng dòng lệnh "npm install budo -g"
 - gõ lệnh "budo index.js --live" 
 - truy cập "http://localhost:9966/" để thấy nội dung file html nếu có
 * "beefy"
 - cài đặt package bằng dòng lệnh "npm install -g beefy"
 - gõ lệnh "beefy index.html 9046 --browserify args" 9046 là số port, có thể chọn port tùy ý
 - vào đường link hiện ra trên terminal và thấy kết quả
 * 4. Bạn có biết cách start 1 web server rất nhanh với dòng lệnh như php hoặc python, thử tìm hiểu.
 * 5. Ghi lại cách mà bạn tìm kiếm ở bước 4
 - tìm kiếm "php built in server"
 - vào trang đầu tiên, ở đây sẽ hướng dẫn những câu lệnh thao tác với terminal để mở môt local server thông qua php
 - câu lệnh "php -S localhost:8000" sẽ mở một host sử dụng port 8000


 - tìm kiếm "python built in server"
 - vào trang đầu tiên, ở đây sẽ hướng dẫn những câu lệnh thao tác với terminal để mở môt local server thông qua python
 - câu lệnh "python -m SimpleHTTPServer 8000" sẽ mở một host sử dụng port 8000
 * Mục đích của bài tập này giúp cho bạn tập tìm kiếm tài liệu với từ khoá đã biết
 */