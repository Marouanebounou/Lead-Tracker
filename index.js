let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const btnClick = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el") 

btnClick.addEventListener("click" , function(){
    let valueEl = inputEl.value;
    myLeads.push(valueEl)
})
// console.log(myLeads)
let listItems = ""
for(let i = 0 ; i < myLeads.length ; i++){ 
    listItems += "<li>" + myLeads[i] + " " + "</li>"
    // console.log(myLeads[i])
}
ulEl.innerHTML = listItems