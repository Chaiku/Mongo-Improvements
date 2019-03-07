$(document).ready(function() {



const renderKudos = function(kudos) {
    $('#kudos').empty();
    for(let i = 0; i < kudos.length; i++) {
        $('#kudos').append(`
    <div class="row kudoDisp">
        <div class="row">
            <div class="col-sm-6 toDisp">
                <h4>To: ${kudos[i].to}</h4>
            </div>
            <div class="col-sm-6 fromDisp">
                <h6>From: ${kudos[i].from}</h6>
            </div>
        </div>
        <div class="row bodyDisp">
            <p>${kudos[i].body}<p>
        </div>
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

$.get('/api/kudo') 
.then(function(data) {
    console.log(data);
    renderKudos(data);
})

$.get('/api/user')
.then(function(data) {
    console.log(data);
    renderUsers(data);
})


// const signUp = function(event) {
//     event.preventDefault();
//     const username = $('#username-input').val().trim();
//     const password = $('#password-input').val().trim();

//     $.post('/api/user', {username: username})
//     .then(function(data){
//         console.log(data);
//     });
// };

// $('#signUpBtn').on('click', signUp);

const giveKudo = function(event) {
    event.preventDefault();
    const body = $('#kudoBody').val().trim();
    const to = $('#kudoReceiver').val().trim();
    const from = $('#kudoSender').val().trim();

    $.post('/api/kudo', {body: body, to: to, from: from})
    .then(function(data){
        console.log(data);
    });

    $.get('/api/kudo')
    .then(function(data) {
        renderKudos(data);
    })


};

$('#kudoBtn').on('click', giveKudo);

})
