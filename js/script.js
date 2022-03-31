let header = document.getElementById("header-mobile");
let navbarMobile = document.getElementById("header-mobile-navbar");
let menuMobileBtn = document.getElementById("header-menu-btn");
let allProjects = document.getElementById("projects-content");
let projects = document.getElementsByClassName("project-config");

let html = document.querySelector("html");
let darkModeBtn = document.getElementById("dark-mode-btn");
let buttonDarkModeState = false;

onload = function () {
    for (let i = 0; i < projectsList.length; i++) {
        allProjects.innerHTML += `<div class="project-config">
                                    <div class="project-image">
                                        <img src="${projectsList[i].img}" alt=""  />
                                    </div>
                                    <a class="project-show-btn cent" href="${projectsList[i].href}">VER PROJETO NO GITHUB</a>
                                    <div class="project-info cent-column">
                                    <h1>${projectsList[i].name}</h1>
                                        <p>
                                    ${projectsList[i].desc}
                                        </p>
                                    </div>
                                  </div>`;
    }

    for (let p of projects) {
        let projectImg = p.children[0];
        let projectShowBtn = p.children[1];
        let projectInfo = p.children[2];

        p.addEventListener("mouseenter", function () {
            projectInfo.classList.toggle("hover-project");
            projectShowBtn.classList.toggle("hover-project");
            projectImg.classList.toggle("hover-project");
        });

        p.addEventListener("mouseleave", function () {
            projectInfo.classList.toggle("hover-project");
            projectShowBtn.classList.toggle("hover-project");
            projectImg.classList.toggle("hover-project");
        });
    }
};

function enableDarkMode() {
    if (buttonDarkModeState == false && window.matchMedia("(prefers-color-scheme: dark)").matches == true) {
        html.classList.add("dark-mode");
        buttonDarkModeState = true;
        darkModeBtn.src = "https://img.icons8.com/ios-glyphs/30/000000/moon-symbol.png";
        return;
    }
    if (buttonDarkModeState == true) {
        html.classList.remove("dark-mode");
        buttonDarkModeState = false;
        darkModeBtn.src = "https://img.icons8.com/ios-glyphs/30/000000/sun--v1.png";
    }
}

function showMobileNavbar() {
    header.classList.toggle("mobile-btn-active");
    navbarMobile.classList.toggle("mobile-btn-active");
}

menuMobileBtn.addEventListener("click", showMobileNavbar);
darkModeBtn.addEventListener("click", enableDarkMode);
