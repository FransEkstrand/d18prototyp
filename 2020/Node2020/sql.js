const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/chinook.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

db.each(`SELECT *  FROM Playlists WHERE playlistId = "11";`, (err, row) => {
    if (err) {
        console.error(err.message);
    }
    console.log(row.PlaylistId + "\t" + row.Name);
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});