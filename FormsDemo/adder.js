var add = function () {
    var total = Number(document.querySelector("#op1").value) +
        Number(document.querySelector("#op2").value);
    document.querySelector("#sum").innerHTML = total;
}

var selectGender = function () {
    var gender = document.querySelector("input[type=radio]:checked").value;
    document.querySelector("#selected").innerHTML = "Current selection: <b>" + gender + "</b>";
}

window.onload = function () {
    document.querySelector("#btn").onclick = add;
    var radiobuttons = document.querySelectorAll("input[type=radio]");
    for (var i = 0; i < radiobuttons.length; i++) {
        radiobuttons[i].onchange = selectGender;
    }
    document.querySelector("#genderselect").onclick = selectGender;
}