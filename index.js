document.querySelector("#button").addEventListener("click", fibo);
document.querySelector("#button").addEventListener("click", function() {
    document.querySelector("#fiboNum").value = "";
    document.querySelector("#fiboNum").focus();
});
document.querySelector("#fiboNum").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.querySelector("#button").click();
        document.querySelector("#fiboNum").value = "";
    }
});

function fibo(num) {
    num = parseInt(document.querySelector("#fiboNum").value);
    let num1 = 0;
    let num2 = 1;
    let fiboNum;
    if (num < 1 || num == undefined) {
        document.querySelector(".output").innerHTML = "Please enter a valid number";
    } else {
        for (let i = 1; i <= num; i++) {
            fiboNum = num1 + num2;
            num1 = num2;
            num2 = fiboNum;
        }
    }
    document.querySelector(".output").innerHTML = fiboNum;
}