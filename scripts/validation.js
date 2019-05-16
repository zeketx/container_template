document.getElementById('form_val').addEventListener('submit', register, false);

function register (event) {     
    
    // prevents submition without form being validated

    event.preventDefault();

    // grab form inputs

    var name = document.getElementById('_name').value;

    var email = document.getElementById('_email').value; 

    var message = document.getElementById('_message').value;

    // this is needed to submit form

    var form = document.getElementById('form_val');

    //  grab div 'error' message 

    //  var msg = document.getElementById('msg').value;

    if(name === '' || email === '' || message === '') {

        console.log('need more than five characters');

        // msg.innerHTML = ' need more than 5 characters;


     }  else {

           if(name.length < 5) {

                console.log('need more than 5 characters');

           } else {

            // position of @ symbol 

            var atpos = email.indexOf('@');

            // position of '.' in email

            var dotpos = email.indexOf('.');

            // logic 

            if(atpos < 1 || dotpos < atpos + 2 || dotpos +2 >= email.length)  {


                console.log('email logic is working');

                //email.innerHTML = 'Please use valid email address';

            } else {

                // message logic

                if(message.length < 15) {

                    console.log('message logic is woking');

                    // message.innerHTML = 'Needs to be a lengthier discription';

                } else {

                    // needed due to preventDefault();

                    form.submit();

                }
            }
        }
     }
}