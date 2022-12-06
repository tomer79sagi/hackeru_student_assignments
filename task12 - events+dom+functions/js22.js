function start() {
  document.getElementById("btn").onclick = () => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = document.getElementById("result");
    result.value = num1 + num2;
  };
}
