let whetherFormContainer = document.getElementById("wh-form");
let whetherTableContainer = document.getElementById("wh-table");

fetch('./component/whether-form.html').then((response) => response.text())
    .then((html) => {
        whetherFormContainer.innerHTML = html
    })

fetch('./component/whether-table.html').then((response) => response.text())
    .then((html) => {
        whetherTableContainer.innerHTML = html
    })
let i=1;
    let form= document.getElementById("wh-form")
    form.addEventListener("submit",(event) => {
    try {
        event.preventDefault();
        let addTable=document.getElementById("table");
        let row=addTable.insertRow(-1);
        let no=row.insertCell(0);
        let countryName=row.insertCell(1);
        let action=row.insertCell(2);
        let action1=row.insertCell(3)
        no.innerHTML=i++;
        countryName.innerHTML=document.getElementById("wh-name").value;
        action.innerHTML="<input type='submit' id='Edit'>"
        action1.innerHTML="<input type='submit' id='Delete'>"


    }
    catch{
        console.log("error");
    }
})
