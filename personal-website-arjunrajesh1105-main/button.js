function toggleStyleSheet(){
    var styleElement = document.getElementById("mainStyleSheet");
    var currentStyle = styleElement.getAttribute("href");
    var newStyle;
    
    if (currentStyle === "style.css"){
        newStyle = "style2.css"
    }
    else{
        newStyle = "style.css"
    }

    styleElement.setAttribute("href", newStyle);
    localStorage.setItem("stylesheet", newStyle);
}


window.onload = function(){
    var savedStyle = localStorage.getItem("stylesheet");
    var styleElement = document.getElementById("mainStyleSheet");

    if (savedStyle){
        styleElement.setAttribute("href", savedStyle);
    }
    
}