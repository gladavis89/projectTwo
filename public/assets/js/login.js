//Stuff to do.
//Make sure no one else can log in as user as long as they are there.
$(function () {
    $('#login-button').on('click', function () {
        loginUser();
    });
    
    //Function to Log in the user.
    function loginUser() {
        const username = $('#username-input').val();    
        //checks to see if the login name is inside the database.
        $.get('/api/users/' + username, function (data, err) {
            if (!data || username === '') {
                $('.modal-title').html('ERROR!')
                $('.modal-content').css('color', 'red');
                $('.modal-body').html('Please input a valid username, or please register.')
                $('#chat-link-button').hide()
                $('#modal').modal('toggle')

            }
            else {
                $('.modal-content').css('color', 'black');
                $('.modal-title').html('You logged in!')
                $('.modal-body').html('Go ahead and chat!')
                $('#chat-link-button').show()
                $('#close').hide();
                $('#modal').modal('toggle')

                $('#login').hide();
                $('#chat-main').show();


                $('#username').text(username)
                return username;
            }
        });

    }

});

