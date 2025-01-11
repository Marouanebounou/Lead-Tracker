let myLeads = []
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.examplelead.com")
// myLeads = JSON.stringify(myLeads)
// console.log ( typeof myLeads)

const inputEl = document.getElementById("input-el")
const btnClick = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el") 

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)


// localStorage.setItem("myLeads", "www.examplelead.com")
// console.log(localStorage.getItem("myLeads"))

btnClick.addEventListener("click" , function(){
    // let valueEl = inputEl.value;
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    // console.log(localStorage.getItem("myLeads"))
})

function renderLeads(){
    // console.log(myLeads)
    let listItems = ""
    for(let i = 0 ; i < myLeads.length ; i++){ 
        //listItems += "<li> <a href=' " + myLeads[i] + "' target='_blank'>" + myLeads[i] + " " + "</a></li>"
        listItems += `
        
        <li>
            <a href=' ${+ myLeads[i]}' target='_blank'> ${myLeads[i]}</a>
        </li>
        `
        // console.log(myLeads[i])
    }
ulEl.innerHTML = listItems
}

 