pics = document.getElementById("pics");
createPicsHolders();
createPuppyImages();

function createPicsHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createPuppyImages(){
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolders.length; i++){
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        puppyPlaatje = document.createElement("img");
        puppyPlaatje.src = "img/puppy" + (i+1) + ".jpg";
        puppyPlaatje.id = (i+1);
        puppyPlaatje.addEventListener("click", function(){
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(puppyPlaatje);
    }
}

function maakFavoriet(id){
   console.log("Maak mij favoriet! het gaat om puppy... " + id);
   notsofavoriet = document.getElementsByClassName("favoriet");

   for(var i = 0; i < notsofavoriet.length; i++) {
       notsofavoriet[i].style.backgroundImage = "none";
   }

   favoriet = document.getElementById("favoriet_" + id);
   favoriet.style.backgroundImage = "url('img/like.png')";
}
//picsHolders maken
//picsHolder bevat een plaatje van een puppy en een favorite symbool

//apenPlaatjes toevoegen aan picsHolders
//favoriteSymbols toevoegen aan picsHolders