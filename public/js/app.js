const render = function(kudos) {
    $('#kudos').empty();
    for(let i = 0; i < kudos.length; i++) {
        $('#kudos').append(`
        <div class="row">
            <h4>${kudos.title}</h4>
            <p>${kudos.body}</p>
        </div>`)
    }
}

$.get('/api/kudos') 
.then(function(data) {
    console.log(data);
    render(data);
})


const signUp = function(event) {
    event.preventDefault();
    const username = $('#username-input').val().trim();
    const password = $('#password-input').val().trim();

    $.post('/api/users', {username: username, password: password})
    .then(function(data){
        console.log(data);
    });
};

$('#signUpBtn').on('click', signUp);

const giveKudo = function(event) {
    event.preventDefault();
    const title = $('#kudoTitle').val().trim();
    const body = $('#kudoBody').val().trim();

    $.post('/api/kudos', {title: title, body: body})
    .then(function(data){
        console.log(data);
    });
};

$('#kudoBtn').on('click', giveKudo);