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
}

document.querySelectorAll(".approval.modal-wrapper .icon-close")[0].onclick = function closeApproval() {
    var approvalModal = document.getElementById("approval-modal");
    approvalModal.style.display = "none";
}

// SIGN-UP NAME BOX
document.getElementById("name-signup").onfocus = function () {
    document.querySelector(".icon-profileuser").style.color = "#4286f5";
    document.querySelector(".name-box .input-box").style.border = "1px solid #4286f5";
}
document.getElementById("name-signup").onblur = function () {
    document.querySelector(".icon-profileuser").style.color = "#888888";
    document.querySelector(".name-box .input-box").style.border = "1px solid #dddddd";
}

// SIGN-UP EMAIL BOX
document.getElementById("email-signup").onfocus = function () {
    document.querySelector(".icon-kotaksurat").style.color = "#4286f5";
    document.querySelector(".email-box .input-box").style.border = "1px solid #4286f5";
}
document.getElementById("email-signup").onblur = function () {
    document.querySelector(".icon-kotaksurat").style.color = "#888888";
    document.querySelector(".email-box .input-box").style.border = "1px solid #dddddd";
}

// SIGN-UP COMPANY BOX
document.getElementById("company-signup").onfocus = function () {
    document.querySelector(".icon-home").style.color = "#4286f5";
    document.querySelector(".company-box .input-box").style.border = "1px solid #4286f5";
}
document.getElementById("company-signup").onblur = function () {
    document.querySelector(".icon-home").style.color = "#888888";
    document.querySelector(".company-box .input-box").style.border = "1px solid #dddddd";
}

// SIGN-UP NPWP BOX
document.getElementById("npwp-signup").onfocus = function () {
    document.querySelector(".icon-rekening").style.color = "#4286f5";
    document.querySelector(".npwp-box .input-box").style.border = "1px solid #4286f5";
}
document.getElementById("npwp-signup").onblur = function () {
    document.querySelector(".icon-rekening").style.color = "#888888";
    document.querySelector(".npwp-box .input-box").style.border = "1px solid #dddddd";
}

// SIGN-UP BOSS BOX
document.getElementById("boss-signup").onfocus = function () {
    document.querySelector(".boss-box .icon-profileuser").style.color = "#4286f5";
    document.querySelector(".boss-box .input-box").style.border = "1px solid #4286f5";
}
document.getElementById("boss-signup").onblur = function () {
    document.querySelector(".boss-box .icon-profileuser").style.color = "#888888";
    document.querySelector(".boss-box .input-box").style.border = "1px solid #dddddd";
}

// SIGN-UP BOSSEM BOX
document.getElementById("bossem-signup").onfocus = function () {
    document.querySelector(".bossem-box .icon-kotaksurat").style.color = "#4286f5";
    document.querySelector(".bossem-box .input-box").style.border = "1px solid #4286f5";
}
document.getElementById("bossem-signup").onblur = function () {
    document.querySelector(".bossem-box .icon-kotaksurat").style.color = "#888888";
    document.querySelector(".bossem-box .input-box").style.border = "1px solid #dddddd";
}

// ERROR MESSAGE
