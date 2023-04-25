      function calculaFatorial() {
        var numero = document.getElementById("numero").value;
        var resultado = document.getElementById("resultado");
        if (numero < 0) {
          resultado.innerHTML = "Não é possível calcular o fatorial de um número negativo";
        } else if (numero == 0 || numero == 1) {
          resultado.innerHTML = "O fatorial de " + numero + " é 1";
        } else {
          var fatorial = 1;
          for (var i = 2; i <= numero; i++) {
            fatorial *= i;
          }
          alert("O fatorial do numero é: " + fatorial);
        }
      }
	  
	  function verificacpf(){
  var cpf = document.getElementById("cpf").value;
  cpf = cpf.replace(/[^\d]+/g, ''); // remove caracteres não numéricos

  if (cpf.length !== 11) {
    alert("O CPF deve conter 11 dígitos.");
    return false;
  }

  var soma = 0;
  for (var i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  var resto = soma % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.charAt(9))) {
    alert("O CPF é falso, pois o primeiro dígito verificador é inválido.");
    return false;
  }

  soma = 0;
  for (i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  resto = soma % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.charAt(10))) {
    alert("O CPF é falso, pois o segundo dígito verificador é inválido.");
    return false;
  }

  alert("O CPF é válido.");
  return true; // CPF válido
}

function fibonacci(){
var n = document.getElementById("fibo").value;
var x = 0, y = 1, fib2 = 0, i;
for (i = 2; i <= n; i++) {
fib2 = x + y;
x = y;
y = fib2;	
}
alert("O valor da sequência fibonacci para este número de termos é de: "+fib2);	
}


function numeroPerfeito(numero) {
        var soma = 0;
        for (var i = 1; i < numero; i++) {
          if (numero % i === 0) {
            soma += i;
          }
        }
        return soma === numero;
}
	  
function calculanumperfeito(){
var iinicio = document.getElementById("numperfeitoinicio").value;
var ifinal = document.getElementById("numperfeitofinal").value;

var numerosPerfeitos = [];

        for (var i = iinicio; i <= ifinal; i++) {
          if (numeroPerfeito(i)) {
            numerosPerfeitos.push(i);
          }
        }
alert("Os números perfeitos encontrados foram: "+ numerosPerfeitos.join(", "));
}

function identificanumprimo(){
var num = document.getElementById("verificaprimo2").value;
var primo = true;
 if (num < 1) {
    alert("Zero ou números negativos não são primos.");
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
    primo = false;		   
    } 
}
if (primo){
alert("O número é primo.");		
} else {
alert("O número não é primo.");		
}
}

function verificatriangulo() {
  var primeirovalor = parseFloat(document.getElementById("valor1").value); // Como vou usar operações entre variáveis, usarei o parse
  var segundovalor = parseFloat(document.getElementById("valor2").value);
  var terceirovalor = parseFloat(document.getElementById("valor3").value);
  if (isNaN(primeirovalor) || isNaN(segundovalor) || isNaN(terceirovalor)) {
    alert("Por favor, digite valores numéricos para os lados do triângulo.");
  }
  if (primeirovalor + segundovalor <= terceirovalor || primeirovalor + terceirovalor <= segundovalor || segundovalor + terceirovalor <= primeirovalor) {
    alert("Os segmentos de retas não formam um triângulo");
  } else {
    alert("Os segmentos de retas formam um triângulo");
  }
}


function multiplicamatrizes(){
var matriz1l1c1 = parseInt(document.getElementById("matriz1l1c1").value);
var matriz1l1c2 = parseInt(document.getElementById("matriz1l1c2").value);
var matriz1l1c3 = parseInt(document.getElementById("matriz1l1c3").value);
var matriz1l2c1 = parseInt(document.getElementById("matriz1l2c1").value);
var matriz1l2c2 = parseInt(document.getElementById("matriz1l2c2").value);
var matriz1l2c3 = parseInt(document.getElementById("matriz1l2c3").value);
var matriz1l3c1 = parseInt(document.getElementById("matriz1l3c1").value);
var matriz1l3c2 = parseInt(document.getElementById("matriz1l3c2").value);
var matriz1l3c3 = parseInt(document.getElementById("matriz1l3c3").value);

var matriz2l1c1 = parseInt(document.getElementById("matriz2l1c1").value);
var matriz2l1c2 = parseInt(document.getElementById("matriz2l1c2").value);
var matriz2l1c3 = parseInt(document.getElementById("matriz2l1c3").value);
var matriz2l2c1 = parseInt(document.getElementById("matriz2l2c1").value);
var matriz2l2c2 = parseInt(document.getElementById("matriz2l2c2").value);
var matriz2l2c3 = parseInt(document.getElementById("matriz2l2c3").value);
var matriz2l3c1 = parseInt(document.getElementById("matriz2l3c1").value);
var matriz2l3c2 = parseInt(document.getElementById("matriz2l3c2").value);
var matriz2l3c3 = parseInt(document.getElementById("matriz2l3c3").value);

var matriz3l1c1 = matriz1l1c1*matriz2l1c1;
var matriz3l1c2 = matriz1l1c2*matriz2l1c2;
var matriz3l1c3 = matriz1l1c3*matriz2l1c3;

var matriz3l2c1 = matriz1l2c1*matriz2l2c1;
var matriz3l2c2 = matriz2l1c2*matriz2l2c2;
var matriz3l2c3 = matriz1l2c3 + matriz2l2c3;

var matriz3l3c1 = matriz1l3c1*matriz2l3c1;
var matriz3l3c2 = matriz1l3c2*matriz2l3c2;
var matriz3l3c3 = matriz1l3c3*matriz2l2c3;

alert("A matriz resultante é: \n" + matriz3l1c1 + "|" + matriz3l1c2 + "|" + matriz3l1c3 + "\n" + matriz3l2c1 + "|" + matriz3l2c2 + "|" + matriz3l2c3 + "\n" + matriz3l3c1 + "|" + matriz3l3c2 + "|" + matriz3l3c3);
}