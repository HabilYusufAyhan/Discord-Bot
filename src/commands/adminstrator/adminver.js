export default {
    name: "rolver",
    permission: "ADMINISTRATOR",
    execute(message , args){
        var rolverme = args[0].toString();
        var rol = args[1];
        console.log(rol);
        console.log(rolverme);
        rolverme.roles.add([`${rol}`])
        .then(message.reply('rol verildi'))
        
    }
}