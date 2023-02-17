const input = document.querySelector('#tagInput');
const tagForm = document.querySelector('#tagForm');
const output = document.querySelector('.tags');
const max = document.querySelector('.max');

function outputTag() {
    const tag = `
        <span class="tag">
        <b>${input.value}</b>
         <span class="material-icons-outlined remove-btn">
        close
        </span>
        </span>
    
    `;

    output.innerHTML += tag;

    input.value = "";
}
//Add a submit event to the form
tagForm.addEventListener('submit', e => {

    if (input.value === "") { //Prevent default submit behavior

        e.preventDefault();

    }
    else if (output.children.length >= 4) { //limit tags 5
        outputTag();
        
        input.disabled = true;

        input.placeholder = "Max number tags reached!"; //change placeholder text for reach the limit
    }
    else{
        outputTag();

    }

    e.preventDefault();

});

input.addEventListener('input', e => {

    const rmvWhitescape = input.value.replace(/\s/g, '');

    input.value = rmvWhitescape.replace(/\s[^a-zA-Z0-9]/g, "");
    //remove  form special characters
});

window.addEventListener('click', e => {
    if (e.target.classList.contains('remove-btn')){
        e.target.parentElement.remove();

        input.disabled = false;

        input.placeholder = "Add a tag..."
    }

});





