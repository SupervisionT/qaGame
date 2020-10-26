'use strict';
const { pagination } = require('../utils');

module.exports = function (Questions) {
    Questions.beforeRemote('find', function (ctx, instance, next) {
        pagination(ctx, instance, next);
    });

    Questions.beforeRemote('*.__get__answers', (ctx, instance, next) => {
        pagination(ctx, instance, next);
    });
};