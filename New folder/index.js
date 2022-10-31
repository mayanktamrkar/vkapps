function addinputtext() {

    let tables = document.getElementById("tables")

    let trs = document.createElement("tr")
    let tds = document.createElement('td')
    tds.innerHTML = document.getElementById("inputv").value
    let b = document.createElement('button')
    b.innerHTML = "delete"

    tds.append(b)
    trs.append(tds)
    tables.appendChild(trs)
    document.getElementById("inputv").value = ""



}