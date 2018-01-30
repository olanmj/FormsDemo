var add = function () {
    var total = Number(document.querySelector("#op1").value) +
        Number(document.querySelector("#op2").value);
    document.querySelector("#sum").innerHTML = total;
}

window.onload = function () {
    document.querySelector("#btn").onclick = add;
}