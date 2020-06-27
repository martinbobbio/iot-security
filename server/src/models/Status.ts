import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../helpers/database';

class Status extends Model {
    public status!: number;
    public id!: number;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

Status.init({
    id: {
      type: new DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    }
  }, {
    timestamps: false,
    tableName: 'status',
    sequelize: sequelize,
  });

export default Status;