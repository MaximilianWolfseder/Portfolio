const arrowbuttons = document.querySelectorAll(".arrowbutton");
const buttons = document.querySelectorAll(".heroButton");


arrowbuttons.forEach((button =>{
    button.addEventListener("click", (event) => {
        const state = button.getAttribute('data-state')
        if (state === 'next') {
            buttons.forEach((insideButton) => {
                const index = insideButton.getAttribute("data-index")
                let i = parseInt(index)
                if (index === '3') {
                    insideButton.setAttribute('data-index', "1")
                } else {
                    i++;
                    insideButton.setAttribute('data-index', i.toString())
                }
            })
        } else {
            buttons.forEach((insideButton) => {
                const index = insideButton.getAttribute("data-index")
                let i = parseInt(index)
                if (index === '1') {
                    insideButton.setAttribute('data-index', "3")
            } else {
                i--;
                insideButton.setAttribute('data-index', i.toString())
            }
            })
            
        }
    })
}))
