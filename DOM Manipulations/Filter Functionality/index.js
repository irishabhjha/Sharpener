const filter = document.getElementById('filter')

filter.addEventListener('keyup',function(event) {
    const textEntered = event.target.value.toLowerCase()
    const fruitItems = document.getElementsByClassName('fruit')
    for (let i = 0; i < fruitItems.length; i++) {
        const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase()
        const currentFruitDescription = fruitItems[i].getElementsByTagName('p')[0].textContent.toLowerCase()
        if (currentFruitText.indexOf(textEntered) === -1 && currentFruitDescription.indexOf(textEntered) === -1) {
            fruitItems[i].style.display = "none"
        }
        else {
            fruitItems[i].style.display = "flex"
        }
    }
})