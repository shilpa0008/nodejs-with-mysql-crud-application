var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "3306",
  password: "Shilpa@456",
  database: "shilpa"
});

con.connect(function(err) {
  if (err) 
  throw err;
  else
  console.log("Connected!");
  con.query("create database shilpa", function(err,result){
      if(err)
      throw err;
      else
      console.log("created database sueccsfully")
  });
});


con.query('create table employee(id int(3) PRIMARY KEY, name VARCHAR(50), email VARCHAR(50))',function(err,res) {
  if(err){
      throw err;
  }
  else{
  console.log('Table created.!');
  }
  });



con.query('select * from employee',
    function (error, results) {
        if (error) throw error;
        console.log(results);
    });


    con.query('INSERT INTO employee values(1,"seema","seema@gmail.com")', function (err, res) {
    if(err) throw err;
    else console.log('inserted records successfully.')
  });


  
con.query('select * from employee',
function (error, results) {
    if (error) throw error;
    console.log(results);
});

con.query("UPDATE employee SET email = anu@gmail.com' WHERE email = 'seema@gmail.com'", (err, result) => {
  if (err) throw err;
  else console.log('Updated successfully')
  }
);

  
con.query('select * from employee',
function (error, results) {
    if (error) throw error;
    console.log(results);
});

  con.query('DELETE FROM employee where id = 1', (err, result) => {
      if (err) throw err;
      else 
      console.log('Deleted..!!')
     }
  );