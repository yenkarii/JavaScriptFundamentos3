const alunos = [
    { nome: "Fernanda", nota: 8 },
    { nome: "Giovanna", nota: 5 },
    { nome: "Giulia", nota: 1 },
    { nome: "Guilherme", nota: 10 },
];

console.log(alunos);

console.log("===================================================================");

const aprovados = alunos.filter((aluno) => aluno.nota >= 7);

console.log(aprovados);

aprovados.forEach((aluno) => {
    console.log(`O aluno ${aluno.nome} é bom, tirou a nota ${aluno.nota}.`)
})