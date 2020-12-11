import './service.js';
import './script.js';
//слайдер
// по документації materialize слайдер
document.addEventListener("DOMContentLoaded", function () {
    var sidenav = document.querySelectorAll(".sidenav")
    M.Sidenav.init(sidenav, {edge: "left", draggable: true});
    var slider = document.querySelectorAll(".slider")
    M.Slider.init(slider, {
        height: 400,
        indicators: false,
        interval: 4000,
    });
    var MBox = document.querySelectorAll(".materialboxed")
    M.Materialbox.init(MBox);
    var parallax = document.querySelectorAll(".parallax")
    M.Parallax.init(parallax);
})
// валідація
// асинхронна функція (незалежно від програми, виконується зразу незалжно)
async function validateForm() {

    let name = document.orderForm.name.value
    let address = document.orderForm.address.value
    let city = document.orderForm.city.value
    let state = document.orderForm.state.value
    let phone = document.orderForm.phone.value
    if (name == null || name === "") {
        alert("Name field can't be blank.")
        return false
    } else if (address === null || address === "") {
        alert("Address field can't be blank.")
        return false
    } else if (city === null || city === "") {
        alert("City field can't be blank.")
        return false
    } else if (state === null || state === "") {
        alert("State field can't be blank.")
        return false
    } else if (
        // регулярний вираз
        phone.match(/^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/g) == null
    ) {
        alert("Please enter valid phone number.")
        return false
    }
    try {
        //генерація айді
        let id = `f${(+new Date()).toString(16)}`
        let pizzas = []
        // забира дані з локал стораджа і масив піц створюється
        JSON.parse(localStorage.getItem("session")).forEach((element) => {
            pizzas.push(element.Nome)
        })
        await fetch(" http://localhost:3000/completedOrders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                pizzas: pizzas.join(","),
                name,
                address,
                city,
                state,
                phone,
            }),
        })
        showOrder()

        let currentUrl = location.href
        let newUrl = currentUrl.split("#")[0]
        location.href = newUrl + "#order"
        document.querySelector(".orderId span:last-child").innerHTML = id.toLocaleString(
            "pt-BR",
            {}
        )

        document.querySelector(".orderPizzasList span:last-child").innerHTML = pizzas
            .join(",")
            .toLocaleString("pt-BR", {})
        document.querySelector(".orderName span:last-child").innerHTML = name.toLocaleString(
            "pt-BR",
            {}
        )
        document.querySelector(".orderAdress span:last-child").innerHTML = address.toLocaleString(
            "pt-BR",
            {}
        )
        document.querySelector(".orderCity span:last-child").innerHTML = city.toLocaleString(
            "pt-BR",
            {}
        )
        document.querySelector(".orderPhone span:last-child").innerHTML = phone.toLocaleString(
            "pt-BR",
            {}
        )
        hideServerError()
    } catch (e) {
        showServerError()
        let currentUrl = location.href
        let newUrl = currentUrl.split("?")[0]
        location.href = newUrl + "?#orderH"
    }
}

function closeOrder() {
    document.querySelector(".orderPage").style.display = "none"
}

function showOrder() {
    document.querySelector(".orderPage").style.display = "block"
}

function showServerError() {
    document.querySelector(".serverError").style.display = "block"
}

function hideServerError() {
    document.querySelector(".serverError").style.display = "none"
}

// додає піци до html
function load() {
    let urlToCheck = window.location.href
    if (urlToCheck.indexOf("?") === -1) {
        window.location.href += "?#"
    }
}

document.getElementsByTagName('body')[0].addEventListener('load', load);

