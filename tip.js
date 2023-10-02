
function calculateTip() {
    var billAmt = document.getElementById("billamnt").value;

    if (billAmt === "" || billAmt === 0) {
      var newErrorElement = document.createElement("p");
      newErrorElement.setAttribute("id", "error");
      newErrorElement.innerHTML = "Please enter a valid bill amount";

      document.getElementById("billamnt").parentElement.appendChild(newErrorElement);

      while (billAmt === "" || billAmt === 0) {
        billAmt = document.getElementById("billamnt").value;
        if (billAmt !== "" || billAmt !== 0) {
          document.getElementById("error").remove();
        }
          
        }
      }
        
  
      

    var tipPercentage = document.querySelector('input[name="tipamnt"]:checked').value;
  
    var tip = billAmt * tipPercentage;
    var total = Number(billAmt) + Number(tip);
    
    document.getElementById("tip").innerHTML = tip.toFixed(2);
    document.getElementById("total").innerHTML = total.toFixed(2);
  }

  var moneyFormat = document.getElementById("billamnt");
  moneyFormat.addEventListener("keyup", function(event) {
    var n = parseInt(this.value.replace(/\D/g,''),10);
    moneyFormat.value = n.toLocaleString();
  }, false);