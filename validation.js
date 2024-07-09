let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    validateForm()
})

function validateForm(){
    //console.log('working')
    let username = document.getElementById('username')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let password2 = document.getElementById('password2')

    if (username.value === '')
        {
            setError(username, 'Please Enter username required');
        }
        else
        {
            setSuccess(username);
        }
}

function setError(element, message){
    const formGroup = element.parentElement;
    const small = formGroup.querySlector('small');
    const faExclamation = formGroup.querySlector('.fa-exclamation-circle');
    const faCheck = formGroup.querySlector('.fa-check-circle');
}
function setSuccess(element){

}