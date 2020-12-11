//Variables globals
let modalCount = 1
let modalKey = 0
//парс елементів із json
let cart = JSON.parse(localStorage.getItem("session"))
    ? JSON.parse(localStorage.getItem("session"))
    : [];


const closeModal = () => {
    document.querySelector(".pizzaWindowArea").style.opacity = 0
    setTimeout(() => {
        document.querySelector(".pizzaWindowArea").style.display = "none"
    }, 500)
}

document.querySelectorAll(".pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton").forEach(
    (item) => {
        item.addEventListener("click", closeModal)
    }
)
// зменшуємо і добавляємо кількість піцц
document.querySelector(".pizzaInfo--qtmenos").addEventListener("click", () => {
    if (modalCount > 1) {
        modalCount--
        document.querySelector(".pizzaInfo--qt").innerHTML = modalCount
    }
})
document.querySelector(".pizzaInfo--qtmais").addEventListener("click", () => {
    modalCount++
    document.querySelector(".pizzaInfo--qt").innerHTML = modalCount
})

document.querySelectorAll(".pizzaInfo--size").forEach((size) => {
    size.addEventListener("click", () => {
        document.querySelector(".pizzaInfo--size.selected").classList.remove("selected")
        size.classList.add("selected")
    })
})

document.querySelector(".pizzaInfo--addButton").addEventListener("click", () => {
    let size = Number(document.querySelector(".pizzaInfo--size.selected").getAttribute("data-key"))
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
document.querySelector(".menu-openner").addEventListener("click", () => {
    if (cart.length > 0) {
        document.querySelector("aside").style.left = "0"
    }
})
document.querySelector(".menu-closer").addEventListener(
    "click",
    () => (document.querySelector("aside").style.left = "100vw")
)

// корзина
async function updateCart() {
    let res = await fetch("http://localhost:3000/pizzaJson1")
    const pizzaJson1 = await res.json()
    document.querySelector(".menu-openner span").innerHTML = cart.length

    if (cart.length > 0) {
        const carrinho = document.querySelector(".cart")
        carrinho.innerHTML = ""

        document.querySelector("aside").classList.add("show")

        let subtotal = 0
        let desconto
        let total

        for (let i in cart) {
            let pizzaItem = pizzaJson1.find((item) => item.id === cart[i].Id)
            let cartItem = document.querySelector(".models .cart--item").cloneNode(true)
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

        document.querySelector(".subtotal span:last-child").innerHTML = subtotal.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "EUR",
            }
        )
        document.querySelector(".desconto span:last-child").innerHTML = desconto.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "EUR",
            }
        )
        document.querySelector(".total span:last-child").innerHTML = total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "EUR",
        })
    } else {
        document.querySelector("aside").classList.remove("show")
        document.querySelector("aside").style.left = "100vw"
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
