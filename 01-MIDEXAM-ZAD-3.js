function exam(array){
    let twins = array.shift().split(' ')
    let row = array.shift()
    let moves = 1;

    while(row !== 'end'){
        let commands = row.split(' ')
        let idx1 = Number(commands[0]) 
        let idx2 = Number(commands[1])

        if((idx1 === idx2) || (idx1 < 0 || idx1 > twins.length -1) || (idx2 < 0 || idx2 > twins.length -1)){
            let middleSequence = twins.length / 2;
            twins.splice(middleSequence, 0, `-${moves}a`, `-${moves}a`)
            console.log("Invalid input! Adding additional elements to the board");
        }else if(twins[idx1] === twins[idx2]){
            console.log(`Congrats! You have found matching elements - ${twins[idx1]}!`);

            let element = twins[idx1];
            twins = twins.filter(e => e !== element)
            
        }else if(twins[idx1] !== twins[idx2]){
            console.log("Try again!");
        }

        if(twins.length === 0){
            console.log(`You have won in ${moves} turns!`);
            return;
        }

        moves++
        row = array.shift()
    }
    if(twins.length > 0){
        console.log("Sorry you lose :(");
        console.log(`${twins.join(' ')}`);
    }
}
exam
([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
])
