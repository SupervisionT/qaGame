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
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['0'].title).id
                            },
                            {
                                body: 'Alex',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['0'].title).id
                            },
                            {
                                body: 'Kareem',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['0'].title).id
                            },
                            {
                                body: 'Sara',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['0'].title).id
                            },
                            {
                                body: 'Don',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['0'].title).id
                            },
                            {
                                body: 'Palestine',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['1'].title).id
                            },
                            {
                                body: 'US',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['1'].title).id
                            },
                            {
                                body: 'UK',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['1'].title).id
                            },
                            {
                                body: 'Egypt',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['1'].title).id
                            },
                            {
                                body: 'Russia',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['1'].title).id
                            },
                            {
                                body: 'Algebra',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['3'].title).id
                            },
                            {
                                body: 'Programing',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['3'].title).id
                            },
                            {
                                body: 'Biology',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['3'].title).id
                            },
                            {
                                body: 'Chemistry',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['3'].title).id
                            },
                            {
                                body: 'Physics',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['3'].title).id
                            },
                            {
                                body: 'black',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'green',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'yellow',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'pink',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'blue',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'orange',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'silver',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            },
                            {
                                body: 'white',
                                votes: 0,
                                questionId: Questions.find(Questions => Questions.TITLE === data.Questions['2'].title).id
                            }
                        ]
                    )
                    .then()
                })
                .finally( () => {
                    console.log('Seeding data completed')
                    return knex.destroy();
                });
        })
} 