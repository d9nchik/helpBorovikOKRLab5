(function () {
    const correspondentAreasAndURLs = [
        {area: '.pizza-area1', url: 'http://localhost:3000/pizzaJson1'},
        {area: '.pizza-area2', url: 'http://localhost:3000/pizzaJson2'},
        {area: '.pizza-area3', url: 'http://localhost:3000/pizzaJson3'},
    ];
    for (const correspondentAreasAndURL of correspondentAreasAndURLs) {
        getPizzaJson(correspondentAreasAndURL);
    }
})();

async function getPizzaJson({area, url}) {
    const res = await fetch(url)
    const pizzaJson1 = await res.json()
    pizzaJson1.map((pizza, index) => {
        let pizzaItem = pizzaBlockGenerator(index, pizza, pizzaJson1);
        document.querySelector(area).append(pizzaItem);
    })
}

function pizzaBlockGenerator(index, pizza, pizzaJson) {
    let pizzaItem = document.querySelector(".models .pizza-item").cloneNode(true)
    pizzaItem.setAttribute("data-key", index)
    pizzaItem.querySelector(".pizza-item--img img").src = pizza.img //Consegue-se usar a class e a tag num mesmo querySelector
    pizzaItem.querySelector(
        ".pizza-item--price"
    ).innerHTML = pizza.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "EUR",
    })
    pizzaItem.querySelector(".pizza-item--name").innerHTML = pizza.name
    pizzaItem.querySelector(".pizza-item--desc").innerHTML =
        pizza.description
    pizzaItem.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault()
        let key = e.target.closest(".pizza-item").getAttribute("data-key")
        const pizzaKey = pizzaJson[key]
        modalCount = 1
        modalKey = key

        document.querySelector(".pizzaBig img").src = pizzaKey.img
        document.querySelector(".pizzaInfo h1").innerHTML = pizzaKey.name
        document.querySelector(".pizzaInfo--desc").innerHTML = pizzaKey.description
        document.querySelector(".pizzaInfo--actualPrice").innerHTML = pizzaKey.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "EUR",
        })
        document.querySelector(".pizzaInfo--size.selected").classList.remove("selected")
        document.querySelector(".pizzaInfo--qt").innerHTML = modalCount
        document.querySelectorAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
            if (sizeIndex === 2) size.classList.add("selected")

            size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex]
        })

        document.querySelector(".pizzaWindowArea").style.opacity = 0
        document.querySelector(".pizzaWindowArea").style.display = "flex"
        setTimeout(() => {
            document.querySelector(".pizzaWindowArea").style.opacity = 1
        }, 200)
    })
    return pizzaItem;
}