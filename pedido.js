const mostrarEscolha = document.querySelector('.');

mostrarEscolha.onclick = function (){
  const acompanhamento = document.getElementById('acompanhamento').elements;
  const tamanhoPrato = document.getElementById('tamanhoPrato').elements;
  const mistura = document.getElementById('mistura').elements;

  let resultaddo = ``;
  for(let i = 0; i < 3; i++){
    if(acompanhamento[i].checked){
      resultaddo = resultaddo + acompanhamento[i].value + " "
    }
    if(tamanhoPrato[i].checked){
      resultaddo = resultaddo + tamanhoPrato[i].value + " "
    }
    if(mistura[i].checked){
      resultaddo = resultaddo + mistura[i].value + " "
    }
  }
  document.getElementById("escolhas").innerHTML  = resultaddo
  console.log(resultaddo);
}