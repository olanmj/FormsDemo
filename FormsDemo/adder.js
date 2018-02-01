var add = function () {
    var total = Number(document.querySelector("#op1").value) +
        Number(document.querySelector("#op2").value);
    document.querySelector("#sum").innerHTML = total;
}

var selectGender = function () {
    var gender = document.querySelector("input[type=radio]:checked").value;
    document.querySelector("#selected").innerHTML = "Current selection: <b>" + gender + "</b>";
}

var selectCar = function () {
    var car = document.querySelector("select option:checked").value;
    document.querySelector("#selectedcar").innerHTML = "You selected: " + cars[car].make + " which costs $" + cars[car].price;
}

var cars = [{ make: "Volvo", price: 30000 },
    { make: "Saab", price: 40000 },
    { make: "Mercedes", price: 50000 },
    { make: "Audi", price: 60000 }];

window.onload = function () {
    document.querySelector("#btn").onclick = add;
    var radiobuttons = document.querySelectorAll("input[type=radio]");
    for (var i = 0; i < radiobuttons.length; i++) {
        radiobuttons[i].onchange = selectGender;
    }
    document.querySelector("#genderselect").onclick = selectGender;
    document.querySelector("#carselector").onclick = selectCar;
}