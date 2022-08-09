// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    notification_status = localStorage.getItem("notification_sound")
    if(notification_status == 'true'){
        $(this).uiSound({play: "cursor-click"});
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}