document.getElementById("btn1").addEventListener("click", () => {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Título Alterado!";
    titulo.style.color = "red";
  });
  
  document.getElementById("btn2").addEventListener("click", () => {
    const img = document.getElementById("imagem");
    img.src = "./assets/gatofeliz.jpg";
    img.style.width = "300px";
  });
  
  document.getElementById("btn3").addEventListener("click", () => {
    const texto1 = document.getElementById("texto1");
    texto1.textContent = "Texto 1 alterado!";
    texto1.style.color = "white";
    texto1.style.backgroundColor = "darkblue";
  });
  
  const texto2 = document.getElementById("texto2");
  const botoesTexto2 = document.querySelectorAll(".texto2-btn");
  
  botoesTexto2.forEach(btn => {
    btn.addEventListener("click", () => {
      texto2.textContent = btn.textContent;
    });
  });