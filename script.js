const btn = document.getElementById("converter-btn")
const select = document.getElementById("converter-para")


function convertvalues() {

    const inputValue = document.getElementById("valor").value
    const dolarToDay = 5.13
    const brl = document.querySelector(".brl")
    const uss = document.querySelector(".uss")
    const euroToDay = 6.06
    const libraToDay = 6.92
    const ieneToDay = 0.03

    brl.innerHTML = new Intl.NumberFormat("pt-BR", {

        style: "currency",
        currency: "BRL"

    }).format(inputValue)


    if (select.value == "doll") {

        uss.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputValue / dolarToDay)

    }

    if (select.value == "eur") {

        uss.innerHTML = new Intl.NumberFormat("pt-PT", {

            style: "currency",
            currency: "EUR"

        }).format(inputValue / euroToDay)
    }

    if (select.value == "lib") {

        uss.innerHTML = new Intl.NumberFormat("en-GB", {
            
            style: "currency",
            currency: "GBP" 
        }).format(inputValue / libraToDay)
    }

    if (select.value == "ien") {

        uss.innerHTML = new Intl.NumberFormat("ja-JP", {

            style: "currency",
            currency: "JPY"

        }).format(inputValue / ieneToDay)
    }

}

select.addEventListener("change", function () {

    const currencyName = document.querySelector(".usd")
    const currencyImg = document.querySelector(".currency-flag")

    if (select.value == "doll") {
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if (select.value == "eur") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value == "lib") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"

    }

    if (select.value == "ien") {
        currencyName.innerHTML = "Iene"
        currencyImg.src = "./assets/ienne.png"
    }

    convertvalues()
})

btn.addEventListener("click", convertvalues)

