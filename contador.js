
 const deslogar = () => {
    window.location.href = './index.html'
  }
  
  let FooterSegundos = document.getElementById("#tempo");
  
  let tempo = () => {
    if(FooterSegundos !== 0){
      setTimeout(tempo, 120)
      FooterSegundos.textContent = footerSegundos;
      tempo--;
    }else{
      if(confirm('Continuar logado?') === true){
        window.location.reload();
      }else{
        deslogar();
      }
    }
  }

  