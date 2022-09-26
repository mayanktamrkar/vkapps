// chechk all values 
function validate() {

    let city = document.getElementById('city').value
    let city2 = document.getElementById('city2').value
    let city3 = document.getElementById('city3').value
    console.log(city, city2, city3)


    if (city == "") {
        if (city2 != "") {
            alert('succes')
            return true

        } else {
            alert("Pls fill values")
            return false

        }

    } else {
        alert('succes')
        return true

    }
}

function change1() {

    let s = document.getElementById('city2')

    s.removeAttribute("disabled");
}

function change2() {

    let g = document.getElementById('city3')
    let s = document.getElementById('city2')
    let c = document.getElementById('city')
    if (c.value != s.value) {
        g.removeAttribute("disabled");
        c.setAttribute("disabled", "disabled")



    } else {
        alert('insert different value')
        s.value = ""
    }

}

function change3() {
    let g = document.getElementById('city3')
    let s = document.getElementById('city2')
    let c = document.getElementById('city')
    if (g.value != s.value && s.value != c.value && g.value != c.value) {
        s.setAttribute("disabled", "disabled")
        g.setAttribute("disabled", "disabled")

    } else {
        alert('insert different value')
        g.value = ""
    }



}