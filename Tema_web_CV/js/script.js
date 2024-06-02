document.addEventListener("DOMContentLoaded", () => {

    const mainElement = document.querySelector(".main");
    const homeSection = document.querySelector(".home-section");
    const pageLoader = document.querySelector(".page-loader");
    const navToggler = document.querySelector(".nav-toggler");
    const tabsContainer = document.querySelector(".about-tabs");
    const aboutSection = document.querySelector(".about-section");
    const overlay = document.querySelector(".overlay");
    const portfolioPopup = document.querySelector(".portfolio-popup");
    const ppClose = document.querySelector(".pp-close");
    const header = document.querySelector(".header");

    //manipularea DOM-ului

    // Initialize the page
    mainElement.classList.remove("hidden");
    homeSection.classList.add("active");
    pageLoader.classList.add("fade-out");
    setTimeout(() => pageLoader.style.display = "none", 600);
    //Modificarea stilului unui element
    //Folosirea setTimeout 


    // Toggle Navbar
    navToggler.addEventListener("click", () => {
        toggleNavbar();
        document.body.classList.toggle("hide-scrolling");
    });

    function toggleNavbar() {
        hideSection();
        document.querySelector(".header").classList.toggle("active");
    }

    function hideSection() {
        document.querySelector("section.active").classList.toggle("fade-out");
    }
    //Manipularea evenimentelor generate de mouse și tastatură: Prin adăugarea unui ascultător de eveniment care reacționează la clicurile pe elementul navToggler
    //modifică clasa CSS a elementului .header pentru a activa sau dezactiva bara de navigare.
    //classList: Se utilizează metoda classList.toggle()




    //Active
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("link-item") && e.target.hash) {
            //Manipularea evenimentelor mouse-ului: 
            activateOverlay();
            if (e.target.classList.contains("nav-item")) {
                toggleNavbar();
            } else {
                hideSection();
                document.body.classList.add("hide-scrolling");
            }
            setTimeout(() => {
                switchSection(e.target.hash);
            }, 500);
        }
    });

    function activateOverlay() {
        overlay.classList.add("active");
        navToggler.classList.add("hide");
        //Modificarea stilului elementelor:
    }

    function switchSection(hash) {
        document.querySelector("section.active").classList.remove("active", "fade-out");
        document.querySelector(hash).classList.add("active");
        window.scrollTo(0, 0);
        document.body.classList.remove("hide-scrolling");
        navToggler.classList.remove("hide");
        overlay.classList.remove("active");
    }





    tabsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
            //Manipularea evenimentelor mouse-ului
            switchTab(e.target);
        }
    });

    function switchTab(target) {
        tabsContainer.querySelector(".active").classList.remove("active");
        target.classList.add("active");
        const targetContent = target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(targetContent).classList.add("active");
        //Modificarea stilului elementelor
    }

    // Detalii Cv 
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("view-project-btn")) {
            showPortfolioPopup(e.target.parentElement);
        }
    });
    //Creez și șterg elemente din HTML: Acest lucru este realizat atunci când 
    //fereastra secundara este creată și afișată în momentul în care utilizatorul 
    //dorește să vizualizeze detaliile unui proiect din portofoliu. 
    //În plus, fereastra secundara este ștearsă sau ascunsă când utilizatorul 
    //închide fereastra.
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("pp-inner")) {
            togglePortfolioPopup();
        }
    });

    ppClose.addEventListener("click", togglePortfolioPopup);

    function showPortfolioPopup(portfolioItem) {
        togglePortfolioPopup();
        portfolioPopup.scrollTo(0, 0);
        fillPortfolioDetails(portfolioItem);
    }

    function togglePortfolioPopup() {
        portfolioPopup.classList.toggle("open");
        document.body.classList.toggle("hide-scrolling");
        mainElement.classList.toggle("fade-out");
    }

    function fillPortfolioDetails(portfolioItem) {
        const thumbnail = document.querySelector(".pp-thumbnail img");
        const header = document.querySelector(".pp-header h3");
        const body = document.querySelector(".pp-body");

        thumbnail.src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
        header.innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
        body.innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
    }

    // Utilizare getComputedStyle
    const headerComputedStyle = window.getComputedStyle(header);
    console.log("Stilul calculat al barei de navigare:", headerComputedStyle.getPropertyValue("display"));
    //getComputedStyle 



    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const messageInput = document.getElementById('messageInput');
    
    //Verificăm dacă există deja date salvate în localStorage și le completăm în câmpurile formularului
    const savedName = localStorage.getItem('savedName');
    const savedEmail = localStorage.getItem('savedEmail');
    const savedMessage = localStorage.getItem('savedMessage');
    
    if (savedName) {
        nameInput.value = savedName;
    }

    if (savedEmail) {
        emailInput.value = savedEmail;
    }

    if (savedMessage) {
        messageInput.value = savedMessage;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        // Obținem valorile introduse de utilizator
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        // Salvăm valorile în localStorage
        localStorage.setItem('savedName', name);
        localStorage.setItem('savedEmail', email);
        localStorage.setItem('savedMessage', message);

        
        alert('Message sent successfully!');
    });
    //Am utilizat localStorage



});

