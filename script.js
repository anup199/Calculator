// Function to display the pressed key
function dis(val) {
     document.getElementById("result").value += val;
}

// Function to handle key press events
document.addEventListener('keydown', function (event) {
     const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter'];
     if (allowedKeys.includes(event.key)) {
          if (event.key === 'Enter') {
               solve();
          } else {
               document.getElementById("result").value += event.key;
          }
     }
})

// Function to solve the mathematical expression
function solve() {
     let x = document.getElementById("result").value;
     try {
          // Use eval() to evaluate the expression
          let y = eval(x);
          // Check if the result is a number
          if (typeof y === 'number') {
               document.getElementById("result").value = y;
          } else {
               document.getElementById("result").value = "Error";
          }
     } catch (error) {
          document.getElementById("result").value = "Error";
     }
}

// Function to clear the input field
function clr() {
     document.getElementById("result").value = ""
}