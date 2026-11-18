
const sequelize = require('./src/db/sequelize');

sequelize.authenticate()
    .then(() => console.log('Kapcsolat OK'))
    .catch((error) => console.error('Hiba', error.message))
    .finally(() => sequelize.close());

    
