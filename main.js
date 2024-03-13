let productList = [
    {
        id: 0,
        title: "Pepinillo",
        buyed: false
    },
    {
        id: 1,
        title: "Tomates",
        buyed: false
    },
    {
        id: 2,
        title: "Zanahorias",
        buyed: false
    }
]

const divProducts = document.getElementById("products")
const inputProduct = document.getElementById("inputProduct")

function showData() {
    divProducts.innerHTML = ""
    for (const product of productList) {

        let bgcolor = "bg-slate-100"
        let btnBuyed = `<button onclick="setBuyed(${product.id})" class="bg-blue-700 hover:bg-blue-400 text-white p-4 rounded-lg">Comprado</button>`
        if (product.buyed) {
            bgcolor = "bg-green-300"
            btnBuyed = ""
        }

        divProducts.innerHTML += `<div class="flex justify-between items-center p-3 ${bgcolor} mt-2 rounded-md">
                                    <p>${product.id} - ${product.title}</p>
                                    <div>
                                        ${btnBuyed}
                                        <button onclick="deleteProduct(${product.id})" class="bg-red-700 hover:bg-red-400 text-white p-4 rounded-lg">Eliminar</button>
                                    </div>
                                </div>`
    }
}

function addProduct() {
    // obtener el valor del input
    let productName = inputProduct.value
    inputProduct.value = ""

    // añadir un objeto nuevo a productList
    productList.push({
        id: Date.now() + productList.length,
        title: productName,
        buyed: false
    })

    // pintar la vista de nuevo
    showData()
}

function deleteProduct(idToDelete) {
    productList = productList.filter(product => product.id != idToDelete)

    showData()
}

function setBuyed(idProduct) {

    productList.find(p => p.id == idProduct).buyed = true

    showData()
}

showData()