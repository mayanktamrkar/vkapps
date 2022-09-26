let input = document.getElementById('input')
let button = document.querySelectorAll('.button')
let op = document.querySelectorAll('.op')
let bag = ""
let b = 0

for (item of button) {
    item.addEventListener('click', (e) => {
        let bb = e.target.innerText
        if (e.target.innerText == "c") {
            bag = ""
            input.value = ""
            b = 0

        } else if (e.target.innerText == "=") {
            let r = eval(bag)
            input.value = r
            bag = r
            b = 0

        } else {

            bag = bag + bb
            b = 0
            input.value = bag

        }
    })
}

for (i of op) {
    i.addEventListener('click', (e) => {
        let c = e.target.innerText

        if (b != c) {
            b = c

            bag = bag + c
            input.value = bag
        } else {
            alert('not enter same opertor')
        }



    })
}