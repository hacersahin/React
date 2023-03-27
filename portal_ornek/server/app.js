const express = require("express");

const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb"
});

connection.connect((err) => {
  if (err) {
    console.error("hata olustu ", err);
    return;
  }
  console.log("Bağlandı");
});

app.post("/kayit", (req, res) => {
  const { email, password } = req.body;
  const query = "INSERT INTO user (username,password) VALUES (?,?)";
  connection.query(query, [email, password], (err, result) => {
    if (err) {
      console.error("Veritabanına bilgi girerken hata oluştu ", err);
      res.status(500).send({ error: "kayıt oluşturuken hata olustu" });
      return;
    }
    res.status(200).send({ message: "kayıt olustu" });
  });
});

const PORT =process.env.PORT || 3001;
app.listen(PORT, ()=>{

    console.log(`server ${PORT} üzerinde dinleniyor`)
});
