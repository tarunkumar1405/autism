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