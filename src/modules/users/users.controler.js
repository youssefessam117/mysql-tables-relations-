import query from "./../../../dataBase/dbConections.js";

export const signUp = (req, res) => {
  const { password, name, email } = req.body;
  query.execute(`select * from users where email = '${email}'`, (err, data) => {
    if (data.length == 0) {
      query.execute(
        `insert into users (name,email,password) values ('${name}','${email}','${password}')`
      );
      res.json({ message: "success" });
    } else {
      res.send({ message: "email already exist" });
    }
  });
};

export const signIn = (req, res) => {
  const { password, email } = req.body;
  query.execute(`select * from users where email = '${email}'`, (err, data) => {
    if (data.length == 0) {
      res.send({ message: "email doesn't exist" });
    } else {
      if (data[0].password === password) {
        res.json({ message: "success", data });
      } else {
        res.send({ message: "incort password" });
      }
    }
  });
};
