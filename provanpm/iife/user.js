//IIFE
var user =(function(e = 'aormazaba@iesebre.com'){
    let email = e;
    var password = '1234';

    function consoleme() {
        console.log('Usuari: ' + email)
    }
    return {
        consoleme: consoleme,
        email: email
    }
})()
