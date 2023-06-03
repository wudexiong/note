const Koa = require("koa");
const path = require("path");
const fs = require("fs");
const app = new Koa();
const mimes = {
    'css': 'text/css',
    'less': 'text/css',
    'gif': 'image/gif',
    'html': 'text/html',
    'ico': 'image/x-icon',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg',
    'js': 'text/javascript',
    'json': 'application/json',
    'pdf': 'application/pdf',
    'png': 'image/png',
    'svg': 'image/svg+xml',
    'swf': 'application/x-shockwave-flash',
    'tiff': 'image/tiff',
    'txt': 'text/plain',
    'wav': 'audio/x-wav',
    'wma': 'audio/x-ms-wma',
    'wmv': 'video/x-ms-wmv',
    'xml': 'text/xml'
};

app.use(async (ctx) => {
    // 静态资源目录
    const staticPath = path.join(__dirname, "./static");

    // 请求完的路径
    const reqPath = path.join(staticPath, ctx.url);

    // 请求内容
    let content = "";
    if (!fs.existsSync(reqPath)) {
        content = "404 Not Found";
    } else {
        const stat = fs.statSync(reqPath);
        if (stat.isDirectory()) {
            const files = fs.readdirSync(reqPath);
            const dirList = [], fileList = [];
            files.forEach((item) => {
                const itemArr = item.split("\.");
                const itemMime = itemArr.length > 1 ? itemArr[itemArr.length - 1] : void 0;
                typeof mimes[itemMime] === "undefined" ? dirList.push(item) : fileList.push(item);
            })
            const contentList = dirList.concat(fileList);

            let html = `<ul>`;
            for (let [_, item] of contentList.entries()) {
                html = `${html}<li><a href="${ctx.url === '/' ? '' : ctx.url}/${item}">${item}</a>`
            };
            html = `${html}</ul>`;
            content = html;
        }
        else {
            content = fs.readFileSync(reqPath, "binary");
        };
    };
    ctx.body = content;
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000"); 
});