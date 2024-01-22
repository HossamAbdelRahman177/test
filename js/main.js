var nameInput = document.getElementById("prodcutName")
var priceInput = document.getElementById("prodcutPrice")
var categoryInput = document.getElementById("prodcutCategory")
var saleInput = document.getElementById("prodcutSale")
var descriptionInput = document.getElementById("prodcutDescription")
var searchInput = document.getElementById("searchInput")
var ProdcutList = []
if (localStorage.getItem('prodcuts') != null) {
    ProdcutList = JSON.parse(localStorage.getItem('prodcuts'))
    displayData(ProdcutList)
}
function addProdcut() {
    var prodcut = {
        name: nameInput.value,
        price: priceInput.value,
        category: categoryInput.value,
        description: descriptionInput.value,
        sale: saleInput.checked
    }
    ProdcutList.push(prodcut)
    localStorage.setItem('prodcuts', JSON.stringify(ProdcutList))
    displayData(ProdcutList)
    clearForm()
}
function displayData(arr) {
    var temp = ""
    for (var i = 0; i < arr.length; i++) {
        temp += ` <tr>
                <td>`+ i + `</td>
                <td>`+ arr[i].name + `</td>
                <td>`+ arr[i].price + `</td>
                <td>`+ arr[i].category + `</td>
                <td>`+ arr[i].sale + `</td>
                <td>`+ arr[i].description + `</td>
                <td><button class="btn btn-warning">Update</button></td>
                <td><button onclick="deleteProdcut(`+ i + `)"class="btn btn-danger">Delete</button></td>
              </tr>`
    }
    document.getElementById('myData').innerHTML = temp
}
function deleteProdcut(index){
    ProdcutList.splice(index,1)
    displayData(ProdcutList)
    localStorage.setItem('prodcuts', JSON.stringify(ProdcutList))

}
function clearForm() {
        nameInput.value = '',
        priceInput.value = '',
        categoryInput.value = 'tv',
        descriptionInput.value = '',
        saleInput.cheked = false
}
function searchProdcut(){
var searchVal = searchInput.value
var result = ''
for (var i = 0; i < ProdcutList.length; i++) {
    if (ProdcutList[i].name.toLowerCase().includes(searchVal)==true){
        result+=` <tr>
        <td>`+ i + `</td>
        <td>`+ ProdcutList[i].name + `</td>
        <td>`+ ProdcutList[i].price + `</td>
        <td>`+ ProdcutList[i].category + `</td>
        <td>`+ ProdcutList[i].sale + `</td>
        <td>`+ ProdcutList[i].description + `</td>
        <td><button class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteProdcut(`+ i + `)"class="btn btn-danger">Delete</button></td>
      </tr>`
    }
}
document.getElementById('myData').innerHTML = result
}



 