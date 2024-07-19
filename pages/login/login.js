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
    loadComponent("navbar", "/components/navbar/navbar.html", "/components/navbar/navbar.css");
    loadComponent("header", "/components/header/header.html", "/components/header/header.css");
    loadComponent("footer", "/components/footer/footer.html", "/components/footer/footer.css");
    loadComponent("section", "/components/section/section.html", "/components/section/section.css");
});
