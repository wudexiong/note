
const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
const app = new Koa();

app.use(static(path.join(__dirname, "./static")))

app.listen(3001, ()=> {
    console.log("Server is running on port 3001")
})