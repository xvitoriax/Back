const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
const Event = db.event;
const User = db.user;
const Compra = db.compra;

db.sequelize.sync({ alter: true }).then(() => {
  console.log('Resync Database with { alter: true }');
  initial(); // Inicializa dados padrão
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to psytrip application." });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/event.routes')(app);
require('./app/routes/compra.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });

  db.role.belongsToMany(db.user, {
    through: "user_roles"
  });
  db.user.belongsToMany(db.role, {
    through: "user_roles"
  });
}
