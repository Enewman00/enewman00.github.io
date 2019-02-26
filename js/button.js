function sendMail() {
    var link = "mailto:ethan.newman@utdallas.edu"
    //         + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("Contact from personal site")
             + "&body=" + escape(document.getElementById('message-contents').value)
    ;

    window.location.href = link;
}