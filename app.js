for (let i = 1; i<100; i++){
    document.getElementById("age").innerHTML += "Le capitaine a "+i+" ans";
    if (i <= 18){
        document.getElementById("age").innerHTML += ", le capitaine est en pleine forme ð´ââ ï¸<br>";
    }
    else if (i <= 50){
        document.getElementById("age").innerHTML += ", le capitaine n'est pas trÃ¨s vieux<br>";
    }
    else {
        document.getElementById("age").innerHTML += ", le capitaine est ð´<br>";
    }
}

document.getElementById("age").innerHTML += "le capitaine est ð";
