
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

