// BOTTOM LINE FOR HEADER WHEN SCROLLED & SCROLLSPY
window.onscroll = function () {
    var body = document.body;
    var html = document.documentElement;
    var navHead = document.querySelectorAll("header.header");

    if (body.scrollTop >= navHead[0].clientHeight || html.scrollTop >= navHead[0].clientHeight) {
        // console.log("test");
        navHead[0].classList.add("scrolled");
    } else {
        navHead[0].classList.remove("scrolled");
    }


    // SCROLLSPY VARIABLE
    // var section = document.querySelectorAll(".scrollspy");
    // var sections = {};
    // var i = 0;

    // Array.prototype.forEach.call(section, function(e) {
    //     sections[e.id] = e.offsetTop;
    // });
    // // SCROLLSPY
    // var scrollPosition = html.scrollTop || body.scrollTop;
    // for (i in sections) {
    //     if (sections[i] <= scrollPosition) {
    //     document.querySelector('.active').setAttribute('class', ' ');
    //     document.querySelector('.menu a[href*=' + i + ']').setAttribute('class', 'active');
    //     }
    // }
}

// POP UP CAROUSEL
var popCarousel = function () {
    console.log("Test");
};
document.querySelector('.diagram-container').addEventListener('click', popCarousel);

// OPEN DIAGRAM
function openDiagram(evt, diagramName) {
    // Declare all variables
    var i, diagram, diagramLinks;

    // Get all elements with class="diagram" and hide them
    diagram = document.getElementsByClassName("api-diagram");
    for (i = 0; i < diagram.length; i++) {
        diagram[i].style.display = "none";
    }

    // Get all elements with class="diagramLinks" and remove the class "active"
    diagramLinks = document.getElementsByClassName("diagram-links");
    for (i = 0; i < diagramLinks.length; i++) {
        diagramLinks[i].className = diagramLinks[i].className.replace(" active", "");
        diagramLinks[i].firstElementChild.className = diagramLinks[i].firstElementChild.className.replace(" active", "");
        diagramLinks[i].lastElementChild.className = diagramLinks[i].lastElementChild.className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(diagramName).style.display = "flex";
    evt.currentTarget.className += " active";
    evt.currentTarget.firstElementChild.className += " active";
    evt.currentTarget.lastElementChild.className += " active";
    
}

// OPEN API-BOX
function openApiBox(evt, apiName) {
    // Declare all variables
    var i, apiBox, apiLinks;

    // Get all elements with class="apibox" and hide them
    apiBox = document.getElementsByClassName("api-box");
    for (i = 0; i < apiBox.length; i++) {
        apiBox[i].style.display = "none";
    }

    // Get all elements with class="apiLinks" and remove the class "active"
    apiLinks = document.getElementsByClassName("api-links");
    for (i = 0; i < apiLinks.length; i++) {
        apiLinks[i].className = apiLinks[i].className.replace(" active", "");
        apiLinks[i].firstElementChild.className = apiLinks[i].firstElementChild.className.replace(" active", "");
        apiLinks[i].lastElementChild.className = apiLinks[i].lastElementChild.className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(apiName).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.firstElementChild.className += " active";
    evt.currentTarget.lastElementChild.className += " active";
    
}

// SHOW DASHBOARD BUTTON / LOG IN
// var navDashboardBtn = document.getElementById('dashboard-nav');
// if (localStorage.Authentication == authentication) {
//     navDashboardBtn.style.display = "inline-block";
//     window.location = "index.html";
// } else {
//     navDashboardBtn.style.display = "";
// }

// SHOW DASHBOARD BUTTON / LOG OUT
var logutBtn = document.getElementById('logout');
logutBtn.onclick = function LogOut() {
    console.log("logout");
    if (localStorage.authentication == true) {
        localStorage.authentication = false;
        navDashboardBtn.style.display = "";
        window.location = "index.html";
    }
}
// SHOW DROPDOWN MENU
// navDashboardBtn.onclick = function showDropdown() {
//     console.log("Show Drop Menu");
//     var dropMenu = document.getElementById('drop-menu');
//     if (dropMenu.style.display == false) {
//         dropMenu.style.display= "block";
//     } else {
//         dropMenu.style.display= "";
//     }
// }

// SUBSCRIBE ENTERPRISE
document.getElementById('mce-EMAIL').addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submitForm();
    }
})
document.getElementById('arrowIconSubscribe').addEventListener('click', function (event) {
    submitForm();
})
function submitForm() {
    document.forms['mc-embedded-subscribe-form'].submit(); // Triggers the default submit function by mailchimp
}