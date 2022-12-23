function formatMoney(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$' + value
}

function Pessoas(value){
    if (value == 1) {
        return value + ' Pessoa'
    }return value + ' Pessoas'
}

function total(){
    let num1 = Number(document.getElementById("yourBill").value)
    let num2 = document.getElementById("tipInput").value
    let num3 = document.getElementById("splitInput").value

    let gorjeta = num1 * num2/100
    let total = num1 + gorjeta
    let totalSplit = total / num3

    document.getElementById("tipPercent").innerHTML = num2 + '%'
    document.getElementById("tipValue").innerHTML = formatMoney(gorjeta)
    document.getElementById("totalWithTip").innerHTML = formatMoney(total)

    document.getElementById("splitValue").innerHTML = Pessoas(num3)
    document.getElementById("billEach").innerHTML = formatMoney(totalSplit) 
}
