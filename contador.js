
  var innerTextOutput = document.getElementById("tempo");

  const deslogar = () => {
      window.location.href = './index.html'
    }

  const atualizacao = () => {
    let valorAtual = innerTextOutput.innerText;
    
    innerTextOutput.innerText = --valorAtual;

    
  }
  
  const inicializarContador = () => {
    
    setInterval(atualizacao, 1000)
  }

  let tempoContador = () => {
    if(innerTextOutput !== 0){
      setTimeout(innerTextOutput, 600)
    }if(confirm('Continuar logado?') === true){
      window.location.reload();
    }else{
      deslogar();
    }
  }

  
  inicializarContador();



  