let lista = document.getElementById("lista");
let itemInput = document.getElementById("itemInput");
let addButton = document.getElementById("addButton");
let rmButton = document.getElementById("rmButton");

// Función para añadir un item
function addItem() {
  if (itemInput.value !== "") {
    let item = document.createElement("li");
    item.textContent = itemInput.value;
    lista.appendChild(item);
    itemInput.value = ""; // Limpiar el campo de entrada
  }
}

// Añadir item al hacer clic en el botón "Añadir"
addButton.addEventListener("click", addItem);

// Añadir item al presionar "Enter"
itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

// Eliminar el último item de la lista al hacer clic en el botón "Eliminar"
rmButton.addEventListener("click", () => {
  if (lista.children.length > 0) {
    lista.removeChild(lista.lastChild);
  }
});
