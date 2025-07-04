import "dotenv/config";
import { sequelize } from "../database";
import criarUsuario from "../models/Usuario";
import bcrypt from "bcryptjs"

const Usuario = criarUsuario(sequelize);

async function criarAdmin() {
    try {
        const senhaCriptografada = await bcrypt.hash("123456", 10)

        const admin = await Usuario.create({
            nome: "Administrador",
            email: "kelsonobd@gmail.com",
            senha: senhaCriptografada,
        })

        console.log("Admin criado com sucesso");
        console.log(admin.dataValues);
    } catch (error) {
        console.log("Error ao criar admin:", error)
    } finally {
        await sequelize.close();
    }
}

criarAdmin();