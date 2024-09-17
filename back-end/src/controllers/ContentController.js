const CadastroModel = require('../models/CadastroData');

module.exports = {

    async update(request, response) {
        const { id } = request.params;
        const { nome, cpf } = request.body; // Assumindo que você está atualizando nome e cpf

        try {
            // Buscar o cadastro pelo ID
            const cadastro = await CadastroModel.findById(id);

            // Verificar se o cadastro foi encontrado
            if (!cadastro) {
                return response.status(404).json({ error: 'Cadastro não encontrado' });
            }

            // Atualizar os campos desejados
            if (nome) cadastro.nome = nome;
            if (cpf) cadastro.cpf = cpf;

            // Salvar as alterações
            await cadastro.save();

            // Retornar o cadastro atualizado
            return response.status(200).json(cadastro);
        } catch (error) {
            console.error('Erro ao atualizar cadastro:', error);
            return response.status(500).json({ error: 'Erro ao atualizar cadastro' });
        }
    }
};
