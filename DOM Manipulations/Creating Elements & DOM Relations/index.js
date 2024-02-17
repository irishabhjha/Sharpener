// Write your code below:
var mainHeading = document.getElementById("main-heading");
var subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online";

subHeading.style.fontStyle = "italic";

mainHeading.insertAdjacentElement("afterend", subHeading);

var totalFruitsParagraph = document.createElement("p");
totalFruitsParagraph.textContent = "Total fruits: 4";

totalFruitsParagraph.id = "fruits-total";

var fruitsList = document.querySelector(".fruits");

fruitsList.insertAdjacentElement("beforebegin", totalFruitsParagraph);
