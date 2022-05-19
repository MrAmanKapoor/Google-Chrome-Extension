function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var number=getRandomInt(5);
document.getElementById("jokes"+number).style.display="block";