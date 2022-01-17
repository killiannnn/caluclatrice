document.querySelectorAll(".boutonCalc").forEach(function(bouton) {
    bouton.addEventListener("click", function(click) {
        const result = document.getElementById("result")
        
        if (click.target.id === "CE") {
            result.innerHTML = "0"

            return 
        }

        // TODO BOUTON SUPPR

        if (click.target.id === "egal") {
            try {
                result.innerHTML = eval(result.innerHTML)
            } catch(err) {
                result.innerHTML = "Syntax Error"
            }

            return
        }
        
        if (result.innerHTML === "0" || result.innerHTML === "Syntax Error") {
            result.innerHTML = click.target.id
        } else {
            result.innerHTML = result.innerHTML + click.target.id
        }
    })
})