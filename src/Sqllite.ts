import * as sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();

let db: sqlite.Database = new sqlite3.Database('./profile.db');


var a = db.serialize();

db.serialize(function() { 
    db.each("select * from profile", function(err, row) {
        console.log(row.keystrokes + ": " + row.pattern);
    });
  });
   
  db.close();