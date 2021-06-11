const neid = document.querySelector('#eid');
const npass = document.querySelector('#pass');
const submit = document.querySelector('#btn');
btn.addEventListener( 'click', function(event) {
    event.preventDefault();
    console.log ("email:",neid.value);
    console.log ("pass:",npass.value);
})
