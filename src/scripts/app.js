"use strict"; 

/* Methode à suivre :
-> clique sur le bouton -> addEventListener
on cache le chapitre 0
on affiche le chapitre 1

Pour ca faut savoir dans quel chapitre on est 
on commence au chapitre 0 et à chaque fois on fait un plus donc compteur

*/

let Chapters = [];
for(let i = 0; i <= 6; i++){
    let ChapterSelect = document.querySelector(`#chap${i}`);
    Chapters.push(ChapterSelect);
}

let NextButtons = document.querySelectorAll(".next");
let currentChapter = 1;

for(let NextButton of NextButtons){
    NextButton.addEventListener("click", (e) => {
        Chapters[currentChapter-1].classList.add("hide");
        Chapters[currentChapter].classList.remove("hide");
        currentChapter += 1;
    });
}


/* Methode à suivre :
-> click sur un aliment -> addEventListener
-> 
-> en fct de l'aliment sur lequel on clique phrases différentes -> if / else if
-> innerHTML sur l'id du texte */

let Foods= document.querySelectorAll(".food");
let kedis = 0; // 10 sur 10
let choices = [];
for (let Food of Foods) {
    Food.addEventListener("click",(e)=> {
        // Food.getAttribute("data-food") == "confiture"
        if(Food.classList.contains("food-disabled")){
            return;
        }

        if (Food.classList.contains("food1")){
            content.innerHTML = "Un morceau de fromage, c'est exactement ce que je voulais manger.";
            choices.push("un morceau de fromage");
            Food.classList.add("food-disabled");
        }
        else if (Food.classList.contains("food2")){
            content.innerHTML = "Le miel, il ne faut pas y toucher, c’est pour le repas de ce soir";
        } 
        else if (Food.classList.contains("food3")){
            content.innerHTML = "Une tranche de pain, c'est exactement ce que je voulais manger.";
           // good__choise.innerHTML += " une tranche de pain";
           choices.push("une tranche de pain");
           Food.classList.add("food-disabled");
        } 
        else if (Food.classList.contains("food4")){
            content.innerHTML = "Une grappe de raisin c'est exactement ce que je voulais manger.";
            /*
            if(kedis>0){
                good__choise.innerHTML += " et";
            }
            good__choise.innerHTML += " une grappe de raisin";
            */
            choices.push("une grappe de raisin");
            Food.classList.add("food-disabled");
        } 
        else if (Food.classList.contains("food5")){
            content.innerHTML = "Un oeuf, il ne faut pas y toucher, c’est pour le repas de ce soir";
            
        }

        if(choices.length == 1){
            good__choise.innerHTML = "Ce matin, je vais manger "+choices[0];
        }else if(choices.length == 2){
            good__choise.innerHTML = "Ce matin, je vais manger "+choices[0]+" et "+choices[1];
        }else if(choices.length == 3){

            good__choise.innerHTML = "Ce matin, je vais manger "+choices[0]+", "+choices[1]+" et "+choices[2];
            let button = document.querySelector(".but5");
            button.classList.remove("hide");

        }   
    })
}

