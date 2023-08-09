const splash = document.getElementById("splash");
const navbar = document.getElementById("navbar")
const parent = document.getElementById("parent")
setTimeout(() => {
    splash.style.display = "none";
    parent.style.display = "block"
}, 2400)

// navbar.classList.add("fixed")


const navbarSticky = () => {
    if (parent.scrollTop > 1 || parent.scrollTop > 1) {
        navbar.classList.add("fixed")
        document.getElementById("hero").classList.add("margin")
    } else {
        navbar.classList.remove("fixed")
        document.getElementById("hero").classList.remove("margin")
    }
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden")
        }
        else{
            entry.target.classList.remove("show")
            entry.target.classList.add("hidden")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=> observer.observe(el))


const navShow = document.getElementById("navShow");
const navHide = document.getElementById("navHide");
const hiddenLinks = document.getElementById("hiddenLinks");

const shownav=()=>{
    navHide.style.display="block"
    navShow.style.display="none"
    hiddenLinks.style.display="flex"
}
const hidenav=()=>{
    hiddenLinks.style.display="none"
    navHide.style.display="none"
    navShow.style.display="block"
}

window.onresize = function(){ 
    if(window.innerWidth>550){
        navHide.style.display="none";
        navShow.style.display="none";
    }
    else{
        navShow.style.display="block";
        hiddenLinks.style.display="none"
    }

}