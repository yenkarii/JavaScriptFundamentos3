const respostaAPI = '[{"id": 1, "nome": "Vinicius"},{"id": 2, "nome": "Iago"}]';

const usuario = JSON.parse(respostaAPI);

usuario.forEach(aluno => {
    console.log(aluno.nome)
});