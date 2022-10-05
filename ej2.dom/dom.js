console.log(window);
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.links);
console.log(document.links[1]);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
console.log(document.title);
console.log(document.characterSet);
console.log(document.documentElement.lang);
console.log(document.documentElement["lang"]);

// Selectores

// for(let i=0; i < items.length; i++){
//     console.log(items[i]);
// }

console.log(document.getElementsByName("nombre"));

console.log(document.getElementById("parrafo1"));
const $p1 = document.querySelector("#parrafo1");

console.log(document.getElementsByClassName("rojo"));
console.log(document.querySelectorAll(".rojo")[0]);

const items = document.getElementsByTagName("li");
console.log(items);
console.log(document.querySelectorAll("div li"));

let texto = `<p class="pepe">esto es un texto
 <b>Esto se ve en negrita</b> para rellenar
 el parrafo</p>`;

$p1.outerHTML = texto;

// atributos

const $linkGoogle = document.querySelector("a");

console.log($linkGoogle.href);
console.log($linkGoogle.getAttribute("href"));
console.log($linkGoogle.hasAttribute("target"));

$linkGoogle.setAttribute("target", "_blank");

console.log($linkGoogle.hasAttribute("target"));

$linkGoogle.removeAttribute("target");

console.log($linkGoogle.hasAttribute("target"));

const $lista = document.querySelectorAll("ul")[1];


console.log($lista.getAttribute("data-description"));
console.log($lista.dataset.description);


// estilos

const $li = document.querySelector("ul").firstElementChild;

console.log($li);

console.log($li.style);
console.log($li.getAttribute("style"));
//$li.style.backgroundColor = "blue";
$li.style.setProperty("background-color","cyan");

//dom traversing

const $cards = document.getElementById("cards");

//console.log($cards);
//console.log($cards.childNodes);
//console.log($cards.children);


console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.lastElementChild);
console.log($cards.children[1]);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("article"));
console.log($cards.querySelectorAll("figcaption"));

let hijo = $cards.firstElementChild;

//console.log(hijo);


do{

    hijo = hijo.nextElementSibling;
    console.log(hijo);

}while(hijo.nextElementSibling);






//crear elementos

const $newCard = document.createElement("figure");

const $img = document.createElement("img");
$img.setAttribute("src", "http://placeimg.com/200/200/any");
$img.setAttribute("alt", "foto random");

const $figcaption = document.createElement("figcaption");
const texto1 = document.createTextNode("Any");
$figcaption.appendChild(texto1);



$newCard.appendChild($img);
$newCard.appendChild($figcaption);
$cards.appendChild($newCard);

$newCard.classList.add("card", "rotar-45");
//$newCard.classList.add("rotar-45");
//$newCard.setAttribute("class", "card rotar-45");
//$newCard.classList.remove("rotar-45");
$newCard.classList.replace("rotar-45", "rotar-135");


console.log($newCard.classList.contains("rotar-45"));
$newCard.classList.toggle("rotar-45");
console.log($newCard.className);

//------------------------

const frutas = ["Banana", "Manzana", "Pera", "Melon", "Sandia"];
const $listaFrutas = document.createElement("ul");

$listaFrutas.innerHTML = "";

frutas.forEach((fruta)=>{
    $listaFrutas.innerHTML += `<li>${fruta}</li>`;
});

document.body.appendChild($listaFrutas);


//console.log($cards.hasChildNodes());

const nombres = ['first_name', 'Jamison', 'Timothy', 'Marlon', 'Phil', 'Natasha', 'Emmanuel', 'Earvin', 'Cari', 'Francisco', 'Lynna', 'Elisha', 'Amber', 'Lexis', 'Jeannie', 'Tabitha', 'Sollie', 'Anallise', 'Janela', 'Merline', 'Hannah', 'Celle', 'Dorthea', 'Dulce', 'Ezekiel', 'Amerigo', 'Raye', 'Karon', 'Scotti', 'Fannie', 'Ebenezer']

const $ol = document.querySelector("ol");
const fragmento = document.createDocumentFragment();

nombres.forEach((elemento) =>{
    const $li = document.createElement("li");
    $li.textContent = elemento;
    fragmento.appendChild($li);    
})

$ol.appendChild(fragmento);


//----------------------------------------------











