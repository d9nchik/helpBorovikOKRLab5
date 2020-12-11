async function validateForm(e) {
    e.preventDefault();
    let name = document.orderForm.name.value
    let address = document.orderForm.address.value
    let city = document.orderForm.city.value
    let state = document.orderForm.state.value
    let phone = document.orderForm.phone.value
    if (nonEmpty(name)) {
        alert("Name field can't be blank.")
        return false
    } else if (nonEmpty(address)) {
        alert("Address field can't be blank.")
        return false
    } else if (nonEmpty(city)) {
        alert("City field can't be blank.")
        return false
    } else if (nonEmpty(state)) {
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

function nonEmpty(item) {
    return item === null || item === '';
}

document.querySelector('form').addEventListener('submit', validateForm);
document.querySelector('div#order button').addEventListener('click', closeOrder);