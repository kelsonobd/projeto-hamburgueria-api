import { DataTypes } from "sequelize";

export default (sequelize: any) => {
    const Usuario = sequelize.define("Usuario",
        {
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        })
    return Usuario;
}