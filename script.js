const form=document.getElementById("item-form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const input_value=document.querySelector('input[type="text"]').value
    const sub=document.querySelector(".btn")
    if(e.key==="Enter"){
    }
    if(input_value=== ""){
        alert("le champ ne doit pas etre vide ")
    }
    else{
        ajouterItem(input_value)
    }})

    /*form.addEventListener("keypress",(e)=>{
       
        if(e.key==="Enter"){
            e.preventDefault()
        }
    })
    
   
}*/

//creaons la fonction 
function ajouterItem(item){
    const ul=document.querySelector("ul")
    const li=document.createElement("li")
    li.innerText=item
    const btn=document.createElement("button")
    btn.className="remove-item btn-link text-red"
    const i=document.createElement("i")
    i.className="fa-solid fa-xmark"
    console.log(ul,li,btn,i)
    btn.appendChild(i)
    li.appendChild(btn)
    ul.appendChild(li)
}

