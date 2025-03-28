function add() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const total = num1 + num2
    document.getElementById("result").value=total;
}

function subtract() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const total = num1- num2
    document.getElementById("result").value=total;
}


function multiplication(){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const total = num1*num2
    document.getElementById("result").value=total;


}

function division(){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const total = num1/num2
    document.getElementById("result").value=total;
}

function calculateSquare() {
    const num1 = Number(document.getElementById("num1").value);
      const total = num1 * num1
      document.getElementById("result").value=total;
    
  }

  function calculateCube(){ 
    const num1 = Number(document.getElementById("num1").value);
    const total = num1 * num1 * num1
    document.getElementById("result").value=total;
}

function clearInput() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
  }