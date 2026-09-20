const enBtn = document.getElementById("enBtn");
const hiBtn = document.getElementById("hiBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


function setLanguage(language){

    document.querySelectorAll("[data-en]").forEach(element => {

        if(language === "hi"){
            element.textContent = element.getAttribute("data-hi");
        }else{
            element.textContent = element.getAttribute("data-en");
        }

    });


    document.documentElement.lang =
        language === "hi" ? "hi" : "en";


    if(enBtn){
        enBtn.classList.toggle(
            "active",
            language === "en"
        );
    }


    if(hiBtn){
        hiBtn.classList.toggle(
            "active",
            language === "hi"
        );
    }


    localStorage.setItem(
        "growingTogetherLanguage",
        language
    );
}


if(enBtn){

    enBtn.addEventListener("click",()=>{
        setLanguage("en");
    });

}


if(hiBtn){

    hiBtn.addEventListener("click",()=>{
        setLanguage("hi");
    });

}


const savedLanguage =
    localStorage.getItem(
        "growingTogetherLanguage"
    ) || "en";


setLanguage(savedLanguage);


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("show");

    });

}


document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        if(navLinks){
            navLinks.classList.remove("show");
        }

    });

});
// Footer links for all pages
document.addEventListener("DOMContentLoaded", () => {

    const footer = document.querySelector(".footer");

    if (footer) {
        const footerLinks = document.createElement("div");
        footerLinks.className = "footer-links";

        footerLinks.innerHTML = `
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="contact.html">Contact Us</a>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="disclaimer.html">Disclaimer</a>
            <a href="terms.html">Terms & Conditions</a>
        `;

        footer.prepend(footerLinks);
    }
});