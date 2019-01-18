 const db = require('./models');

 db.sync({force: true})
  .then(() => {
    db.close()
  })
  .catch(error => {
    console.log(error);
    db.close();
  })


