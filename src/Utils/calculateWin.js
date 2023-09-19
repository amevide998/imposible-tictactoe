const calculateWin  = (square) => {
    const options = [...square]

    const array = [
        [0,1,2], [3,4,5],[6,7,8],
        [0,3,6], [1,4,7],[2,5,8],
        [0,4,8], [2,4,6]
    ]

    for (let i = 0; i < 8; i++) {
        const [a,b,c] = array[i]
        if(!options[a] || !options[b] || !options[c]) continue
        if ((options[a] === options[b]) && (options[b] === options[c])){
            return options[a]
        }
    }

    return false;

}

export default calculateWin;

