document.getElementsByTagName('header')[0].innerHTML = fetch('header.html').then(response => response.text());
document.getElementsByTagName('footer')[0].innerHTML = fetch('footer.html').then(response => response.text());