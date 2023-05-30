
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

