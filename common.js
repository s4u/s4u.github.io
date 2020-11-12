var script = document.createElement('script');
script.type = "text/javascript";
script.setAttribute("async", "true");
script.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=UA-46704610-1");
document.getElementsByTagName('head')[0].appendChild(script);
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('js', new Date());
gtag('config', 'UA-46704610-1', { 'anonymize_ip': true });
