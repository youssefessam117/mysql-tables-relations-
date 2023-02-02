import mysql from "mysql2";

const query = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "assignments 4",
});

export default query;
