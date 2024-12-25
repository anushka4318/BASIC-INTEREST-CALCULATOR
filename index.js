function calculate() {
    // Use querySelector to select the input fields in order
    var p = document.querySelector("form input:nth-of-type(1)"); // Principle
    var r = document.querySelector("form input:nth-of-type(2)"); // Rate
    var y = document.querySelector("form input:nth-of-type(3)"); // Years
    var final = document.querySelector("form p"); // Result paragraph

    // Calculate the sum of inputs
    var ans = Number(p.value) * Math.pow((1+Number(r.value)),1*Number(y.value));

    // Update the paragraph's text content
    final.textContent = ans.toLocaleString(undefined, { style: "currency", currency: "USD" });
}
