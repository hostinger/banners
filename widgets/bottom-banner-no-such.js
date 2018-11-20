(function(){
    var ifrm = document.createElement("iframe");
    var id = 'hgr-promo-widget';
    ifrm.setAttribute("id", id);
    ifrm.setAttribute("src", "https://cdn.hostinger.com/widgets/bottom_banner_000_no_such.html");
    ifrm.setAttribute("allowfullscreen", true);
    ifrm.setAttribute("frameborder", 0);
    ifrm.style.cssText = "z-index: 2147483000 !important;position: fixed !important;bottom: 0; width: 100%;!important;";
    document.body.appendChild(ifrm);
    setInterval(function() {
        if (ifrm.contentWindow.document.body.scrollHeight !== ifrm.clientHeight) {
            ifrm.style.height = ifrm.contentWindow.document.body.scrollHeight + 'px';
            document.body.style.paddingBottom = ifrm.style.height;
        }
    }, 1000);

})();