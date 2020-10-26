const con = require('../server/datasources.json')
const data = require('./dummyData');
const knex = require('knex')({
    client: 'mysql',
    connection: con.db
});

exports.seed = () => {
    knex('Questions')
        .insert(data.Questions)
        .then(() => {
            knex('Questions')
                .select()
                .then(Questions => {
                    knex('Answers').insert(
                        [
                            {
                                body: 'Abdallah',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['0'].title).id
                            },
                            {
                                body: 'Alex',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['0'].title).id
                            },
                            {
                                body: 'Kareem',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['0'].title).id
                            },
                            {
                                body: 'Sara',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['0'].title).id
                            },
                            {
                                body: 'Don',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['0'].title).id
                            },
                            {
                                body: 'Palestine',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['1'].title).id
                            },
                            {
                                body: 'US',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['1'].title).id
                            },
                            {
                                body: 'UK',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['1'].title).id
                            },
                            {
                                body: 'Egypt',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['1'].title).id
                            },
                            {
                                body: 'Russia',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['1'].title).id
                            },
                            {
                                body: 'Algebra',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['3'].title).id
                            },
                            {
                                body: 'Programing',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['3'].title).id
                            },
                            {
                                body: 'Biology',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['3'].title).id
                            },
                            {
                                body: 'Chemistry',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['3'].title).id
                            },
                            {
                                body: 'Physics',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['3'].title).id
                            },
                            {
                                body: 'black',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'green',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'yellow',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'pink',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'blue',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'orange',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'silver',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'white',
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            }
                        ]
                    );
                })
                .finally(function () {
                    console.log('Seeding data completed')
                    return knex.destroy();
                });
        })
} 