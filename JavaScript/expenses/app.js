let expensesFormContainer=document.getElementById("ex-form")
fetch("./components/expenses-form.html").then((response) =>  response.text())
     .then((html)=>{
        expensesFormContainer.innerHTML=html
     });
let expensesListContainer=document.getElementById("ex-list")

     fetch("./components/expenses-list.html").then((response) =>  response.text())
          .then((html)=>{
             expensesListContainer.innerHTML=html
          });
     var form=document.getElementById("ex-form");
      form.addEventListener("submit",(event)=>{
         event.preventDefault();
      })