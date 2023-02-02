import query from "./../../../dataBase/dbConections.js";

// add cat
export const addLogic = (req, res) => {
  const { name, createdBy } = req.body;
  query.execute(
    `insert into categories (categories.name,createdBy) values ('${name}',${createdBy})`,
    (err, data) => {
      if (err) {
        res.json({ message: "user dosnt exist ", err, data });
      } else {
        res.json({ message: "success" });
      }
    }
  );
};
// update
export const updateCategory = (req, res) => {
  const { name, createdBy, id } = req.body;
  query.execute(`select * from categories where id = ${id}`, (err, data) => {
    if (data.length === 0) {
      res.json({ message: "category dosent exist " });
    } else {
      if (data[0].createdBy === createdBy) {
        query.execute(
          `update categories set categories.name = '${name}' where categories.id = ${id} `
        );
        res.json({ message: "updated" });
      } else {
        res.json({ message: "cant update wrong user " });
      }
    }
  });
};

// delete
export const deleteCategory = (req, res) => {
  const { name, createdBy, id } = req.body;
  query.execute(`select * from categories where id = ${id}`, (err, data) => {
    if (data.length === 0) {
      res.json({ message: "category dosent exist " });
    } else {
      query.execute(
        `DELETE FROM categories WHERE id =${id} AND createdBy=${createdBy}`,
        (err, data) => {
          if (data.affectedRows === 0) {
            res.json({ message: "wrong user ", data });
          } else {
            res.json({ message: "deleted", data });
          }
        }
      );
    }
  });
};
// get all

export const getAllCategory = (req, res) => {
  query.execute(`select * from categories`, (err, data) => {
    res.json(data);
  });
};
