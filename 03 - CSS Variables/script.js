const imagem = document.querySelector('img');
const controller = document.querySelector('.controls')
function updateInput(event) {
        let sufixo = event.srcElement.dataset.sizing || '';
        let name = event.srcElement.name;
        document.documentElement.style.setProperty(`--${name}`, `${event.srcElement.value + sufixo}`)

}

controller.addEventListener('change', updateInput)