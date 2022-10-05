function crearTarjeta(src, title){

    const newCard = document.createElement("figure");
    
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", "foto " + title);
    
    //const figcaption = document.createElement("figcaption");
    //const texto = document.createTextNode(title);
    //figcaption.appendChild(texto);        
    
    newCard.appendChild(img);
    //newCard.appendChild(figcaption);
    newCard.insertAdjacentHTML("beforeend", "<figcaption></figcaption>");
    newCard.lastElementChild.insertAdjacentText("afterbegin", title);
    newCard.classList.add("card");
    //cards.appendChild(newCard);

    return newCard;    
}

const $nuevaTarjeta = crearTarjeta("https://placeimg.com/200/200/any", "Any");

const $cards = document.querySelector("#cards");

//$cards.replaceChild($nuevaTarjeta, $cards.firstElementChild);
//$cards.insertBefore($nuevaTarjeta, $cards.firstElementChild);
//$cards.removeChild($nuevaTarjeta, $cards.firstElementChild);

//$cards.insertAdjacentElement("beforebegin", $nuevaTarjeta);
//$cards.insertAdjacentElement("beforeend", $nuevaTarjeta);
//$cards.insertAdjacentElement("afterbegin", $nuevaTarjeta);
//$cards.insertAdjacentElement("afterend", $nuevaTarjeta);

//$cards.insertAdjacentHTML($nuevaTarjeta, $cards.firstElementChild);
//$cards.prepend($nuevaTarjeta);
//$cards.before($nuevaTarjeta);
//$cards.after($nuevaTarjeta);
$cards.append($nuevaTarjeta);

$nuevaTarjeta.querySelector("figcaption").prepend("Algo");







