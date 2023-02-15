// const mostrarEscolha = document.getElementById('finalizar__botao')

// mostrarEscolha.onclick = function (){
//   const tamanho = document.getElementById('tamanho').elements;
//   const guarnicao = document.getElementById('guarnicao').elements;
//   const mistura = document.getElementById('mistura').elements;
//   const opcional = document.getElementById('opcional').elements;
//   const bebida = document.getElementById('bebida').elements;

//   let resultado = ``;
//   for(let i = 0; i < 3; i++){
//     if(tamanho[i].checked){
//       resultado = resultado + tamanho[i].value + " "
//     }
//     if(guarnicao[i].checked){
//       resultado = resultado + guarnicao[i].value + " "
//     }
//     if(mistura[i].checked){
//       resultado = resultado + mistura[i].value + " "
//     }
//     if(opcional[i].checked){
//       resultado = resultado + opcional[i].value + " "
//     }
//     if(bebida[i].checked){
//       resultado = resultado + bebida[i].value + " "
//     }
//   }
//   //document.getElementById("escolhas").innerHTML  = resultaddo
//   console.log(resultado);
// }

let dados = {
  tamanhos: [
    { tipo: "Pratinho P", preco: 7 },
    { tipo: "Pratinho M", preco: 12 },
    { tipo: "Pratinho G", preco: 15 }
  ],
  guarnicoes: [
    { tipo: "Arroz" },
    { tipo: "Baião" },
    { tipo: "Arroz à grega" }
  ],
  misturas: [
    { tipo: "Vatapá" },
    { tipo: "Creme de galinha" },
    { tipo: "Carne de Sol" }
  ],
  opcionais: [
    { tipo: "Salada" },
    { tipo: "Batata doce" },
    { tipo: "Paçoca" }
  ],
  bebidas: [
    { tipo: "Água" },
    { tipo: "Cajuína" },
    { tipo: "Coca-Cola" },
    { tipo: "Suco de manga" }
  ]
}


let pedido = {};

let checkboxes = document.querySelectorAll(".selecionando");
let btnPedidos = document.getElementById("finalizar__botao");

function getCheckBoxArray(cssSelector) {
  let result = document.querySelectorAll(cssSelector);
  return result;
}

btnPedidos.onclick = () => {
  let escreva = `
  <p>Tamanho Selecionado: ${pedido.tamanhos.tipo}</p> 
  <p>Guarnição Selecionado: ${pedido.guarnicoes.tipo}</p>
  <p>Mistura Selecionada: ${pedido.misturas.tipo}</p>
  <p>Opcional Selecionado: ${pedido.opcionais.tipo}</p>
  <p>Bebida Selecionada: ${pedido.bebidas.tipo}</p>`
  document.getElementById("resultado").innerHTML = escreva
}

const removeChecked = (arr) => {
  arr.forEach(element => {
    if (element.getAttribute("checked")) {
      element.setAttribute("checked", false);
      
    }
    return
  });
}

for (let checkbox of checkboxes) {
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      removeChecked(getCheckBoxArray(`.${e.target.parentNode.classList[1]}`))
      pedido["tamanhos"] = dados["tamanhos"][e.target.value];
      
    }
    // if(e.target.checked)
    // {
    //   pedido["guarnicoes"] = dados["guarnicoes"][e.target.value];
    //   console.log(pedido);
    // }
    // if(e.target.checked)
    // {
    //   pedido["misturas"] = dados["misturas"][e.target.value];
    //   console.log(pedido);
    // }
    // if(e.target.checked)
    // {
    //   pedido["opcionais"] = dados["opcionais"][e.target.value];
    //   console.log(pedido);
    // }
    // if(e.target.checked)
    // {
    //   pedido["bebidas"] = dados["bebidas"][e.target.value];
    //   console.log(pedido);
    // }
  })
}


