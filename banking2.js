let depositBtn = document.getElementById('deposit-btn')
depositBtn.addEventListener('click', function(){
   // alert("Working")
   let depositInput = document.getElementById('deposit-input').value
   //alert(depositInput)
   if(depositInput == ''){
    alert("Please Enter the Deposit Amount")
   }
   else{ 
    //alert(depositInput)
    const depositText = document.getElementById("deposit-text");
    const currrentDepositText = depositText.innerText;

    let wale = parseFloat(currrentDepositText) + parseFloat(depositInput);
        wale = wale.toFixed(2)
        depositText.innerText = wale 
        depositInput.value = "";

    const balanceText = document.getElementById("balance-text");
    const updatedBalance = (parseFloat(wale) + parseFloat(balanceText.innerText)).toFixed(2)
    balanceText.innerText = updatedBalance;

   }
})