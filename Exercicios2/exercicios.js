// 1)
function ParouImpar() {
  var numero = parseInt(document.getElementById("numero").value);

  if (numero % 2 === 0) {
    alert("O número é par.");
  } else {
    alert("O número é ímpar.");
  }
}

// 2)
// Vê se é par ou ímpar por parâmetro, a mensagem é mostrada no console do navegador
function verificarParidade(numero) {
  if (numero % 2 === 0) {
    console.log("O número é par.");
  } else {
    console.log("O número é ímpar.");
  }
}

function ParouImparParametro() {
  var numeroparametro = parseInt(document.getElementById("numeroparametro").value);
  verificarParidade(numeroparametro);
}

// 3)
function fibonacci(n){
var x = 0, y = 1, fib2 = 0, i;
for (i = 2; i <= n; i++) {
fib2 = x + y;
x = y;
y = fib2;	
}
alert("O valor da sequência fibonacci para este número de termos é de: "+fib2);	
}

function FibonacciParametro() {
  var n = parseInt(document.getElementById("numfibonacciparametro").value);
  fibonacci(n);
}

// 4)
function numeroPerfeito(numero) {
  var soma = 0;
  for (var i = 1; i < numero; i++) {
    if (numero % i === 0) {
      soma += i;
    }
  }
  return soma === numero;
}

function verificarNumeroPerfeito() {
  var numPerfeito = parseInt(document.getElementById("numperfeitoentrada").value);
  
  if (numeroPerfeito(numPerfeito)) {
    alert(numPerfeito + " é um número perfeito.");
  } else {
    alert(numPerfeito + " não é um número perfeito.");
  }
}

// 5)
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
var ifinal = document.getElementById("intervalofinal").value;

var numerosPerfeitos = [];

        for (var i = 0; i <= ifinal; i++) {
          if (numeroPerfeito(i)) {
            numerosPerfeitos.push(i);
          }
        }
alert("Os números perfeitos encontrados foram: "+ numerosPerfeitos.join(", "));
}

// 6)
function saoAnagramas(string1, string2) {
  // Remove os espaços em branco e converte as strings para letras minúsculas
  var str1 = string1.replace(/\s/g, '').toLowerCase();
  var str2 = string2.replace(/\s/g, '').toLowerCase();

  // Verifica se as duas strings têm o mesmo tamanho
  if (str1.length !== str2.length) {
    return false;
  }

  // Cria objetos para armazenar a contagem de cada caractere em ambas as strings
  var charCount1 = {};
  var charCount2 = {};

  // Conta a ocorrência de cada caractere na primeira string
  for (var i = 0; i < str1.length; i++) {
    var char = str1[i];
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Conta a ocorrência de cada caractere na segunda string
  for (var j = 0; j < str2.length; j++) {
    var char = str2[j];
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Verifica se as contagens de caracteres são iguais para ambas as strings
  for (var char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

function verificarAnagrama() {
  var string1 = document.getElementById("entradastring1").value;
  var string2 = document.getElementById("entradastring2").value;
  
  if (saoAnagramas(string1, string2)) {
    alert("As strings são anagramas.");
  } else {
    alert("As strings não são anagramas.");
  }
}

// 7)
function checarPalindromo() {
      var entrada = document.getElementById("entradastringpoli").value;
      var entradaSemEspacos = entrada.replace(/\s/g, ""); // Remover espaços em branco
      var entradaInvertida = entradaSemEspacos.split("").reverse().join(""); // Inverter a string

      if (entradaSemEspacos.toLowerCase() === entradaInvertida.toLowerCase()) {
        alert("A string é um palíndromo!");
      } else {
        alert("A string não é um palíndromo!");
      }
}

// 8)
function ordenarValores(numero1, numero2, numero3, numero4) {
  // Coloca os valores em um array
  var valores = [numero1, numero2, numero3, numero4];

  // Ordena o array em ordem crescente
  valores.sort(function(a, b) {
    return a - b;
  });

  // Retorna o array ordenado
  return valores;
}

function reordenarValores() {
  var numero1 = parseInt(document.getElementById("entradanumero1").value);
  var numero2 = parseInt(document.getElementById("entradanumero2").value);
  var numero3 = parseInt(document.getElementById("entradanumero3").value);
  var numero4 = parseInt(document.getElementById("entradanumero4").value);
  
  var listaOrdenada = ordenarValores(numero1, numero2, numero3, numero4);
  
  alert("Lista ordenada: " + listaOrdenada.join(", "));
}

// 9)
function chamarTodasAsFuncoes() {
  ParouImpar();
  ParouImparParametro();
  FibonacciParametro();
  verificarNumeroPerfeito();
  calculanumperfeito();
  verificarAnagrama();
  checarPalindromo();
  reordenarValores();
}

//10)
function adivinharNumero() {
  var numeroAleatorio = Math.floor(Math.random() * 5) + 1;
  var chute;
  
  do {
    chute = parseInt(prompt("Digite um número entre 1 e 5:"));
    
    if (chute === numeroAleatorio) {
      console.log("Parabéns! Você acertou o número.");
      return;
    } else {
      console.log("Número incorreto. Tente novamente.");
    }
  } while (true);
}





