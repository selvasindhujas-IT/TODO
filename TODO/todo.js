var ul=document.querySelector(".list1")
var input =document.querySelector(".inputbox")
var deletebutton =document.querySelector(".list")
input.addEventListener("keypress",function(event){
  if(event.key==="Enter"){
    add();}});
function add()
{
    if(input.value.trim()===""){
    alert("Please Enter a Task!");
    return;
  }
 var listitem =document.createElement("li")
 listitem.innerHTML=input.value + "<button class='list'  onclick='deleteitem(event)'> Delete </button>"
 ul.append(listitem)
 ul.className='list1'
 input.value="";
}
function deleteitem(event)
{
 event.target.parentElement.remove()
}
