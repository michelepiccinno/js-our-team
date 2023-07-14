'use strict'
const arrayObjects = [
  {
    firstName: "Wayne",
    lastName: "Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg"
  },
  {
    firstName: "Angela",
    lastName: "Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg"
  },
  {
    firstName: "Walter",
    lastName: "Gordon",
    role: "Office Manage",
    img: "walter-gordon-office-manager.jpg"
  },
  {
    firstName: "Angela",
    lastName: "Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg"
  },
  {
    firstName: "Scott",
    lastName: "Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg"
  },
  {
    firstName: "Barbara",
    lastName: "Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg"
  },
];

//CICLO L'ARRAY DI OGGETTI
for (let i = 0; i < arrayObjects.length; i++) {
  console.log(arrayObjects[i].firstName);

  //RICHIAMO IL CONTAINER PADRE 
  const carContainer = document.querySelector(".card-container");

  //-CREO IL DIV, GLI ASSEGNO LA CLASSE "card" E LO APPENDO AL CONTAINER PADRE
  const card = document.createElement("div");
  card.classList.add("card");
  carContainer.appendChild(card);

  //RICHIAMO L'ELEMENTO APPENA CREATO CON CLASSE "card"
  const myCard = document.querySelector(".card");

  //CREO UN H4, ASSEGNO CLASSE "first-name"  E LO APPENDO AL CONTAINER PADRE
  const firstName = document.createElement("h4");
  firstName.classList.add("first-name");
  card.appendChild(firstName);
  document.querySelector(".first-name").innerHTML = arrayObjects[i].firstName;

  //CREO UN H4, ASSEGNO CLASSE "last-name"  E LO APPENDO AL CONTAINER PADRE
  const lastName = document.createElement("h4");
  lastName.classList.add("last-name");
  card.appendChild(lastName);

  //CREO UN IMG, ASSEGNO CLASSE image E LO APPENDO AL CONTAINER PADRE
  const image = document.createElement("h4");
  image.classList.add("image");
  card.appendChild(image);

}


//document.querySelector(".first-name").innerHTML = "prova";