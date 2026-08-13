function apresentar(nome){
    console.log(`olá, ${nome}.`)
}
apresentar("Yen");

function sistema(nome = "Visitante"){
    console.log(`Olá, ${nome}`);
}

sistema();
sistema("Yen");

function somar(numero1, numero2){
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
}

somar(69, 69);