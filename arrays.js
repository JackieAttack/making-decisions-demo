
let backpack = []

backpack.push('Hatchet', 'Water')
backpack.unshift('Mac n cheese')
backpack.push('Sleeping bag')

let belt = backpack.splice(1, 1)

backpack.pop()
backpack.push('Sleeping bag')

let backpack2 = backpack.slice(1, 3)

backpack2.push('blanket', 'knife')

// for(i = 0; i < backpack.length; i++) {
//     console.log(backpack[i])
// }
// for(i = 0; i <= backpack2.length - 1; i++) {
//     console.log(backpack2[i])
// }
for(i = 0; i < 2; i++) {
    console.log(backpack[i])
    console.log(backpack2[i])
}