function res() {
    document.getElementById("result").value += val
}
function solve() {
    let x = document.getElementById("result");
    let y = eval(x);
    document.getElementById("result").value = y;
}
function clr() {
    document.getElementById("result").value = "0";
}