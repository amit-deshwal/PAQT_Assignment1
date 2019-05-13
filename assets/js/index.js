document.getElementById("btn").onclick = function() {
  location.href = "voting.html";
};
let elements = document.getElementsByClassName('mascot');
    for(let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.addEventListener('click', onClickHandler);
    }

    function onClickHandler() {
        document.getElementById("form-details").setAttribute("style", "display:block");
        document.getElementById("btn").setAttribute("style", "display:block");
        document.getElementById("btn").setAttribute("style", "display:block");
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            if(element !== this) {
                element.style.opacity = '0.2';
            } else {
                this.style.opacity = '1';
            }
        }
    }