'use strict'
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
const arrayTeam = [
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

//SELEZIONO IL CONTAINER ALL'INTERNO DEL QUALE CREO TUTTO IL CONTENUTO
const cardContainer = document.querySelector(".card-container");

//INVOCO LA FUNZIONE CHE CREA E INIETTA GLI ELEMENTI
createAndInjectHtmlElements(arrayTeam);


/**Riceve un array di oggetti, la cicla e inietta il contenuto 
 * nell'HTML creando gli elementi nella stringa di injection
 * 
 * @param {array} array 
 */
function createAndInjectHtmlElements(array) {
  for (let i = 0; i < array.length; i++) {
    //STAMPIAMO PRIMA IN CONSOLE LOG
    console.log(`Nome del membro ${i+1}: ${arrayTeam[i].firstName}`);
    console.log(`Cognome del membro ${i+1}: ${arrayTeam[i].lastName}`);
    console.log(`Ruolo del membro ${i+1}: ${arrayTeam[i].role}`);
    console.log(`Img link del membro ${i+1}: ${arrayTeam[i].img}`);

    cardContainer.innerHTML += `<div class="box"><img class="image" src="${arrayTeam[i].img}
                            "><h4 class="first-name">${arrayTeam[i].firstName}</h4><h4 
                            class="last-name">${arrayTeam[i].lastName}</h4><h6 class="role">
                            ${arrayTeam[i].role}</h6></div>`;
  }
}


// /*-------SECONDO METODO (esperimento da completare)-----------*/


// 'use strict'
// const arrayTeam = [
//   {
//     firstName: "Wayne",
//     lastName: "Barnett",
//     role: "Founder & CEO",
//     img: "/img/wayne-barnett-founder-ceo.jpg"
//   },
//   {
//     firstName: "Angela",
//     lastName: "Caroll",
//     role: "Chief Editor",
//     img: "/img/angela-caroll-chief-editor.jpg"
//   },
//   {
//     firstName: "Walter",
//     lastName: "Gordon",
//     role: "Office Manage",
//     img: "/img/walter-gordon-office-manager.jpg"
//   },
//   {
//     firstName: "Angela",
//     lastName: "Lopez",
//     role: "Social Media Manager",
//     img: "/img/angela-lopez-social-media-manager.jpg"
//   },
//   {
//     firstName: "Scott",
//     lastName: "Estrada",
//     role: "Developer",
//     img: "/img/scott-estrada-developer.jpg"
//   },
//   {
//     firstName: "Barbara",
//     lastName: "Ramos",
//     role: "Graphic Designer",
//     img: "/img/barbara-ramos-graphic-designer.jpg"
//   },
// ];


// //RICHIAMO IL CONTAINER PADRE
// const cardContainer = document.querySelector(".card-container");

// //CICLO L'ARRAY DI OGGETTI
// for (let i = 0; i < arrayTeam.length; i++) {
//   // console.log(arrayTeam[i].firstName);
//   // console.log(arrayTeam[i].lastName);
//   // console.log(arrayTeam[i].role);
//   // console.log(arrayTeam[i].img);







//   // //CREO GLI ELEMENTI HTML
//   const card = document.createElement("div");
//   // const firstName = document.createElement("h4");
//   // const lastName = document.createElement("h4");
//   // const role = document.createElement("h6");
//   // const image = document.createElement("img");

//   // //ASSEGNO LE CLASSI
//   card.classList.add("box");
//   // firstName.classList.add("first-name");
//   // lastName.classList.add("last-name");
//   // role.classList.add("role");
//   // image.classList.add("image");

//   // //INIETTO IL CONTENUTO NELL'HTML
//   // firstName.textContent = arrayTeam[i].firstName;
//   // lastName.textContent = arrayTeam[i].lastName;
//   // role.textContent = arrayTeam[i].role;
//   // image.src = arrayTeam[i].img;

//   // //APPENDO LA CARD E I SUOI ELEMENTI INTERNI
//   cardContainer.appendChild(card);
//   // card.appendChild(image);
//   // card.appendChild(firstName);
//   // card.appendChild(lastName);
//   // card.appendChild(role); 


//   createHtmlElements(arrayTeam[i].img, card);
//   createHtmlElements(arrayTeam[i].lastName, card);
//   createHtmlElements(arrayTeam[i].firstName, card);
//   createHtmlElements(arrayTeam[i].role, card);
// }


// //COSTRUTTORE GENERICO DI HTML ELEMENTS
// /**La funzione crea Elementi Html e li inietta nel DOM
//  * In input riceve un singolo elemento di un array (che
//  * viene ciclata quando si invoca la function) e la card contenitore.
//  * La function dovra' essere invocata nel for globale tante volte quanti sono
//  * gli elementi dei suoi oggetti da gestire.
//  * 
//  * @param {*} singleArrayElement 
//  * @param {*} card 
//  */
// function createHtmlElements(singleArrayElement, box) {
//   let myNewElement = document.createElement("h4");
//   myNewElement.classList.add("first-name");
//   myNewElement.innerHTML = singleArrayElement;
//   box.appendChild(myNewElement);
//   console.log(myNewElement);
// }
// /* DA COMPLETARE: 
// 1) nella img il path viene visualizzato come stringa anziche essere inserito
// nel "src" del tag img
// 2) l'istruzione che crea il tipo di tag (h4,h6,img) deve essere generica e 
// il tag type deve essere fornito come argomento della function
// 3) per la classe stesse considerazioni del punto 2
// */