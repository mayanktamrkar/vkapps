let input = document.getElementById('input')
let button = document.querySelectorAll('.button')
let bag = ""
let a = 0
let c = 0
console.log(button)
for (item of button) {
    item.addEventListener('click', (e) => {
        let b = e.target.innerText
        if (e.target.innerText == "c") {
            bag = ""
            input.value = ""
            a = 0
            c = 0
        } else if (e.target.innerText == "=") {
            let r = eval(bag)
            input.value = r
            a = 0
        } else {
            if (b == "+" || b == "-" || b == "*" || b == "/" || b == '%') {
                a++
            }
            if (b == '.') {
                c++
            }
            if (a > 1 || c > 1) {
                console.log("not")
            } else {
                let bt = e.target.innerText
                input.value = bt
                bag = bag + bt
                input.value = bag
            }
        }
    })
}