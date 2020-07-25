function getRandomWord() {
    
    const words = ['pizza', 'tetris', 'pilot', 'piano', 'joke', 'bear'];

    return words[Math.floor(Math.random()*words.length)]
}

export {getRandomWord};