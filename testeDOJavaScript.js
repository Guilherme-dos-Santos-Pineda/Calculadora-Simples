function novoAluno(nome,idade){
    return {nome,idade}
}

let alunos = [
    novoAluno("Guilherme", 21),
    novoAluno("Mario", 51),
    novoAluno("Paulo", 41),
    novoAluno("Polyana", 19),
]

// //FILTER
// function temMaisDe30(i){
//    return i.idade > 30
// }
// let filtro = alunos.filter(temMaisDe30)
// console.log(filtro);

// function filtro(c){
//     let alunosComFiltro = []
//     for(aluno of alunos){
//         if(c(aluno)){
//             alunosComFiltro.push(aluno)
//         }
//     }
//     return alunosComFiltro
// }
// console.log(filtro(temMaisDe30));


//MAP
// function alunosDaqui5Anos(alunos){
//     return {
//         nome: alunos.nome,
//         idade: alunos.idade + 5
//     }
   
// }
// let idade = alunos.map(alunosDaqui5Anos)
// console.log(idade);

// function mapa(c){
//     var alunosMapeados = []
//     for(aluno of alunos){
//         if(c(alunos)){
//             alunosMapeados.push(alunosDaqui5Anos(aluno))
//         }
//     }
//     return alunosMapeados
// }
// console.log(mapa(alunosDaqui5Anos));



// REDUCE

// function reduzirAlunos(o, i){
//     return o + i.nome
// }
// let reduzir = alunos.reduce(reduzirAlunos, "")
// console.log(reduzir);

// function reduzir(c){
//     let alunosReduzidos = []
//     for(aluno of alunos){
//         if(c(this, aluno)){
//             alunosReduzidos.push(reduzirAlunos)
//             return aluno.nome
//         }
//     }
//     return alunosReduzidos
// }

// console.log(reduzir(reduzirAlunos));


// let url ="https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"

// fetch(url)
//     .then((res)=>{
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data)
//     })

// let entrada1 = document.getElementById('entrada1');
// let entrada2 = document.getElementById('entrada2');
// let resultado = document.getElementById('resultado');

// function calcular(){
//     console.log("Calculando...");

//     let numero1 = parseFloat(entrada1.value)
//     let numero2 = parseFloat(entrada2.value)

//     let valorTotal = numero1 + numero2;
//     console.log(valorTotal)

// }
  
// var redu = alunos.reduce((total, n)=>{
//     return total + n.idade 
// },0)
// console.log(redu)


// function fazTudo(){
//     return this.idade + 1
// }



function pegar(num){
    var i = document.getElementById("entrada2").innerHTML
    document.getElementById("entrada2").innerHTML = i + num
}


function calcular()
{
    var resultado = document.getElementById('entrada2').innerHTML;
    if(resultado)
    {
        document.getElementById('entrada2').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('entrada2').innerHTML = "Nada..."
    }
}

function zerar(){
    var a = document.getElementById("entrada2").innerHTML
    document.getElementById("entrada2").innerHTML = ""
}