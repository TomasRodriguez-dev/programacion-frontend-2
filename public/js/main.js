fetch('../roles-opciones.json')
    .then(response => response.json())
    .then(data => {
        const select = document.getElementById('opciones');
        data.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.text = option.text;
            select.appendChild(opt);
        });
    });

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {};
    const elements = form.elements;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.type !== 'submit' && element.name) {
            formData[element.name] = element.value;
        }
    }
    console.log(formData);
    alert(JSON.stringify(formData, null, 2));
});