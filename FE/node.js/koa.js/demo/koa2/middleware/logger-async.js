function log (ctx) {
    console.log(ctx.method, ctx.header.host + ctx.url);
};

module.exports = function loggerAsync() {
    return async function loggerAsyncMiddleware(ctx, next) {
        log(ctx);
        await next();
    };
};