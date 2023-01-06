const btnSim = document.getElementById('btnSim')
const btnNao = document.getElementById('btnNao')
const myRes = document.getElementById('myRes')



const butaoL = window.innerWidth
const butaoA = window.innerHeight


btnSim.addEventListener("click", () => {
    btnSim.classList.toggle('sim')
    btnNao.style.display ="none"

    myRes.style.opacity = 1
    myRes.innerText = "Tô ligado"
    myRes.style.backgroundColor = "rgb(136, 184, 136)"
setTimeout(() => {
  alert("Também te amo amor, feliz dia 14")
}, 500);
   

    
})



console.log(butaoL,butaoA)

btnNao.addEventListener("mouseover", () => {
    btnNao.classList.add('nao')
    btnSim.classList.remove('sim')
    myRes.style.opacity = 1



    myRes.innerText = "Certeza? é pecado mentir"
    myRes.style.backgroundColor = "rgb(221, 81, 81)"

    
})





function moveButton() {
  // Gerar números aleatórios para a posição x e y do button
  const x = Math.random() * window.innerWidth 
  const y = Math.random() * window.innerHeight 

 const larguraMin = x / 3
 const alturaMin = y / 3

  // Atualizar as propriedades de posição do button
  
  btnNao.style.position = 'absolute';
  btnNao.style.left = `${larguraMin}px`;
  btnNao.style.top = `${alturaMin}px`;

}

// Chamar a função moveButton() quando o botão for clicado
btnNao.addEventListener('mouseover', moveButton);




