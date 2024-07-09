let Btn = document.querySelector('.buttonSave')
Btn.addEventListener("click",transactions)


function transactions(e){
   // alert("O ti click")
   let type = document.getElementById('type').value 
   let name = document.getElementById('name').value
   let amount = document.getElementById('amount').value
       amount = parseFloat(amount)
       console.log(type,name,amount)
       e.preventDefault();
}