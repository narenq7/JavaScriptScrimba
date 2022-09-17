let myLeads = [];

const inputEl = document.getElementById("input-el");
const saveButton = document.getElementById("saveinput-button");
const ulEl = document.getElementById("ul-el");
const deleteButton = document.getElementById("delete-button");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeadsList"))
const tabButton = document.getElementById("tab-button");



if(leadsFromLocalStorage)
{
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}


tabButton.addEventListener("click",function ()
{

  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
});


})


deleteButton.addEventListener("dblclick",function ()
{
localStorage.clear();
myLeads = [];
render(myLeads);
}
)

saveButton.addEventListener("click", function (){
  
  let content = inputEl.value;
  if (!content)
  {
    return;
  }
  myLeads.push(content);
  inputEl.value  = "";
  //console.log(myLeads)
  localStorage.setItem("myLeads",JSON.stringify(myLeads))

  render(myLeads);
})




function render(leads)
{

    let listItems = ""
    for(let i=0;i<leads.length;i++)
    {
      // lets use template strings. with back tick
      let anchortag = 
      `
      <li>
      <a href='${leads[i]}' target = '_blank'>
       Visit ${leads[i]}
       </a> 
       </li>
      `
      listItems += anchortag;
    }
    ulEl.innerHTML = listItems;
}




/* 
ALTERNATE WAY TO CREATE ELEMENTS INSTEAD OF INNER HTML
li stands for list element. these are part of unordered list
  let liEl = document.createElement("li");
  liEl.textContent = myLeads[i];
  ulEl.append(liEl);
  */