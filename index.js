document.querySelectorAll(".boutonCalc").forEach(function(bouton) {
    bouton.addEventListener("click", function(click) {
        const result = document.getElementById("result")
        
        if (click.target.id === "CE") {
            result.innerHTML = "0"

            return 
        }

        if (click.target.id === "suppr"){
            result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1)
           
            if (result.innerHTML.length === 0) result.innerHTML = "0"
            
            return
        }
        
        

        if (click.target.id === "egal") {
            try {
                result.innerHTML = eval(result.innerHTML).toFixed(2)
            } catch(err) {
                result.innerHTML = "Syntax Error"
            }

            return
        }

        if (click.target.id === "PI") {
            result.innerHTML = result.innerHTML + Math.PI
            return
        }
        
        if (result.innerHTML === "0" || result.innerHTML === "Syntax Error") {
            result.innerHTML = click.target.id
        } else {
            result.innerHTML = result.innerHTML + click.target.id
        }
    })
})