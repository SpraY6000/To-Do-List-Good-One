var inputElement = document.getElementById("item-input");
var buttonElement = document.getElementById("submit-btn");

var list = document.getElementById("item-list")

buttonElement.addEventListener("click", function() {
    var inputValue = inputElement.value;
    if (inputValue != ""){
        var newItem = document.createElement("li");

        var newButton = document.createElement("button");
        newButton.className = "delete-button";
        newButton.id = "delete-btn";
        var buttonText = document.createTextNode("Delete Item");
        newButton.appendChild(buttonText)

        newButton.addEventListener("click", function() {
            var listItem = this.parentElement;
            listItem.remove();
        })

        var textNode = document.createTextNode(inputValue);

        newItem.appendChild(textNode);

        newItem.appendChild(newButton)

        list.appendChild(newItem);

        inputElement.value = "";
    }

})