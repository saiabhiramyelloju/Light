const lightSwitch = document.getElementById('lightSwitch');
const bulb = document.querySelector('.bulb');

lightSwitch.addEventListener('change', function() {
    if (lightSwitch.checked) {
        bulb.style.backgroundColor = 'yellow';
        bulb.style.boxShadow = '0 0 20px yellow';
    } else {
        bulb.style.backgroundColor = 'gray';
        bulb.style.boxShadow = 'none';
    }
});
