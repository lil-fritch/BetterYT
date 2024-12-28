document.addEventListener('contextmenu', (event) => event.preventDefault());

const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        console.log('Switched to: Hide');
    } else {
        console.log('Switched to: Remove');
    }
});
