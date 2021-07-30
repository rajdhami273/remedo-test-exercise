const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "mysql.remedoapp.com",
  user: "remedo",
  password: "mypass",
  database: "remedo-database",
});

const query =
  "select u.user_id, u.address, t.total_invoice_amount, t.invoice_amount_paid, t.remedo_commission from users u inner join transactions t on u.user_id=t.user_id where user_id='u1';";
conn.connect((err) => {
  if (err) throw err;
  conn.query(query, (error, data) => {
    if (err) throw error;
    console.log(data);
  });
});
