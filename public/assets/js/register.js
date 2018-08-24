//Stuff to do.
//(Bonus put in password input)

$(document).ready(function () {
    const usernameInput = $('#username-input')

    //placeholder for password input 
    //const passwordInput = $('#password-input')

    $('#register-button').on('click', function () {
        event.preventDefault();

        //add password input inside here when created.


        //checks if there is a value in the input box.
        if (!usernameInput.val().trim) {
            return;
        }


        let newUser = {
            name: usernameInput.val().trim()
            //add password input here as well.
        };

        registerUser(newUser);
    });


    function registerUser(User) {
        $.post('/api/users/', User, function (data, err) {
            //A really ghetto way to see if registering works!! 
            if (data.name === 'SequelizeUniqueConstraintError') { //This also works because nobody can get a username like this because of the 12 character length max
                $('#modal-content').css('color', 'red');
                $('#modal-title').html('ERROR!')
                $('#modal-body').html('Error creating name. <br>Name must be 1-12 characters long <br> Name may be already taken')
                $('#chat-link-button').hide()
                $('#modal').modal('toggle');
            }
            else {
                $('#modal-content').css('color', 'black');
                $('#modal-title').html('Regiser Successful!')
                $('#modal-body').html('You have successfully registered! Please Log in!')
                $('#chat-link-button').hide()
                $('#modal').modal('toggle');

                
            }
        });
    }

});