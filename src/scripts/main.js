document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.categories');
    const burgerIcon = document.querySelector('.navbar-toggler');
    const burgerClose = document.querySelector('.categories__buttons--close');
    function openMenu() {
        burgerMenu.style.right = '0';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        burgerMenu.style.right = '-350px';
        document.body.style.overflow = 'auto';
    }

    burgerIcon.addEventListener('click', openMenu);
    burgerClose.addEventListener('click', closeMenu);


    const promocodeInput = document.getElementById("promocode");
    const copyButton = document.getElementById("copyButton");

    copyButton.addEventListener("click", function () {
        promocodeInput.select();
        promocodeInput.setSelectionRange(0, 99999);

        document.execCommand("copy");

        window.getSelection().removeAllRanges();

        copyButton.textContent = "COPIED!";
    });
});
