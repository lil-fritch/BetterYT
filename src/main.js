const cyrillicRegex = /[а-яА-ЯёЁіІїЇєЄ]/;

function hideCyrillicVideos(elements) {
    elements.forEach((element) => {
        try {
            const titleElement = element.querySelector('#video-title');
            if (titleElement) {
                const title = titleElement.textContent.trim();
                if (cyrillicRegex.test(title)) {

                    element.style.pointerEvents = 'none';
                    element.style.opacity = '0.5';
                    element.style.filter = 'grayscale(100%)';

                    console.log(`Hidden video: "${title}"`);
                }
            }
        } catch (error) {
            console.error('Error processing element:', element, error);
        }
    });
}

function checkAndHideElements() {
    const items = document.querySelectorAll('ytd-rich-item-renderer, ytd-compact-video-renderer');
    hideCyrillicVideos(items);
}

checkAndHideElements();

const observer = new MutationObserver((mutationsList) => {
    const newItems = [];
    mutationsList.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE &&
                (node.matches('ytd-rich-item-renderer') || node.matches('ytd-compact-video-renderer'))) {
                newItems.push(node);
            }
        });
    });

    if (newItems.length > 0) {
        hideCyrillicVideos(newItems);
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});
