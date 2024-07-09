let button = document.getElementById('submit')
button.addEventListener('click', function(){
    //alert("Hello")
    let task = document.getElementById('task')
     if(task.value == ''){
        alert("please Enter something into the Field")
     }
     else{
        //alert("Good")
        let li = document.createElement('li')
        li.className = "item"
        let UserText = document.createTextNode(task.value)
        li.appendChild(UserText)
        let ul = document.getElementById('ul')
        ul.appendChild(li)
     }
})