
                                                             //CODE WARS//




//1.
// Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

const t1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
const t2 = [1,1,1,1,1,1,10,1,1,1,1];

function findOdd(a) {
    const count = {}
    
    a.forEach(int => {
        if(count[int]) return count[int]++
        return count[int] = 1
    })
    
    for(prop in count) {
        if(count[prop] % 2 !== 0) return +prop;
    }

}



console.log(findOdd(t1));