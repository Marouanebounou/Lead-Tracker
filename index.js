let myLeads = []
const inputEl = document.getElementById("input-el")
const btnClick = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el") 

btnClick.addEventListener("click" , function(){
    let valueEl = inputEl.value;
    myLeads.push(valueEl)
    inputEl.value = ""
    renderLeads()
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

 