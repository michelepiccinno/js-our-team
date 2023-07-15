'use strict'
const arrayObjects = [
  {
    firstName: "Wayne",
    lastName: "Barnett",
    role: "Founder & CEO",
    img: "/img/wayne-barnett-founder-ceo.jpg"
  },
  {
    firstName: "Angela",
    lastName: "Caroll",
    role: "Chief Editor",
    img: "/img/angela-caroll-chief-editor.jpg"
  },
  {
    firstName: "Walter",
    lastName: "Gordon",
    role: "Office Manage",
    img: "/img/walter-gordon-office-manager.jpg"
  },
  {
    firstName: "Angela",
    lastName: "Lopez",
    role: "Social Media Manager",
    img: "/img/angela-lopez-social-media-manager.jpg"
  },
  {
    firstName: "Scott",
    lastName: "Estrada",
    role: "Developer",
    img: "/img/scott-estrada-developer.jpg"
  },
  {
    firstName: "Barbara",
    lastName: "Ramos",
    role: "Graphic Designer",
    img: "/img/barbara-ramos-graphic-designer.jpg"
  },
];

//CICLO L'ARRAY DI OGGETTI
for (let i = 0; i < arrayObjects.length; i++) {
  console.log(arrayObjects[i].firstName);

  //RICHIAMO IL CONTAINER PADRE 
  const carContainer = document.querySelector(".card-container");

  //-CREO IL DIV, GLI ASSEGNO LA CLASSE "card" 
  const card = document.createElement("div");
  card.classList.add("card");

  //RICHIAMO L'ELEMENTO APPENA CREATO CON CLASSE "card"
  const myCard = document.querySelector(".card");

  //CREO UN IMG, ASSEGNO CLASSE image
  const image = document.createElement("img");
  image.classList.add("image");
  image.src = arrayObjects[i].img;

  //CREO UN H4, ASSEGNO CLASSE "first-name"  
  const firstName = document.createElement("h4");
  firstName.classList.add("first-name");
  firstName.textContent = arrayObjects[i].firstName;

  //CREO UN H4, ASSEGNO CLASSE "last-name" 
  const lastName = document.createElement("h4");
  lastName.classList.add("last-name");
  lastName.textContent = arrayObjects[i].lastName;



  //APPENDO LA CARD E I SUOI ELEMENTI INTERNI
  carContainer.appendChild(card);
  card.appendChild(image);
  card.appendChild(firstName);
  card.appendChild(lastName);

}


