let arr = [1, 2, 3, 4]

let score = Math.max(...Object.values(arr))

let pos = Object.values(arr).indexOf(score)


console.log(pos);