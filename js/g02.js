$("a").on('click',function(e){
    if (e.currentTarget.host != window.location.host) {
        var url = $(this).attr("href");
        ga('send', 'event', 'link', 'click', url);
        if (!(e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            setTimeout('document.location = "' + url + '"', 100);
        }
    }
});
