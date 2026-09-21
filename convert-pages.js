const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'pages');
for (const file of fs.readdirSync(dir).filter(name => name.endsWith('.html') && name !== '01-list-my-assigned-entities-populated.html')) {
  const match = file.match(/^(\d+)/);
  const route = match ? match[1] : '0';
  const title = file.replace(/\.html$/, '').replace(/^\d+-/, '').replaceAll('-', ' ');
  fs.writeFileSync(path.join(dir, file), `<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>${title} | Finarya</title>\n  <link rel="stylesheet" href="../styles.css">\n</head>\n<body class="cap-app" data-screen="${route}-${title.replaceAll(' ', '-')}">\n  <script src="../cap-app.js"></script>\n</body>\n</html>\n`);
}
console.log('Converted wrapper pages to functional CAP shells.');
