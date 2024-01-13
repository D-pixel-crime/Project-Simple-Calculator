document.addEventListener("DOMContentLoaded", () => {
    // Selecting DOM elements
    const expression = document.querySelector("#expression");
    const answer = document.querySelector("#answer");
    const allContent = document.querySelectorAll(".content-buttons");

    // Event listener for content buttons
    for (let button of allContent) {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            // Update expression value on button click
            expression.value += event.target.value;
            document.querySelector(".calculator-container").classList.add("focused");
        });
    }
    

    // Event listeners for basic operations
    document.querySelector(".add").addEventListener("click", (event) => {
        event.preventDefault();
        expression.value += "+";
    });
        
    document.querySelector(".minus").addEventListener("click", (event) => {
        event.preventDefault();
        expression.value += "-";
    });
        
    document.querySelector(".divide").addEventListener("click", (event) => {
        event.preventDefault();
        expression.value += "/";
    });
            
    document.querySelector(".multiply").addEventListener("click", (event) => {
        event.preventDefault();
        expression.value += "*";
    });


    // Event listener for input focus in
    document.querySelector("input").addEventListener("focusin", () => {
        document.querySelector(".calculator-container").classList.add("focused");
    });

    // Event listener for input focus out
    document.querySelector("input").addEventListener("focusout", () => {
        document.querySelector(".calculator-container").classList.remove("focused");
    });

    // Event listener for square root
    document.querySelector(".root").addEventListener("click", (event) => {
        event.preventDefault();
        try {
            // Calculate square root and update answer
            answer.value = `sqrt. = ${Math.sqrt(eval(expression.value))}`;
            document.querySelector(".calculator-container").classList.remove("focused");
        } catch (error) {
            answer.value = `Invalid input - ${error.message}`;
        }
    });

    // Event listener for equals button
    document.querySelector(".equals").addEventListener("click", (event) => {
        event.preventDefault();
        try {
            // Evaluate expression and update answer
            answer.value = eval(expression.value);
            document.querySelector(".calculator-container").classList.remove("focused");
        } catch (error) {
            answer.value = `Invalid input - ${error.message}`;
        }
    });
});
