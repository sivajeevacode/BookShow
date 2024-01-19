alert("Hi!, I'am Siva. Welcome To BookShow")
//select popbox,overlay,popicon
var popbox=document.querySelector('.popbox')
var overlay=document.querySelector('.overlay')
var popicon=document.querySelector('.pop')
//select close
var close=document.getElementById('close')

popicon.addEventListener('click',function(){
    popbox.style.display='block'
    overlay.style.display='block'
})
//close the popbox
close.addEventListener('click',function(event){
    event.preventDefault() //prevent the default page reload
    popbox.style.display='none'
    overlay.style.display='none'
    
})
//add the book
//select add,container,bookname,authorname,bookdetails
var add=document.getElementById('add')
var container=document.querySelector('.container')
var bookname=document.getElementById('bookname')
var authorname=document.getElementById('authorname')
var bookdetails=document.getElementById('bookdetails')

add.addEventListener('click',function(event){
    event.preventDefault()
    if(bookname.value==0)
    {
        bookname.style.border='1px solid red'
        bookname.classList.add("error")
        setTimeout(()=>{
            bookname.classList.remove("error")
            bookname.style.border='none'
        },1000)//every after 1000ms inside process will be remove
    }
    else
    {
        var div=document.createElement('div')
        div.setAttribute("class","bookcontainer")
        div.innerHTML=`<h1>${bookname.value}</h1>
        <h3>${authorname.value}</h3>
        <p>${bookdetails.value}</p>
        <button onclick='remo(event)'>Remove</button>`
        container.append(div) 

        //after add book, popbox not show
        popbox.style.display='none'
        overlay.style.display='none'
    }
})
//remove the book
function remo(event)
{
    event.preventDefault()
    event.target.parentElement.remove()
}
