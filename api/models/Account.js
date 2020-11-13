const { DataTypes } = require('sequelize');
const db = require('../dbConfig');

 const Account = db.conexion.define('account', {
    balance:{
      type: DataTypes.BIGINT,
      allowNull: true,
      default: 0,
    },
    cbu:{
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: true 
        }  
    },
    code:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    currency:{
        type: DataTypes.ENUM('usd','ars'),
        defaultValue: 'ars'
    },
    verified:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue:false
    }
  
})
module.exports={
    Account
}
 