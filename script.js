let input=document.querySelector('.txt')
let ulElem=document.querySelector('.list')
let iElem=document.querySelectorAll('.fa')
let formElem=document.querySelector('.form')

formElem.addEventListener("submit", function (event) {
    event.preventDefault();
});

function addli(newresult){

    let liElem=document.createElement('li')
    liElem.classList.add('li-item')

    let spanElem=document.createElement('span')
    spanElem.innerHTML=newresult

    let iElem=document.createElement('i')
    iElem.className='fa fa-trash-o delete'

    iElem.addEventListener('click',function(event){
        event.target.parentElement.remove();
    })

    liElem.append(spanElem , iElem)
    ulElem.append(liElem)
    
}

input.addEventListener('keydown',function(event){
    let  result=event.target.value.trim()
    if(event.keyCode===13){
        if(result){
            input.value=''
            addli(result)
        }else{
            alert("input is null")
        }
    } 
})

iElem.forEach(function(i){
    i.addEventListener('click',function(event){
        i.parentElement.remove()
    })
})