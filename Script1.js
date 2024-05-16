
function randGen(num) {
    return Math.floor(Math.random() * num)
} 

let musicOpin = [];

const thoughts = {
    artist: ['BBL Drizzy', 'Kung fu Kenny', 'ColeWorld'],
    opinion: ['is something i’ve always loved', 'has really grown on me in recent times', 'progression has been interesting'],
    ranking: ['he’s Top 3', 'he’s one of the greatest of all time', 'he’s still underrated']
};

for (let ctgry in thoughts) {
    let ctgryIdx = randGen(thoughts[ctgry].length)

    switch(ctgry){
        case 'artist':
            musicOpin.push(`My favorite rapper is '${thoughts[ctgry][ctgryIdx]}'.`)
            break
        case 'opinion':
            musicOpin.push(`His music '${thoughts[ctgry][ctgryIdx]}'.`)
            break
        case 'ranking':
            musicOpin.push(`I think '${thoughts[ctgry][ctgryIdx]}'.`)
            break
        default:
            musicOpin.push('There is not enough information')    
    }
} 

function joinThoughts(Opin) {
    const joined = Opin.join('\n')

    console.log(joined)
}

joinThoughts(musicOpin)
