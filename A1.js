var x = document.getElementById("result");
var y = document.getElementById("myForm");
var z = document.getElementById("item");
myForm.addEventListener("submit",
    function (event) {
        event.preventDefault()
        createItem(x.value);
    })
function createItem(inputItems) {
    var items = `<li>${inputItems}
    <button onclick ="deleteElement(this)">Delete</button></li>`
    z.insertAdjacentHTML("beforeend", items)
    x.value = ""
    x.focus()
}
function deleteElement(ETD) {
    ETD.parentElement.remove()
}