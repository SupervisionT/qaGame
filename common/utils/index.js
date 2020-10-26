'use strict';
const {DEFAUL_PAGINATION, MAX_PAGINATION_LIMIT, DEFAUL_PAGINATION_LIMIT} = require('./constants')

const pagination = (ctx, inst, next) => {

    if (!ctx.args.filter || !ctx.args.filter.limit) {
        //set default value for pagination if not passed by request
        console.log('forcing limit!');
        if (!ctx.args.filter) ctx.args.filter = {};
        ctx.args.filter.limit = DEFAUL_PAGINATION;
    } else if (ctx.args.filter.limit) {
        //handle max number of items in request
        ctx.args.filter.limit = (ctx.args.filter.limit > MAX_PAGINATION_LIMIT) ? DEFAUL_PAGINATION_LIMIT : ctx.args.filter.limit;
    }
    next();
}

module.exports = {
    pagination
}