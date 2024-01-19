const { Sequelize } = require('sequelize');


const SIGHEXTERNA = new Sequelize('SIGH_EXTERNA', 'SA', 'Heves.2016', {
  host: '192.168.210.74',
  dialect:  'mssql',
  dialectOptions: {
    options: {
      encrypt: false, 
    },
  },
});



module.exports=SIGHEXTERNA