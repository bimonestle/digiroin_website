window.onloadstart = function () {
    console.log("Test");
    apiEmbedSrc('http://digiroin.com');
}

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

// Open Create Account Modal
function openClickAcc(event) {
    crAccModal.style.display = "block"
    phoneInput.focus();
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
    return /^\d*$/.test(value); // integer values (positive only)
})

var checkNum = function (event) {
    var proceedBtn = this.parentElement.parentElement.nextElementSibling.firstElementChild;
    if (this.value.length >= 9) {
        this.classList.add('focused');
        proceedBtn.removeAttribute('disabled');
        proceedBtn.classList.add('legit');
    } else {
        proceedBtn.classList.remove('legit');
    }
}

// Close every modals created
function closeClickAcc(event) {
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
}
var closeCrAcc = document.querySelectorAll('.close-crAcc');
closeCrAcc.forEach(function (item) {
    item.addEventListener('click', closeClickAcc);
})

// Access Account
function accessAcc(event) {
    event.target.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
    document.querySelector('.menu .giro-search.wrapper1').style.display = 'block';
}
document.getElementById('accessAcc').addEventListener('click', accessAcc);

// Create new Account
function createNewAcc() {
    console.log("Your phone number is " + phoneInput.value);
}
phoneInput.addEventListener('focus', focusPhone, false);
phoneInput.addEventListener('blur', blurPhone, false);
phoneInput.addEventListener('keyup', checkNum, false);

// CHECK GIRO NUMBER SECTION
// Display search bar in navbar

var attempts = []; // store failed attempts to check giro number
function searchBarGiro() {
    var searchBar = document.querySelector('.menu .giro-search.wrapper1');
    if (searchBar.style.display === 'none') {
        searchBar.style.display = 'block';
        searchBar.firstElementChild.lastElementChild.firstElementChild.value = '';
        searchBar.firstElementChild.lastElementChild.firstElementChild.focus();
    } else {
        searchBar.style.display = 'none';
    }
}
document.querySelector('.menu > .signed.account').addEventListener('click', searchBarGiro);

// REDIRECT TO CREATE GIRO ACCOUNT
document.getElementById('no-account').addEventListener('click', function () {
    openClickAcc();
    this.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
})

// TRY CHECKING GIRO NUMBER AGAIN
document.getElementById('tryAgain').addEventListener('click', function () {
    var errorGiro = document.getElementById('error-checkGiro');
    if (attempts.length > 2) {
        // alert(attempts);
        alert("You've entered wrong giro number 3 times");
        errorGiro.style.display = 'block';

        // Erase don't have account
        errorGiro.querySelector('.crAcc-header.wrapper4').removeChild(document.getElementById('no-account'));

        // Create new element
        errorGiro.querySelector('.crAcc-footer.checkGiro')
        .innerHTML = `<input type="button" value="Forgot Giro Number"
        id="forgotGiroBtn" class="oneClickCreate forgotGiro legit" style= "width: 100%";>`;

        document.getElementById('forgotGiroBtn').addEventListener('click', function (params) {
            // Erase errorGiro
            errorGiro.style.display = 'none';
            
            var forgotModal = document.getElementById('modal-forgotGiro');
            forgotModal.style.display = 'block';
        })

    } else {
        // attempts.push(this.getAttribute('data-tries'))
        searchBarGiro();
        errorGiro.style.display = 'none';
    }
});

// Limit the input becomes numbers only
numbOnly(document.getElementById('input-giro'), function (value) {
    return /^\d*$/.test(value) // integer values (positive only)
})

// SEARCH GIRO NUMBER
function searchGiro(inputSearch) {
    var giro = inputSearch.value.slice(4);
    var endPoint =  "/api/check-giro/" + giro;
    axios.get(endPoint, {
        headers: {
            "Content-Type": "application/json"
        },
    })

    // If not registered, create this response
    .then(function (response) {
        console.log(response.data);
        console.log('function searchGiro success');
        console.log('Your giro number is ' + giro);
    })

    // If registeres already, create this response
    .catch(function (error) {
        console.log(error.response);
        console.log('function searchGiro error');
        attempts.push('false');
        document.getElementById('error-checkGiro').style.display = "block";
        document.getElementById('checked-giro').innerHTML = inputSearch.value
    })
}

// User clicks arrow
document.getElementById('search-giro').addEventListener('click', function () {
    searchGiro(document.getElementById('input-giro'));
    document.querySelector('.menu .giro-search.wrapper1').style.display = 'none';
});

// User presses enter key
document.getElementById('input-giro').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('search-giro').click();
    }
});

// FORGOT GIRO NUMBER
function inputPhoneFocus(event) {
    this.parentElement.querySelectorAll('.font-icon, .label-input').forEach(function (child) {
        child.classList.add('focused')
    })
}
function inputPhoneBlur(event) {
    if (this.value == "") {
        this.parentElement.querySelectorAll('.font-icon, .label-input').forEach(function (child) {
            child.classList.remove('focused')
        })
    }
}
document.getElementById('input-phonenumber2').addEventListener('focus', inputPhoneFocus);
document.getElementById('input-phonenumber2').addEventListener('blur', inputPhoneBlur);
numbOnly(document.getElementById('input-phonenumber2'), function (value) {
    return /^\d*$/.test(value) // integer values (positive only)
})
document.getElementById('input-phonenumber2').addEventListener('keyup', checkNum);

// SEND SMS
function sms(inputPhone) {
    console.log('function sms(inputPhone)');
    console.log('Sending SMS to ' + inputPhone.value);

    var endPoint = "/api/check-phone/" + inputPhone.value;
    axios.get(endPoint, {
        headers: {
            "Content-Type": "application/json"
        },
    })

    // If not registered, create this response
    .then(function (response) {
        console.log(response.data);
        console.log('function sms success');
        console.log('Your giro number is ' + inputSearch.value);
        document.getElementById('modal-sendSMS').style.display = 'block';
    })

    // If registeres already, create this response
    .catch(function (error) {
        console.log(error.response);
        console.log('function sms error');
        document.getElementById('modal-notYet').style.display = 'block';
    })
}
document.getElementById('sendSMS').addEventListener('click', function () {
    sms(document.getElementById('input-phonenumber2'));
})
document.getElementById('input-phonenumber2').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        sms(document.getElementById('input-phonenumber2'));
    }
})

// CHECK PHONE NUMBER REGISTER
// AXIOS
createBtn.addEventListener('click', function (event) {
    var baseURLAuth = "https://wallet.digiro.in/";
    var endPoint = "api/new-account/";
    var phoneNumb = phoneInput.value;
    var modalSucc = document.getElementById('success-crAcc');
    var modalErr = document.getElementById('error-crAcc');
    var errResp = document.getElementById('registered-phonenumb');
    var giroNumb = document.getElementById('giro-numb');

    axios.post(endPoint, {phone: phoneNumb}, {
        headers: {
            "Content-Type": "application/json"
        },
    })

    // If not registered, create this response
    .then(function (response) {
        console.log(response.data);
        console.log('Check Phone Success');
        console.log("9989" + response.data.message.account_number);
        // document.getElementById('balance-response').innerHTML = "Your balance is Rp " + response.data.result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        giroNumb.innerHTML = "9989" + response.data.message.account_number;
        crAccModal.style.display = "none";
        modalSucc.style.display = "block";
        phoneInput.value = "";
        createBtn.setAttribute('disabled', true);
        createBtn.classList.remove('legit');
    })

    // If registeres already, create this response
    .catch(function (error) {
        console.log(error);
        console.log(error.message);
        console.log('Check Phone Error');
        crAccModal.style.display = "none";
        modalErr.style.display = "block";
        errResp.innerHTML = phoneNumb + " is already registered.";
        phoneInput.value = "";
        createBtn.setAttribute('disabled', true);
        createBtn.classList.remove('legit');
    })
})

// COPY GIRO NUMBER
var copyGiro = document.getElementById('copy-giro');
copyGiro.addEventListener('click', function (event) {
    var giroNumb = document.getElementById('giro-numb');
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(giroNumb);

    selection.removeAllRanges();
    selection.addRange(range);

    var copyGiroAlert = `<div class="copy-alert success"><p>Copy giro number successful</p></div>`;
    var headNode = document.querySelector('.page-container .popup-container');
    var renderedCopyAlert = function (template, node) {

        node.innerHTML = template;
        
        setTimeout(() => {
            var template = document.querySelector('.copy-alert');
            template.parentElement.removeChild(template);
        }, 3000);
    }
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? giroNumb.innerText : "unsuccessful";
        console.log("The copied text is " + msg);

        renderedCopyAlert(copyGiroAlert, headNode);
    }
    catch(err) {
        console.log("Unable to copy text");
    }
})

// SHARE GIRO NUM
function shareGiroNum() {
    var middleContent = this.parentElement.previousElementSibling;
    if (navigator.share !== undefined) { // check if web share API Available, if it's true it'll open native share mobile
        navigator.share({
            title: 'My Giro Account Number',
            text: "Hello, this is my Giro Account Number ",
            url: "Hello, this is my Giro Account Number " +
            middleContent.querySelector('#giro-numb').innerText +
            " from " + window.location.href
        })
        .then(function() {
            console.log(`Sharing Giro Account Number in mobile.`);
            alert(`Sharing Giro Account Number in mobile.`);
        })
        .catch(function (err) {
            console.log(err + `. Can't share Giro Account Number in mobile.`);
            alert(err + `. Can't share Giro Account Number in mobile.`);
        });
    } else { // the web share API is not available, thus open mail app in your desktop
        console.log('Web Share API not supported');
        var link = "mailto:?"
        + "&subject=" + encodeURI("Sharing My Giro Number")
        + "&body= Hello, this is my Giro Account Number "
        + middleContent.querySelector('#giro-numb').innerText
        + " from " + window.location.href;
        window.location.href = link;
    }
}
document.getElementById('oneClickShare').addEventListener('click', shareGiroNum);

// START ACCESSING GIRO NUMBER
document.getElementById('oneClickStart').addEventListener('click', function () {
    accessAcc(event);
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