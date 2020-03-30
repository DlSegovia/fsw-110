function calc() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var op = document.getElementById("operator").value;

    if (op == "add") {
        document.getElementById("result").value = num1 + num2;
        document.getElementById("body").style.backgroundColor = "yellow";
    } else if (op == "min") {
        document.getElementById("result").value = num1 - num2;
        document.getElementById("body").style.backgroundColor = "pink";

    } else if (op == "mul") {
        document.getElementById("result").value = num1 * num2;
        document.getElementById("body").style.backgroundColor = "coral";
    }



}