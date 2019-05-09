// BOTTOM LINE FOR HEADER WHEN SCROLLED & SCROLLSPY
window.onscroll = function () {
    var body = document.body;
    var html = document.documentElement;
    var navHead = document.querySelector("header.header");

    if (body.scrollTop >= navHead.clientHeight || html.scrollTop >= navHead.clientHeight) {
        // console.log("test");
        navHead.classList.add("scrolled");
    } else {
        navHead.classList.remove("scrolled");
    }
}

// ACTIVE LINKS IN NAV HEADER
var blueLinks = function (event) {
    var navLinks = document.querySelectorAll('.navbar-links');
    if (event.target.classList.contains('navbar-links')) {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
            navLinks[i].firstElementChild.style.opacity = 0;
        }
        event.target.classList.add("active");
        event.target.firstElementChild.style.opacity = 1;
    }
}
document.addEventListener("click", blueLinks)

// SLIDE UP API BOX
var dgLinesContainer = document.querySelectorAll('.dg-lines-container');
for (let i = 0; i < dgLinesContainer.length; i++) {
    dgLinesContainer[i].addEventListener("click", function () {
        var dgTextContainer = this.parentElement.parentElement;
        if (dgTextContainer.style.height) {
            dgTextContainer.style.height = "";
        } else {
            dgTextContainer.style.height = dgTextContainer.scrollHeight + "px";
        }
    })
}

// OPEN DIAGRAM
function openDiagram(evt, diagramName, diagramLegend) {
    // Declare all variables
    var i, diagram, diagramLinks;

    // Get all elements with class="diagram" and hide them
    diagram = document.getElementsByClassName("api-diagram");
    for (i = 0; i < diagram.length; i++) {
        diagram[i].style.display = "none";
        diagram[i].lastElementChild.style.height = "";
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
    document.getElementById(diagramLegend).style.display = "flex";
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

// ONE CLICK CREATE ACCOUNT
var phoneInput = document.getElementById('input-phonenumber');
var createBtn = document.querySelector('.oneClickCreate');
var labelInput = document.querySelector('.label-input');
var crAccModal = document.getElementById('modal-crAcc');

function openClickAcc(event) {
    crAccModal.style.display = "block"
    phoneInput.focus();
}
var closeCrAcc = document.querySelectorAll('.close-crAcc');
for (let i = 0; i < closeCrAcc.length; i++) {
    closeCrAcc[i].addEventListener('click', function closeClickAcc(event) {
        event.target.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
    });
}
var focusPhone = function (event) {
    document.querySelector('.font-icon.icon-smartphone').classList.add('focused');
    labelInput.classList.add('focused');
}
var blurPhone = function (event) {
    if (phoneInput.value == "") {
        labelInput.classList.remove('focused');
        document.querySelector('.font-icon.icon-smartphone').classList.remove('focused');
    } else {
        labelInput.classList.add('focused');
    }
}
function numbOnly(inputBox, inputFilter) {
    var keyEvents = ['input', 'keydown', 'keyup', 'mousedown', 'mouseup', 'select', 'contextmenu', 'drop'];
    
    keyEvents.forEach(function (event) {
        inputBox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if(this.hasOwnProperty('oldValue')) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    });
}
numbOnly(phoneInput, function (value) {
    return /^\d*$/.test(value) // integer values (positive only)
})
var checkNum = function (event) {
    if (this.value.length >= 9) {
        this.classList.add('focused');
        createBtn.classList.add('legit');
    } else {
        createBtn.classList.remove('legit');
    }
}
function createNewAcc() {
    console.log("Your phone number is " + phoneInput.value);
}
phoneInput.addEventListener('focus', focusPhone, false);
phoneInput.addEventListener('blur', blurPhone, false);
phoneInput.addEventListener('keyup', checkNum, false);

// AXIOS
createBtn.addEventListener('click', function (event) {
    var baseURLAuth = "http://13.229.138.171/new-giro";
    var phoneNumb = phoneInput.value;
    var modalSucc = document.getElementById('success-crAcc');
    var modalErr = document.getElementById('error-crAcc');
    var errResp = document.getElementById('registered-phonenumb');
    var giroNumb = document.getElementById('giro-numb');

    axios.post(baseURLAuth, {phone: phoneNumb}, {
        headers: {
            "Content-Type": "application/json"
        },
    })

    // If not registered, create this response
    .then(function (response) {
        console.log(response.data);
        console.log("9989" + response.data.account_number);
        // document.getElementById('balance-response').innerHTML = "Your balance is Rp " + response.data.result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        giroNumb.innerHTML = "9989" + response.data.account_number;
        crAccModal.style.display = "none";
        modalSucc.style.display = "block";
        phoneInput.value = "";
    })

    // If registeres already, create this response
    .catch(function (error) {
        console.log(error.response.data.message);
        crAccModal.style.display = "none";
        modalErr.style.display = "block";
        errResp.innerHTML = phoneNumb + " is already registered.";
        phoneInput.value = "";
    })
})


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

// OPEN SIDENAV
var openSideNav = function () {
    if (event.target.classList.contains('floating-trigger')) {
        document.querySelector(".sidenav").classList.toggle('slide');
        document.querySelector(".footer-menu.container").classList.toggle('slide');
        // document.querySelector("body > div").classList.toggle('slide');
    }
}
// document.addEventListener('click', openSideNav, false);
document.addEventListener('touchstart', openSideNav, false); // for ios safari

document.querySelector('[data-toggle="apakek"]')