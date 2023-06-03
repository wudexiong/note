# koa.js Node框架

## 路由

```js
const Koa = require("koa");
const fs = require("fs")
const app = new Koa();

const render = (page)=> {
    return new Promise((resolve, reject)=> {
        let viewUrl = `./views/${page}`;
        fs.readFile(viewUrl, "binary", (err, data)=> {
            if(err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    });
};

app.use(async (ctx) => {

    ctx.body = "hello koa2";
    // 路由实现 fs + ctx.request.url
    // 目录views目录新增对应文件
    let view = "404.html";
    switch (ctx.request.url) {
        case "/":
            view = "index.html";
            break;
        case "/index":
            view = "index.html";
            break;
        case "/user":
            view = "user.html";
    };
   
    const html = await render(view)
    ctx.body = html
});

app.listen(3000);

console.log("[demo] start is port 3000");
```

## 请求数据获取

### GET

```js

const Koa = require("koa");
const app = new Koa();

app.use(async (ctx)=> {
    const url = ctx.url;
    // 从上下文的request获取
    const request = ctx.request;
    const req_query = request.query;
    const req_querystring = request.querystring;
    // 从上下文直接获取
    const ctx_query = ctx.query;
    const ctx_querystring = ctx.querystring;

    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
});

app.listen(3000, ()=> {
    console.log("[demo] start is port 3000");
});
```

### POST

```js

const Koa = require("koa");
const app = new Koa();

app.use(async (ctx)=> {
    if(ctx.url === "/" && ctx.method === "GET") {
        const html = `
            <form method="POST" action="/">
                <p>First userName: <input name="userName" /></p>
                <p>First nickName: <input name="nickName" /></p>
                <p>First email: <input name="email" /></p>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    }
    else if(ctx.url === "/" && ctx.method === "POST") {
        const parseData = await parsePostData(ctx)
        ctx.body = parseData
    }
    else {
        ctx.body = "404"
    }
});

function parsePostData(ctx) {
    return new Promise((resolve, reject)=> {
        try {
            let postData = ""
            ctx.req.addListener("data", (data)=> {
                postData += data
            })
            ctx.req.addListener("end", ()=> {
                const parseData = paresQueryStr(postData);
                resolve(parseData)
            });
        } catch(err) {
            reject(err);
        };
    });
};

function paresQueryStr(queryStr) {
    let queryData = {};
    const queryStrList = queryStr.split("&");
    console.log(queryStrList);
    for(const [index, queryStr] of queryStrList.entries()) {
        const itemList = queryStr.split("=");
         queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    };
    return queryData
}

app.listen(3000, ()=> {
    console.log("[demo] start is port 3000");
});

```

## 中间件

`./middleware/logger-async.js`:

```js
function log (ctx) {
    console.log(ctx.method, ctx.header.host + ctx.url)
}

module.exports = function loggerAsync() {
    return async function loggerAsyncMiddleware(ctx, next) {
        log(ctx)
        await next()
    }
}

```

`index.js`:

```js
const Koa = require("koa");
const fs = require("fs");
const app = new Koa();
const loggerAsync = require("./middleware/logger-async");

app.use(loggerAsync());

app.use(async (ctx) => {
    ctx.body = "use loggerAsyncMiddleware";
});

app.listen(3000);

console.log("[demo] start is port 3000");
```

### koa-router 路由

```js

const Koa = require("koa");
const Router  = require("koa-router");
const app = new Koa();

const home = new Router();

home.get("/", async (ctx)=> {
    let html = `
        <a href="/page/404"></a>
        <a href="/page/user"></a>
    `;
    ctx.body = html;
});

const page = new Router();

page.get("/404", async (ctx)=> {
    ctx.body = "404 page";
});

page.get("/user", async (ctx)=> {
    ctx.body = "user page";
});

const router = new Router();

router.use("/", home.routes(), home.allowedMethods());
router.use("/page", page.routes(), page.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, ()=> {
    console.log("[demo] start is port 3000");
});
```

### koa-bodyparser

```js
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new Koa();

app.use(bodyParser());
app.use(async (ctx)=> {
    if(ctx.url === "/" && ctx.method === "GET") {
        const html = `
            <form method="POST" action="/">
                <p>First userName: <input name="userName" /></p>
                <p>First nickName: <input name="nickName" /></p>
                <p>First email: <input name="email" /></p>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    }
    else if(ctx.url === "/" && ctx.method === "POST") {
        const parseData = ctx.request.body;
        ctx.body = parseData
    }
    else {
        ctx.body = "404"
    }
});
app.listen(3000, ()=> {
    console.log("[demo] start is port 3000");
});
```

## 静态资源服务

```js
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
```

### koa-static

```bash
yarn add koa-static
```

```js

const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
const app = new Koa();

app.use(static(path.join(__dirname, "./static")))

app.listen(3001, ()=> {
    console.log("Server is running on port 3001")
})
```

## cookie

```js

const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
    if (ctx.url === "/cookie") {
        ctx.cookies.set("cid", "test", {
            domain: "localhost", // 指定域名，不要包含后缀名！！！ (Optional) 默认为当前域名。
            path: "/index",
            maxAge: 1 * 60 * 1000, // 指定有效期，单位为秒。 (Optional) 默认为1天。 （一个
            expires: new Date("2023-6-4"), // (Optional) 指定一个有效的过期时间。 （例如，“Thu, 01 Jan 1970 00:00
            httpOnly: false,
            overwrite: false,
        })
        ctx.body = 'cookie is ok'
    }
    else if (ctx.url === "/" ) {
        ctx.body = 'hello world' 
    }
    else {
        ctx.body = "404"
    }
});
app.listen(3000, () => {
    console.log("[demo] start is port 3000");
});
```


## 参考

* <https://github.com/chenshenhai/koa2-note>

## 问题
