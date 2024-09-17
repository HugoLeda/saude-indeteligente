const Cadastro = require('../models/CadastroData');

// Funções do controlador aqui...
module.exports = {
  async read(request, response) {
    const cadastroList = await Cadastro.find();
    return response.json(cadastroList);
  },
  async create(request, response) {
    const { nome, dataNascimento, sexo, logradouro, numero, bairro, cidade, estado, telefone, alergias, medicamentos } = request.body;

    if (!nome || !dataNascimento || !sexo) {
      return response.status(400).json({ error: 'Campos obrigatórios faltando' });
    }

    try {
      const novoCadastro = new Cadastro({
        nome,
        dataNascimento,
        sexo,
        logradouro,
        numero,
        bairro,
        cidade,
        estado,
        telefone,
        alergias,
        medicamentos
      });

      await novoCadastro.save();
      response.status(201).json(novoCadastro);
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  },
  async delete(request, response) {
    const { id } = request.params;

    const cadastroDeleted = await Cadastro.findByIdAndDelete(id);
    
    if (cadastroDeleted) {
      return response.json(cadastroDeleted);
    }

    return response.status(404).json({ error: 'Cadastro não encontrado' });
  }
};
