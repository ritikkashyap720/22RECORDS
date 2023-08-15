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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden")
        }
        else {
            entry.target.classList.remove("show")
            entry.target.classList.add("hidden")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))


const navShow = document.getElementById("navShow");
const navHide = document.getElementById("navHide");
const hiddenLinks = document.getElementById("hiddenLinks");

const shownav = () => {
    navHide.style.display = "block"
    navShow.style.display = "none"
    hiddenLinks.style.display = "flex"
}
const hidenav = () => {
    hiddenLinks.style.display = "none"
    navHide.style.display = "none"
    navShow.style.display = "block"
}

window.onresize = function () {
    if (window.innerWidth > 550) {
        navHide.style.display = "none";
        navShow.style.display = "none";
    }
    else {
        navShow.style.display = "block";
        hiddenLinks.style.display = "none"
    }

}

// hide and show wtsp card
const showWtsp = () => {
    if (document.getElementById("wtspCard").style.display == "block") {
        document.getElementById("wtspCard").style.display = "none"
    }
    else {
        document.getElementById("wtspCard").style.display = "block"

    }
}
const closeWtsp = () => {
    document.getElementById("wtspCard").style.display = "none"
}

// sending mail
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nameC = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    if (message.value == '') {
        console.log("fill message")
    }
    else {


        let formData = {
            name: nameC.value,
            email: email.value,
            message: message.value
        }

        document.getElementById("messageAnimation").style.display = "flex";
        document.getElementById("contactForm").style.display = "none";

        let xhr = new XMLHttpRequest;
        xhr.open('POST', 'https://mail-api-kbmi.onrender.com/');
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.responseText == 'success') {
                document.getElementById("SubmitText").style.display = "inline-block";
                document.getElementById("contactForm").style.display = "flex";
                nameC.value = '',
                    email.value = '',
                    message.value = ''
                document.getElementById("messageAnimation").style.display = "none";
            }
            else {
                alert('Network error!, Try refreshing the page')
            }
        }
        xhr.send(JSON.stringify(formData))
    }
})
