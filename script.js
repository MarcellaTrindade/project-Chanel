// js/script.js
function loadComponent(elementId, componentPath, cssPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (cssPath) {
                loadCSS(cssPath);
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

function loadCSS(cssPath) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    document.head.appendChild(link);
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "components/navbar/navbar.html", "components/navbar/navbar.css", "/style.css");
    loadComponent("header", "components/header/header.html", "components/header/header.css", "/style.css");
    loadComponent("footer", "components/footer/footer.html", "components/footer/footer.css", "/style.css");
});