let myLeads = []
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.examplelead.com")
// myLeads = JSON.stringify(myLeads)
// console.log ( typeof myLeads)

const inputEl = document.getElementById("input-el")
const btnClick = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el") 
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabsBtn = document.getElementById("tab-btn")
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
tabsBtn.addEventListener("click", function(){
    chrome.tabs.query({active : true, currentWindow : true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})
function render(leads){
    let listItems = ""
    for(let i = 0 ; i < leads.length ; i++){ 
        listItems += `
        
        <li>
            <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
        </li>
        `
        // console.log(myLeads[i])
    }

ulEl.innerHTML = listItems
}
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)   
})
btnClick.addEventListener("click" , function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

