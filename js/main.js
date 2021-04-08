var prodactName, prodactPrice, prodactCata, prodactDes, add, TRS, arrStor, valPN, valPP, valPC, valPD, pSearch, indexer;

prodactName = document.getElementById('prodactName');
prodactPrice = document.getElementById('prodactPrice');
prodactCata = document.getElementById('prodactCata');
prodactDes = document.getElementById('prodactDes');
add = document.getElementById('add');
TRS = document.getElementById('TRS');
pSearch = document.querySelector('#prodactSersh');

indexer = document.querySelector('#index');


if (localStorage.getItem("myStoreStorage") == null) {
    arrStor = [];
} else {
    arrStor = JSON.parse(localStorage.getItem("myStoreStorage"));
    showT();
}

/* --------- main function add product -------- */
function addProdact() {


    // dont add out sid of function for updete evry time
    valPN = prodactName.value;
    valPP = prodactPrice.value;
    valPC = prodactCata.value;
    valPD = prodactDes.value;


    // regular exeprtions ^ [] $ . | () {} + *

    var regExName = /^[A-Za-z]*/
    var regExPrice = /^[0-9]{6}$/

    display()
    // if (regExName.test(valPN) && regExPrice.test(valPP)) {

    // }else{
    //     alert('plez enter valed name')
    // }
    // pushing the opject
    localStorage.setItem("myStoreStorage", JSON.stringify(arrStor))

    /* -------------- showing tapole -------------- */
    showT()



    /* ------ Reset Value ----- */
    cleraVal()
}

// pushing the opject
function display() {

    arrStor.push(
        {
            name: valPN,
            price: valPP,
            categorey: valPC,
            descreption: valPD,
        }
    )

}

// clearing value of input
function cleraVal() {
    valPN = prodactName.value = "";
    valPP = prodactPrice.value = "";
    valPC = prodactCata.value = "";
    valPD = prodactDes.value = "";
}

function showT() {
    var newTR = ``;
    for (var i = 0; i < arrStor.length; i++) {
        newTR += `<tr>
        <th scope="row">${i+1 }</th>
        <td>${arrStor[i].name} </td>
        <td>${arrStor[i].price}</td>
        <td>${arrStor[i].categorey}</td>
        <td>${arrStor[i].descreption}</td>
        <td><button class="btn btn-danger" onclick="delet(${i})">Delet</button></td>
        <td><button class="btn btn-primary" onclick="update(${i})">Update</button></td>
        </tr>`
    }
    TRS.innerHTML = newTR
    localStorage.setItem("myStoreStorage", JSON.stringify(arrStor))
    indexer.textContent = `${arrStor.length + 1}`
}

function delet(i) {
    if (confirm("Are you suer!")) {

        arrStor.splice(i, 1)

        showT()



    }
}


function search(val) {
    var sersharr = []
    for (let i = 0; i < arrStor.length; i++) {
        if (arrStor[i].name.toLowerCase().includes(val)) {
            arrStor[i]['index'] = i

            sersharr.push(arrStor[i])
        }
    }
    console.log(sersharr);

    var newTR = ``;
    for (var i = 0; i < sersharr.length; i++) {
        newTR += `<tr>
           <th scope="row">${sersharr[i].index+1}</th>
           <td>${sersharr[i].name} </td>
           <td>${sersharr[i].price}</td>
           <td>${sersharr[i].categorey}</td>
           <td>${sersharr[i].descreption}</td>
           <td><button class="btn btn-danger" onclick="delet(${sersharr[i].index})">Delet</button></td>
           <td><button class="btn btn-primary" onclick="update(${sersharr.index})">Update</button></td>
           </tr>`
    }
    TRS.innerHTML = newTR

}
add.onclick = addProdact;


/* ------------------------ */
/*      MY HEROOOOOOOO      */
/* ------------------------ */

var protector;

/* ------------------------ */
/*      MY HEROOOOOOOO      */
/* ------------------------ */


function update(index) {

    inOR(index)
    showT()
    protector = index
}
function inOR(index) {
    if (prodactName.value == "" && prodactPrice.value == "" && prodactCata.value == "" && prodactDes.value == "") {
        setval(index)
        console.log("get values from array if imptey")

    }
    else if (prodactName.value != arrStor[index].name || prodactPrice.value != arrStor[index].price || prodactCata.value != arrStor[index].categorey || prodactDes.value != arrStor[index].descreption) {

        if (protector == index) {

            arrStor[index].name = prodactName.value
            arrStor[index].price = prodactPrice.value
            arrStor[index].categorey = prodactCata.value
            arrStor[index].descreption = prodactDes.value
            console.log("shinge is ocuesr");
        } else {
            setval(index)
            console.log("not the same index");
        }

    } else {

        console.log("clear")
        cleraVal()

    }
}



function setval(index) {
    indexer.textContent = index + 1
    prodactName.value = arrStor[index].name;
    prodactPrice.value = arrStor[index].price;
    prodactCata.value = arrStor[index].categorey;
    prodactDes.value = arrStor[index].descreption;
}

