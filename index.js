var randomNumeber1 = Math.floor(Math.random()*6)+1;
var randomNumeber2 = Math.floor(Math.random()*6)+1;

var numOnDice1="images/"+ "dice"+randomNumeber1+".png";
var numOnDice2="images/"+ "dice"+randomNumeber2+".png";



//document.querySelectorAll("img")[0].setAttribute("src",numOnDice1);
//document.querySelectorAll("img")[1].setAttribute("src",numOnDice2);
document.querySelector(".img1").setAttribute("src",numOnDice1);
document.querySelector(".img2").setAttribute("src",numOnDice2);

if (randomNumeber1>randomNumeber2){
	document.querySelector("h1").innerHTML="player one wins!";
}
else if(randomNumeber1<randomNumeber2){

	document.querySelector("h1").innerHTML="player two wins!";
}
else{
	document.querySelector("h1").innerHTML="tie! try again!";
}