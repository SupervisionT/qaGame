const pagination = (ctx, inst, next) => {
    console.log('inst', inst);
    if (!ctx.args.filter || !ctx.args.filter.limit) {
        //set default value for pagination if not passed by request
        console.log('forcing limit!');
        if (!ctx.args.filter) ctx.args.filter = {};
        ctx.args.filter.limit = 2;
    } else if (ctx.args.filter.limit) {
        //handle max number of items in request
        ctx.args.filter.limit = (ctx.args.filter.limit > 2) ? 2 : ctx.args.filter.limit;
    }
    next();
}

module.exports = {
    pagination
}