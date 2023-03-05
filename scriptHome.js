
let projects = document.querySelector('.projects-Grid');

    if (projects) {
        projects.addEventListener('click', (event) => {
            if (event.target.getAttribute('id')) {
                window.location = 'Projects/'+event.target.getAttribute('id')+'/index.html';
            } else {
                console.log("project is null")
            }
        })
    }
    else{
        console.log("projects is null")
    }


    