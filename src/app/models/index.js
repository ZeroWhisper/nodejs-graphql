const Sequelize = require('sequelize');
const { extname } = require('path');
const generators = require('require-dir')(null, {
  filter: item => {
    // Por padrão, o index.js não é carregado
    if (extname(item) === '.js') return item;
  }
});

const { url } = require('../../config');

const sequelize = new Sequelize(url, { dialect: 'postgres' });

const db = {};

Object.keys(generators).forEach(name => {
  const model = generators[name](sequelize, Sequelize.DataTypes);
  db[name] = model;
});

Object.keys(db).forEach(name => {
  if (db[name].associate) {
    db[name].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;

// console.log('SAIDA', db);

// console.log(teste);

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const config = require('../../config/index.js');

// const db = {};
// const sequelize = new Sequelize(config);

// console.log('TO NO INDEX DO MODEL');

// fs.readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
//     );
//   })
//   .forEach(file => {
//     const model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
