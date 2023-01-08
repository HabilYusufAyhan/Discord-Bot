
export default {
    name: "ban",
    permission: "BanMembers",
    execute(message , args){
        message.guild.members.ban(args.toString())
        .then(message.reply('kullanıcı yasaklandı'))
        
    }
}