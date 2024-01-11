const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", ()=>{
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}

document.getElementById('logo').addEventListener('click', function() {
    var MediaQuery = window.matchMedia('(max-width:600px)');
    if(MediaQuery.matches){
        var navlinks = document.getElementById('nav-links');
        if (navlinks.style.display === "flex") {
            navlinks.style.display = "none";
        } else {
            navlinks.style.display = "flex";
        }
    }   
});



  