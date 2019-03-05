var plaatjes = [1,2,3];
var teller = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('img/puppy1.jpg')";

slideholder.addEventListener("click", function(){
    slideholder.style.backgroundImage = "url('img/puppy"+ getPuppy() +".jpg')";
});

function getPuppy() {
    if(teller>= plaatjes.length){
        teller = 1;
    } else{
        teller++;
    }
    console.log(teller);
    return teller;
}

var plaatjes2 = [1,2,3];
var teller2 = 0;
var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url('img/buppy1.jpg')";

slideholder2.addEventListener("click", function(){
    slideholder2.style.backgroundImage = "url('img/buppy"+ getBuppy() +".jpg')";
});

function getBuppy() {
    if(teller2>= plaatjes2.length){
        teller2 = 1;
    } else{
        teller2++;
    }
    console.log(teller2);
    return teller2;
}

var plaatjes3 = [1,2,3];
var teller3 = 0;
var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('img/kuppy1.jpg')";

slideholder3.addEventListener("click", function(){
    slideholder3.style.backgroundImage = "url('img/kuppy"+ getKuppy() +".jpg')";
});

function getKuppy() {
    if(teller3>= plaatjes3.length){
        teller3 = 1;
    } else{
        teller3++;
    }
    console.log(teller3);
    return teller3;
}



