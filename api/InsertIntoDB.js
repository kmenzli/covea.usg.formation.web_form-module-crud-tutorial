var faker = require('faker');
var fs = require('fs');

var database = {tutorials: []};

for (var i = 1; i <= 100; i++) {
    database.tutorials.push({
        id: i,
        title: faker.title.findName(),
        description: faker.internet.email(),
        published: faker.commerce.userName,
    });
}

var json = JSON.stringify(database);
fs.writeFile('api/db.json', json, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    ;
    console.log("db.json created");

});
