import { EmbedBuilder } from "discord.js"
export default client => {
   
      const log = process.env.PREFIX
      console.log(log);
   client.on("messageCreate" , message => {
    if (message.content.startsWith(log) == false) return 
     const args = message.content.slice(1).trim().split(/ +/)
     const commandName = args.shift().toLowerCase()
     const command = client.commands.get(commandName)
     if (!command) {
      return
     }
 
     //yetki kontrol
     console.log(command,args);
     if (command.permission && message.member.permissions.has(command.permission) == false) {
       
       message.reply(`bu komutu kullanmak için \`${command.permission}\` yetkisine sahip olman gerekiyor`)
       return
     }

     try{
      command.execute(message , args)
     }catch(e){
      console.error(e)
      message.reply('hata var')
     }
   })

}