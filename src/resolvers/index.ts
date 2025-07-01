
const resolvers = {
    Query: {
        hello: () => "Olá, Kelson! Servidor está rodando 🚀",
        hamburgueres: async (_: any, __: any, context: any) => {
            return await context.models.Hamburguer.findAll();
        },

    },

    Mutation: {
        criarHamburguer: async (_: any, args: any, context: any) => {
            const { nome, descricao, preco, imagem, disponivel, categoria } = args;
            return await context.models.Hamburguer.create({ nome, descricao, preco, imagem, disponivel, categoria })
        },
        deletarHamburguer: async (_: any, args: any, context: any) => {
            const { id } = args;
            const deletado = await context.models.Hamburguer.destroy({ where: { id } })
            return deletado > 0;
        },
        editarHamburguer: async (_: any, args: any, context: any) => {
            const { id, nome, descricao, preco, imagem, disponivel, categoria } = args;


            const [linhasAfetadas] = await context.models.Hamburguer.update({ nome, descricao, preco, imagem, disponivel, categoria }, { where: { id } });

            if (linhasAfetadas === 0) return null;
            return await context.models.Hamburguer.findByPk(id)
        }
    }
};
export default resolvers;