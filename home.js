document.querySelector('.contact-button').addEventListener('click', function(event) {
    event.preventDefault();
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo.classList.contains('contact-no-display')) {
        contactInfo.classList.remove('contact-no-display');
    }
});