'use strict';
const { paganation } = require('../utils');

module.exports = function (Questions) {
    Questions.beforeRemote('find', function (ctx, instance, next) {
        paganation(ctx, instance, next);
    });

    Questions.beforeRemote('*.__get__answers', (ctx, instance, next) => {
        paganation(ctx, instance, next);
    });
};