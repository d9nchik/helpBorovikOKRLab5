//Variaveis globais
let modalCount = 1
let modalKey = 0
//парс елеентів із json
let cart = JSON.parse(localStorage.getItem("session"))
    ? JSON.parse(localStorage.getItem("session"))
    : []
console.log(cart)
const qs = (e) => document.querySelector(e)
const qsa = (e) => document.querySelectorAll(e)

async function getPizzaJson1() {
    let res = await fetch("http://localhost:3000/pizzaJson1")
    const pizzaJson1 = await res.json()
    pizzaJson1.map((pizza, index) => {
        let pizzaItem = qs(".models .pizza-item").cloneNode(true)
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
            // відміна перезагрузки(обичної поведінки)
            e.preventDefault()
            let key = e.target.closest(".pizza-item").getAttribute("data-key")
            const pizzaKey = pizzaJson1[key]
            modalCount = 1
            modalKey = key

            qs(".pizzaBig img").src = pizzaKey.img
            qs(".pizzaInfo h1").innerHTML = pizzaKey.name
            qs(".pizzaInfo--desc").innerHTML = pizzaKey.description
            qs(
                ".pizzaInfo--actualPrice"
            ).innerHTML = pizzaKey.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "EUR",
            })
            qs(".pizzaInfo--size.selected").classList.remove("selected")
            qs(".pizzaInfo--qt").innerHTML = modalCount
            qsa(".pizzaInfo--size").forEach((size, sizeIndex) => {
                if (sizeIndex === 2) size.classList.add("selected")

                size.querySelector("span").innerHTML = pizzaJson1[key].sizes[sizeIndex]
            })

            qs(".pizzaWindowArea").style.opacity = 0
            qs(".pizzaWindowArea").style.display = "flex"
            setTimeout(() => {
                qs(".pizzaWindowArea").style.opacity = 1
            }, 200)
        })

        qs(".pizza-area1").append(pizzaItem)
    })
}

getPizzaJson1()

async function getPizzaJson2() {
    let res = await fetch("http://localhost:3000/pizzaJson2")
    const pizzaJson2 = await res.json()
    pizzaJson2.map((pizza, index) => {
        let pizzaItem = qs(".models .pizza-item").cloneNode(true)
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
            const pizzaKey = pizzaJson2[key]
            modalCount = 1
            modalKey = key

            qs(".pizzaBig img").src = pizzaKey.img
            qs(".pizzaInfo h1").innerHTML = pizzaKey.name
            qs(".pizzaInfo--desc").innerHTML = pizzaKey.description
            qs(
                ".pizzaInfo--actualPrice"
            ).innerHTML = pizzaKey.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "EUR",
            })
            qs(".pizzaInfo--size.selected").classList.remove("selected")
            qs(".pizzaInfo--qt").innerHTML = modalCount
            qsa(".pizzaInfo--size").forEach((size, sizeIndex) => {
                if (sizeIndex === 2) size.classList.add("selected")

                size.querySelector("span").innerHTML = pizzaJson2[key].sizes[sizeIndex]
            })

            qs(".pizzaWindowArea").style.opacity = 0
            qs(".pizzaWindowArea").style.display = "flex"
            setTimeout(() => {
                qs(".pizzaWindowArea").style.opacity = 1
            }, 200)
        })

        qs(".pizza-area2").append(pizzaItem)
    })
}

getPizzaJson2()

async function getPizzaJson3() {
    let res = await fetch("http://localhost:3000/pizzaJson3")
    const pizzaJson3 = await res.json()
    pizzaJson3.map((pizza, index) => {
        let pizzaItem = qs(".models .pizza-item").cloneNode(true)
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
            const pizzaKey = pizzaJson3[key]
            modalCount = 1
            modalKey = key

            qs(".pizzaBig img").src = pizzaKey.img
            qs(".pizzaInfo h1").innerHTML = pizzaKey.name
            qs(".pizzaInfo--desc").innerHTML = pizzaKey.description
            qs(
                ".pizzaInfo--actualPrice"
            ).innerHTML = pizzaKey.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "EUR",
            })
            qs(".pizzaInfo--size.selected").classList.remove("selected")
            qs(".pizzaInfo--qt").innerHTML = modalCount
            qsa(".pizzaInfo--size").forEach((size, sizeIndex) => {
                if (sizeIndex === 2) size.classList.add("selected")

                size.querySelector("span").innerHTML = pizzaJson3[key].sizes[sizeIndex]
            })

            qs(".pizzaWindowArea").style.opacity = 0
            qs(".pizzaWindowArea").style.display = "flex"
            setTimeout(() => {
                qs(".pizzaWindowArea").style.opacity = 1
            }, 200)
        })

        qs(".pizza-area3").append(pizzaItem)
    })
}

getPizzaJson3()

const closeModal = () => {
    qs(".pizzaWindowArea").style.opacity = 0
    setTimeout(() => {
        qs(".pizzaWindowArea").style.display = "none"
    }, 500)
}

qsa(".pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton").forEach(
    (item) => {
        item.addEventListener("click", closeModal)
    }
)
// зменшуємо і добавляємо кількість піцц
qs(".pizzaInfo--qtmenos").addEventListener("click", () => {
    if (modalCount > 1) {
        modalCount--
        qs(".pizzaInfo--qt").innerHTML = modalCount
    }
})
qs(".pizzaInfo--qtmais").addEventListener("click", () => {
    modalCount++
    qs(".pizzaInfo--qt").innerHTML = modalCount
})

qsa(".pizzaInfo--size").forEach((size) => {
    size.addEventListener("click", () => {
        qs(".pizzaInfo--size.selected").classList.remove("selected")
        size.classList.add("selected")
    })
})

qs(".pizzaInfo--addButton").addEventListener("click", () => {
    let size = Number(qs(".pizzaInfo--size.selected").getAttribute("data-key"))
    let Ident = pizzaJson1[modalKey].id + "@" + size
    let key = cart.findIndex((item) => item.Ident === Ident)
    if (key > -1) {
        const carKey = cart[key]
        carKey.Quantidade += modalCount
    } else {
        cart.push({
            Id: pizzaJson1[modalKey].id,
            Ident,
            Nome: pizzaJson1[modalKey].name,
            Tamanho: size,
            Quantidade: modalCount,
        })
    }
    localStorage.setItem("session", JSON.stringify(cart))
    console.log(cart)
    updateCart()
    closeModal()
})
// якщо не пуста вона відображається
qs(".menu-openner").addEventListener("click", () => {
    if (cart.length > 0) {
        qs("aside").style.left = "0"
    }
})
qs(".menu-closer").addEventListener(
    "click",
    () => (qs("aside").style.left = "100vw")
)

// корзина
async function updateCart() {
    let res = await fetch("http://localhost:3000/pizzaJson1")
    const pizzaJson1 = await res.json()
    qs(".menu-openner span").innerHTML = cart.length

    if (cart.length > 0) {
        const carrinho = qs(".cart")
        carrinho.innerHTML = ""

        qs("aside").classList.add("show")

        let subtotal = 0
        let desconto
        let total

        for (let i in cart) {
            let pizzaItem = pizzaJson1.find((item) => item.id === cart[i].Id)
            let cartItem = qs(".models .cart--item").cloneNode(true)
            let pizzaSizeName
            subtotal += pizzaItem.price * cart[i].Quantidade
            switch (cart[i].Tamanho) {
                case 0:
                    pizzaSizeName = "P"
                    break

                case 1:
                    pizzaSizeName = "M"
                    break

                case 2:
                    pizzaSizeName = "G"
                    break
            }

            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`

            cartItem.querySelector(".cart--item img").src = pizzaItem.img
            cartItem.querySelector(
                ".cart--item .cart--item-nome"
            ).innerHTML = pizzaName
            cartItem.querySelector(".cart--item--qt").innerHTML =
                cart[i].Quantidade
            cartItem
                .querySelector(".cart--item-qtmenos")
                .addEventListener("click", () => {
                    cart[i].Quantidade > 1
                        ? cart[i].Quantidade--
                        : cart.splice(i, 1)
                    updateCart()
                })
            cartItem
                .querySelector(".cart--item-qtmais")
                .addEventListener("click", () => {
                    cart[i].Quantidade++
                    updateCart()
                })

            carrinho.append(cartItem)
        }

        desconto = subtotal * 0.1
        total = subtotal - desconto

        qs(".subtotal span:last-child").innerHTML = subtotal.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "EUR",
            }
        )
        qs(".desconto span:last-child").innerHTML = desconto.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "EUR",
            }
        )
        qs(".total span:last-child").innerHTML = total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "EUR",
        })
    } else {
        qs("aside").classList.remove("show")
        qs("aside").style.left = "100vw"
    }
}

updateCart()
let can = document.getElementById("can")
can.style.width = window.screen.availWidth + "px"
// верхнє меню
can.style.height = window.screen.availHeight + "px"

function gg() {
    var c = document.getElementById("can"),
        ctx = c.getContext("2d"),
        pi = Math.PI,
        xCenter = c.width / 2,
        yCenter = c.height / 2,
        radius = 10,
        startSize = radius / 3,
        num = 5,
        posX = [],
        posY = [],
        angle,
        i

    window.setInterval(function () {
        num++
        ctx.clearRect(0, 0, xCenter * 2, yCenter * 2)
        for (i = 0; i < 9; i++) {
            ctx.beginPath()
            ctx.fillStyle = "rgba(240, 68, 0," + 0.1 * i + ")"
            if (posX.length === i) {
                angle = pi * i * 0.25
                posX[i] = xCenter + radius * Math.cos(angle)
                posY[i] = yCenter + radius * Math.sin(angle)
            }
            ctx.arc(
                posX[(i + num) % 8],
                posY[(i + num) % 8],
                (startSize / 9) * i,
                0,
                pi * 2,
                1
            )
            ctx.fill()
        }
    }, 100)
}

gg()

//відображення меню
function ready() {
    setTimeout(() => (can.style = "display: none"), 1500)
}

document.addEventListener("DOMContentLoaded", ready)

// оновлення корзини до нуля
function doTask() {
    cart = []
    localStorage.setItem("session", JSON.stringify(cart))
    alert("Pizza be pordered")
    updateCart()
    closeModal()
}
