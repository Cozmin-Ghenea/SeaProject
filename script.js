const trashcontainer = document.querySelector('.trash-content')
const money = document.querySelector(".money");
const currencyFormatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
})

setupTrash()

async function setupTrash() {
    const amountRaised = await fetch("https://tsache.com/donation_total.json").then(res => res.json()).then(data => data.count)
    moneyElem.innerText = currencyFormatter.format(amountRaised);
}