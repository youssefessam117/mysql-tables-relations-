import query from "./../../../dataBase/dbConections.js";

// add product
export const addproduct = (req, res) => {
  const { name, description, price, category_id, createdBy } = req.body;
  query.execute(
    `insert into products (products.name,description,price,category_id,createdBy) values ('${name}','${description}','${price}',${category_id},${createdBy})`,
    (err, data) => {
      if (err) {
        res.json({ message: err.sqlMessage });
      } else {
        res.json({ message: "success", data });
      }
    }
  );
};

//delet product

export const deleteProducts = (req, res) => {
  const { createdBy, id } = req.body;
  query.execute(`select * from products where id = ${id}`, (err, data) => {
    if (data.length === 0) {
      res.json({ message: "products dosent exist " });
    } else {
      query.execute(
        `DELETE FROM products WHERE id =${id} AND createdBy=${createdBy}`,
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
// _update

export const updateProducts = (req, res) => {
  const { name, createdBy, id } = req.body;
  query.execute(`select * from products where id = ${id}`, (err, data) => {
    if (data.length === 0) {
      res.json({ message: "products dosent exist " });
    } else {
      if (data[0].createdBy === createdBy) {
        query.execute(
          `update products set products.name = '${name}' where products.id = ${id} `
        );
        res.json({ message: "updated" });
      } else {
        res.json({ message: "cant update wrong user " });
      }
    }
  });
};
// get all products with user and category

export const getUSerProducts = (req, res) => {
  const { id } = req.body;
  query.execute(
    `SELECT products.name,categories.name,users.name FROM users JOIN products ON users.id = products.createdBy JOIN categories ON categories.id = products.category_id WHERE products.id = ${id}`,
    (err, data) => {
      res.json(data);
    }
  );
};
// search

export const searchProducts = (req, res) => {
  const { search } = req.body;
  query.execute(
    `select * from products where name IN ('${search}')`,
    (err, data) => {
      if (data.length > 0) {
        res.json(data);
      } else {
        res.send({ message: "name dosent exist " });
      }
    }
  );
};
