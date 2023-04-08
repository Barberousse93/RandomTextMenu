const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
Taga = document.querySelectorAll('a')
Taga.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        let iteration = 0
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split('')
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index]
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join('')
            if (iteration >= event.target.dataset.value.length) clearInterval(interval)
            iteration += 1 / 3
        }, 50);
    })
});
