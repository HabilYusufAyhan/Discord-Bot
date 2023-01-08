export default {
    name: "at",
    permission: "KickMembers",
    execute(message , args){
        if (!args) {
            message.reply('atılacak kişinin id sini yazın')
            return
        }
        console.log(args[0]);
        message.guild.members.kick(args.toString())
        .then(message.reply('kullanıcı atıldı'))
        
    }
}