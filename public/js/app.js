const renderKudos = function(kudos) {
    $('#kudos').empty();
    for(let i = 0; i < kudos.length; i++) {
        $('#kudos').append(`
        <div class="row">
            <h4>${kudos.title}</h4>
            <p>${kudos.body}</p>
        </div>`)
    }
}

const renderUsers = function(users) {
    $('#kudoReceiver').empty();
    $('#kudoSender').empty();
    for(let i = 0; i < users.length; i++) {
        $('#kudoReceiver').append(`
        <option value="${users[i].username}">${users[i].username}</option>`)
        $('#kudoSender').append(`
        <option value="${users[i].username}">${users[i].username}</option>`)
    }
}

$.get('/api/kudos') 
.then(function(data) {
    console.log(data);
    renderKudos(data);
})

$.get('/api/users')
.then(function(data) {
    console.log(data);
    renderUsers(data);
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