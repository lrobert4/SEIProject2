const Issue = require('../models/issue.js');

const newIssues = [
    {
        description: 'Server crashed',
        createdAt: new Date(1970, 1, 1),
        status: 'open',
        priority: 'Low',
    },
];

Issue.deleteMany().then(() => {
    return Issue.create(newIssues);
}).then(() => {
    console.log('Database seeded');
});
