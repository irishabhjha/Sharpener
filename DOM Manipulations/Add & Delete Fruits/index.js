// Add the Edit Button:
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const fruitToAddInput = document.getElementById("fruit-to-add");
    const fruitsList = document.querySelector(".fruits");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const fruitName = fruitToAddInput.value;
      if (fruitName) {
        addFruitToList(fruitName);
        fruitToAddInput.value = "";
      }
    });
  
    fruitsList.addEventListener("click", function (event) {
      if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
      }
    });
  
    function addFruitToList(fruitName) {
      const li = document.createElement("li");
      li.classList.add("fruit");
      li.innerHTML = `
        ${fruitName}
        <button class="delete-btn">x</button>
        <button class="edit-btn">Edit</button>
      `;
      fruitsList.appendChild(li);
    }
  
  // Implement the code as in video but with one extra 'Edit' button in 'li'
  
    const existingFruitItems = document.querySelectorAll(".fruit");
    existingFruitItems.forEach(function (fruitItem) {
      const editButton = document.createElement("button");
      editButton.classList.add("edit-btn");
      editButton.textContent = "Edit";
      fruitItem.appendChild(editButton);
    });
  });