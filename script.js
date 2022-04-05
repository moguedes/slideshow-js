"use strict";

const images = [
  { id: "1", url: "./img/Lisboa.webp" },
  { id: "2", url: "./img/Porto2.jpg" },
  { id: "3", url: "./img/Braga.jpg" },
  { id: "4", url: "./img/Guimarães.jpg" },
  { id: "5", url: "./img/Coimbra.jpg" },
  { id: "6", url: "./img/Leiria.jpg" },
  { id: "7", url: "./img/Funchal.jpg" },
  { id: "8", url: "./img/Viseu.jpg" },
  { id: "9", url: "./img/Viana do Castelo.jpg" },
  { id: "10", url: "./img/Aveiro.jpg" },
  { id: "11", url: "./img/Penafiel.jpg" },
  { id: "12", url: "./img/Faro.jpg" },
  { id: "13", url: "./img/Ponta Delgada.jpg" },
  { id: "14", url: "./img/Santarém.jpg" },
  { id: "15", url: "./img/Évora.jpg" },
  { id: "16", url: "./img/Castelo Branco.jpg" },
  { id: "17", url: "./img/Caldas da Rainha.jpg" },
  { id: "18", url: "./img/Vila Real.jpg" },
  { id: "19", url: "./img/Guarda.jpg" },
  { id: "20", url: "./img/Chaves.jpg" },
  { id: "21", url: "./img/Tomar.webp" },
  { id: "22", url: "./img/Bragança.jpg" },
  { id: "23", url: "./img/Beja.jpg" },
  { id: "24", url: "./img/Sines.webp" },
  { id: "25", url: "./img/Sintra.jpg" },
  { id: "26", url: "./img/Óbidos.jpg" },
];

const containerItems = document.querySelector("#container-items");

const loadImages = (images, container) => {
  images.forEach( image => {
    container.innerHTML += `
     <div class='item'> 
     <img src='${image.url}'
     </div>
     `;
  });
};

loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const previous = () => {
    containerItems.appendChild(items[0]);  
    items = document.querySelectorAll(".item");
};

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll(".item");
}

document.querySelector("#previous").addEventListener("click", previous);

document.querySelector("#next").addEventListener("click", next);