/**
 * 1. Sử dụng module `markdown` (https://www.npmjs.com/package/markdown) để chuyển đổi đoạn text (viết bằng markdown) sau sang html
 * 2. Tìm hiểu xem markdown là cái gì (dev nên biết về markdown)
 */
var markdown = require('markdown').markdown;
var markdownText = 'Hello *Coders.Tokyo*!';

console.log(markdown.toHTML(markdownText));

