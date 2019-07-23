// let compras = ['salgadinho', 'coca-cola', 'chocolate', 'alcaxofra', 'pepino'];

// console.log(compras);

// compras.push("cebola");
// console.log(compras);

// compras.pop();
// console.log(compras);


// function somar(num1, num2){
//     console.log(num1 + num2);
// }

// function subtrair(num1, num2){
//     console.log(num1-num2);
// }
// subtrair(10, 15);
// subtrair(103, 500);
// subtrair(154, 15);

// function somar(a,b){
//     return a+b;
// }

// somar = (a,b) =>{
//     return a+b
// } 

let inputEmail = document.querySelector("#inputEmail");
let inputSenha = document.querySelector("#inputSenha");
let resposta = document.querySelector("p");
let botao = document.querySelector("button");

function validarLogin(){
    if(inputEmail.value == "kathlein.kk@gmail.com" && inputSenha.value == "123"){
        resposta.innerHTML = "Login Aprovado";
        resposta.style.color = "violet";
        resposta.style.border = "2px pink solid";
    }
    else{
        resposta.innerHTML = "Login Inválido";
        resposta.style.color = "green";
        resposta.style.border = "2px pink solid";
    }
}

botao.onclick = validarLogin;

