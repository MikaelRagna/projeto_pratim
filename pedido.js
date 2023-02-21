let dados = {
  tamanhos: [
    { tipo: "Pratinho P", preco: 7 },
    { tipo: "Pratinho M", preco: 12 },
    { tipo: "Pratinho G", preco: 15 },
  ],
  guarnicoes: [{ tipo: "Arroz" }, { tipo: "Baião" }, { tipo: "Arroz à grega" }],
  misturas: [
    { tipo: "Vatapá" },
    { tipo: "Creme de galinha" },
    { tipo: "Carne de Sol" },
  ],
  opcionais: [{ tipo: "Salada" }, { tipo: "Batata doce" }, { tipo: "Paçoca" }],
  bebidas: [
    { tipo: "Água" },
    { tipo: "Cajuína" },
    { tipo: "Coca-Cola" },
    { tipo: "Suco de manga" },
  ],
};

let pedido = {};
let checkboxes = document.querySelectorAll(".selecionando");
let tamanho = document.querySelectorAll(".tamanho");
let guarnicao = document.querySelectorAll(".guarnicao");
let mistura = document.querySelectorAll(".mistura");
let opcional = document.querySelectorAll(".opcional");
let bebida = document.querySelectorAll(".bebida");
let btnPedidos = document.getElementById("finalizar__botao");


// function getCheckBoxArray(cssSelector) {
//   let result = document.querySelectorAll(cssSelector);
//   return result;
// }

// const removeChecked = (arr) => {
//   arr.forEach((element) => {
//     if (element.getAttribute("checked")) {
//       element.setAttribute("checked", false);
//     }
//     return;
//   });
// };



tamanho.forEach((_, i) => {
  tamanho[i].addEventListener("change", (e) => {
    if (e.target.checked) {
      //removeChecked(getCheckBoxArray(`.${e.target.parentNode.classList[1]}`));
      pedido["tamanhos"] = dados["tamanhos"][e.target.value];
      console.log(pedido);
    }
  });
});

guarnicao.forEach((_, i) => {
  guarnicao[i].addEventListener("change", (e) => {
    if (e.target.checked) {
      //removeChecked(getCheckBoxArray(`.${e.target.parentNode.classList[1]}`));
      pedido["guarnicoes"] = dados["guarnicoes"][e.target.value];
      console.log(pedido);
    }
  });
});

mistura.forEach((_, i) => {
  mistura[i].addEventListener("change", (e) => {
    if (e.target.checked) {
      //removeChecked(getCheckBoxArray(`.${e.target.parentNode.classList[1]}`));
      pedido["misturas"] = dados["misturas"][e.target.value];
      console.log(pedido);
    }
  });
});

opcional.forEach((_, i) => {
  opcional[i].addEventListener("change", (e) => {
    if (e.target.checked) {
      //removeChecked(getCheckBoxArray(`.${e.target.parentNode.classList[1]}`));
      pedido["opcionais"] = dados["opcionais"][e.target.value];
      console.log(pedido);
    }
  });
});

bebida.forEach((_, i) => {
  bebida[i].addEventListener("change", (e) => {
    if (e.target.checked) {
      //removeChecked(getCheckBoxArray(`.${e.target.parentNode.classList[1]}`));
      pedido["bebidas"] = dados["bebidas"][e.target.value];
      console.log(pedido);
    }
  });
});

btnPedidos.onclick = () => {
  if (pedido.opcionais) {
    op = `Opcional Selecionado: ${pedido.opcionais.tipo}`;
  } else {
    op = `Opcional Selecionado: Nenhum `;
  }
  if (pedido.bebidas) {
    beb = `Bebida Selecionada: ${pedido.bebidas.tipo}`;
  } else {
    beb = `Bebida Selecionado: Nenhum `;
  }
  let escreva = `
  Tamanho Selecionado: ${pedido.tamanhos.tipo}
  Guarnição Selecionado: ${pedido.guarnicoes.tipo}
  Mistura Selecionada: ${pedido.misturas.tipo}
  ${op}
  ${beb}`;
  return swal(escreva)
}

