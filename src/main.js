const cyrillicRegex = /[а-яА-ЯёЁіІїЇєЄ]/;

function checkAndHideElements() {
    const items = document.querySelectorAll('ytd-rich-item-renderer');

    items.forEach((element) => {
        const titleElement = element.querySelector('#video-title');
        if (titleElement) {
            const title = titleElement.textContent;

            if (cyrillicRegex.test(title)) {
                element.style.display = 'none';
                console.log('Hidden:', title);
            }
        }
    });
}

checkAndHideElements();

const observer = new MutationObserver(() => {
    checkAndHideElements();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});
