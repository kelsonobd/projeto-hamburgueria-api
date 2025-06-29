import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export class Hamburguer extends Model {
    public id!: number;
    public nome!: string;
    public descricao!: string;
    public preco!: number;
}

Hamburguer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        disponivel: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        modelName: 'Hamburguer',
        tableName: 'hamburgueres',
        timestamps: false,
    }
);