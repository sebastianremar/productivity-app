const input = document.getElementById('new-item');
const addButton = document.getElementById('add-btn');
const list = document.getElementById('list');

addButton.addEventListener('click', addItem);

function addItem() {
  const text = input.value.trim();

  if (text !== '') {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
    input.value = '';
  }
}

input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addButton.click();
  }
});


const removeItem = (list, itemToRemove) => {
    list.removeChild(itemToRemove);
}
