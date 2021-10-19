module.exports =function(e = 'aormazaba@iesebre.com') {
    let email = e;
    var password = '1234';

    return {
        email: email,
        consoleme: function consoleme() {
            console.log('Usuari: ' + email)

        }
    }
}

