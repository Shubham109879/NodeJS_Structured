// import { Sequelize } from "sequelize";

import { sq } from "../sequelize.config";
import { DataTypes } from "sequelize";
import { Address } from "./address.model";


export const Student = sq.define("Student", {
   id: {
    //  type: DataTypes.UUID,
    //  defaultValue: DataTypes.UUIDV4,
    type: DataTypes.INTEGER,
    autoIncrement:true,
     primaryKey: true,
    //  allowNull: false
   },
   name: {
     type: DataTypes.STRING,
   },
   age: {
     type: DataTypes.INTEGER,
   },
});

Student.belongsTo(Address);

sq.sync().then(() => {
    console.log('Student table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

