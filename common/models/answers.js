'use strict';
const { pagination } = require('../utils');

module.exports = function (Answers) {
    /**
     * Define Remote hook to handle pagination
     */
    Answers.beforeRemote('find', (ctx, instance, next) => {
        pagination(ctx, instance, next);
    });

    /**
     * @param {number} id 
     * @param {string} vote 
     * @param {function} cb 
     * 
     * Voting request handler function :
     * 
     * - get answer by id
     * - update votes field value
     * - save votes new value
     */
    Answers.voting = (id, vote, cb) => {
        if (['up', 'down'].includes(vote)) {
            Answers.findById(id, function (err, Answers) {

                Answers.votes = (vote == 'up') ? Answers.votes + 1 : Answers.votes - 1;

                return Answers.save(function (err, AnswersSaved) {
                    cb(null, AnswersSaved);
                })
            })
        }
        else {
            cb({ status: 401, message: 'vote can only accept up or down' }, null);
        }
    }
    
    /**
     * Defining new method called vote
     * The path of the method is Answers/{id}/vote/{vote}
     * @param {number} id 
     * @param {string} vote 'up'/'down'
     */
    Answers.remoteMethod(
        'voting', {
        http: {
            path: '/:id/vote/:vote',
            verb: 'put'
        },
        accepts: [
            { arg: 'id', type: 'number', required: true, http: { source: 'path' } },
            { arg: 'vote', type: 'string', required: true, http: { source: 'path' } },
        ],
        returns: [
            {
                arg: 'voting',
                type: 'string',
            }
        ]
    }
    );
};