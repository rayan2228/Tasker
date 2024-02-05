

const a1 = [1, 2, 3, 4]
const a2 = [10, 1, 9, 8]
const a3 = [10, 1, 9, 8]
const a4 = [11, 2, 3, 4]

function check(a1, a2) {
    let ag1 = []
    ag1.push(a1, a2)
    let b = false
    for (let index = 0; index < ag1[0].length; index++) {
        for (let index = 0; index < ag1[1].length; index++) {
            if (index === ag1[1][index]) {
                b = true
                return true
            }
        }
        if (b) {
            break
        }
        return false
    }
}

console.log(check(a1, a2));
console.log(check(a3, a4));