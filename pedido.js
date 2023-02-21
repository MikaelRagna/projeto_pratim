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
  opcionais: [{ tipo: "Salada" }, { tipo: "Paçoca" }, { tipo: "Vinagrete" }],
  bebidas: [
    { tipo: "Água" },
    { tipo: "Cajuína" },
    { tipo: "Coca-Cola" },
    { tipo: "Suco de manga" },
  ],
};

let pedido = [];
let checkboxes = document.querySelectorAll(".selecionando");
let tamanho = document.querySelectorAll(".tamanho");
let guarnicao = document.querySelectorAll(".guarnicao");
let mistura = document.querySelectorAll(".mistura");
let opcional = document.querySelectorAll(".opcional");
let bebida = document.querySelectorAll(".bebida");
let btnPedidos = document.getElementById("finalizar__botao");

tamanho.forEach((_, i) => {
  tamanho[i].addEventListener("change", (e) => {
    if (e.target.checked) {
      pedido["tamanhos"] = dados["tamanhos"][e.target.value];
      if (pedido.tamanhos.tipo === "Pratinho P") {
        swal("pode adicionar uma mistura");
        console.log("pode adicionar uma mistura");
        return pedido.tamanhos.tipo;
      }
      if (pedido.tamanhos.tipo === "Pratinho M") {
        swal("pode adicionar até duas misturas");
        console.log("pode adicionar até duas misturas");
      }
      if (pedido.tamanhos.tipo === "Pratinho G") {
        swal("pode adicionar até três misturas");
        console.log("pode adicionar até três misturas");
      }
      console.log(pedido);
    }
  });
});

guarnicao.forEach((_, i) => {
  guarnicao[i].addEventListener("change", (e) => {
    if (e.target.checked) {
      pedido["guarnicoes"] = dados["guarnicoes"][e.target.value];
      console.log(pedido);
    }
  });
});

mistura.forEach((_, i) => {
  mistura[i].addEventListener("change", (e) => {
    if (e.target.checked) {
      if (pedido.tamanhos.tipo === "Pratinho P") {
        swal("Somente irá ser adicionado a ultima selecao marcada");
        pedido["misturas"] = [dados["misturas"][e.target.value]];
      }
      if (pedido.tamanhos.tipo === "Pratinho M") {
        swal(
          "pode adicionar até duas misturas e somente irá ser adicionado as duas ultima selecoes marcada"
        );
        //pedido["misturas"] = dados["misturas"][e.target.value];
        mistura.forEach((_, j) => {
          mistura[j].addEventListener("change", (l) => {
            if (l !== e) {
              pedido["misturas"] = [
                dados["misturas"][e.target.value],
                dados["misturas"][l.target.value],
              ];
            }
          });
        });
      }
      if (pedido.tamanhos.tipo === "Pratinho G") {
        swal("pode adicionar até três misturas");
        pedido["misturas"] = [
          dados["misturas"][mistura.length - 1],
          dados["misturas"][mistura.length - 2],
          dados["misturas"][mistura.length - 3],
        ];
      }
    }
  });
});

opcional.forEach((_, i) => {
  opcional[i].addEventListener("change", (e) => {
    if (e.target.checked) {
      pedido["opcionais"] = dados["opcionais"][e.target.value];
      console.log(pedido);
    }
  });
});

bebida.forEach((_, i) => {
  bebida[i].addEventListener("change", (e) => {
    if (e.target.checked) {
      pedido["bebidas"] = dados["bebidas"][e.target.value];
      console.log(pedido);
    }
  });
});

btnPedidos.onclick = () => {
  if (pedido.tamanhos) {
    ta = `Tamanho Selecionado: ${pedido.tamanhos.tipo}`;
    let mist = [];
    pedido.misturas.forEach((m) => {
      mist.push(m.tipo);
      console.log(mist);
      return mist;
    });
    if (pedido.guarnicoes) {
      gu = `Guarnição Selecionado: ${pedido.guarnicoes.tipo}`;
    } else {
      alert("Selecione uma Guarnicao");
    }
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
    ${ta}
    ${gu}
    Mistura Selecionada: ${mist}
    ${op}
    ${beb}
    Valor Total: R$${pedido.tamanhos.preco},00`;
    return swal(escreva).then(() => {
      location.href = "./cadastro.html";
    });
  } else {
    swal("Precisa seleciona o tamanho do prato").then(() => {
      location.href = "./pedido.html";
    });
  }
};
