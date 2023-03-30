function handleMouseLeave() { //adiciona uma classe CSS quando um mouse entra nesse elemento. 
  this.classList.remove('s-card--hovered');
  document.body.id = ''; // define o id do elemento body como o id do elemento atual. 
}


function addEventListenersToCards() { //adiciona os event listener a cada elemento HTML que tem a classe 's-card'.
  //seleciona todos os elementos HTML que tem a classe 's-card' e os armazena na variavel 'cardElements'.
  const cardElements = document.getElementsByClassName('s-card');
  
  //itera atraves de odos os elementos armazenados na variavel 'cardElements'
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index]; //armazenamento
    card.addEventListener('mouseenter', handleMouseEnter); //adiciona um event listener ao elemento 'card'
    card.addEventListener('mouseleave', handleMouseLeave); //mesma coisa só que com o mouseleave
  }
}


//detecta quando o DOM esta totalmente carregado e proto para ser manipulado.
//adiciona um event listener ao objeto 'document'.
//"DOMContentLoaded" - adicona quando todo o HTML é carregado e analisado.
//addEventListenersToCards é a função que será chamada quando o evento DOMContentLoaded for acionado.
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);


//Cartoes carrossel de um site.
function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}