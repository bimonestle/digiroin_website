var accordionHead = document.getElementsByClassName('accordion-head');
var i;
for (let i = 0; i < accordionHead.length; i++) {
    accordionHead[i].addEventListener("click", function () {
        var accordionContent = this.nextElementSibling;
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            accordionContent.style.paddingBottom = null;
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            accordionContent.style.paddingBottom = 1 + "em";
        }
    })
}