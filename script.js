let button = document.getElementById('btn')
let orderForm = document.getElementById('orderForm')
let ordersummary = document.querySelector('.order-summary')

orderForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let consumerName = document.getElementById('consumerName').value
    let flavoursInput = document.getElementById('flavours').value
    let flavours = flavoursInput.split(',').map(flavours => flavours.trim())

    const pricePerScoop = 500
    const totalScoops = flavours.length
    const totalPrice = pricePerScoop * totalScoops

    ordersummary.innerHTML = `
        <h2> Order Summary </h2> <br>
        <p> <strong> Consumer's name: </strong> ${consumerName}
        <p> <strong> Flavours ordered: </strong> ${flavours.join(', ')}
        <p> <strong> Total price: Price per scoop: ₦${totalPrice} (₦500 per scoop for ${totalScoops} scoops)`

        orderForm.reset()
})

