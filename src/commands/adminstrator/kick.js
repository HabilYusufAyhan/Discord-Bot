export default {
    name: "at",
    permission: "KickMembers",
    execute(message , args){
        
        console.log(args[0]);
        message.guild.members.kick(args.toString())
        .then(message.reply('kullanıcı atıldı'))
        .then((msg) => {
            setTimeout(() => msg.delete(), 5000);
          })
    }
}