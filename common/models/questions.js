'use strict';
const { pagination } = require('../utils');

module.exports = function (Questions) {
    /**
     * Define Remote hook to handle pagination
     */
    
    //handle pagination for GET /Questions
    Questions.beforeRemote('find', pagination);

    //handle pagination for GET /Questions/{id}/answers
    Questions.beforeRemote('*.__get__answers', pagination);
};