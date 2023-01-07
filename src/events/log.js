import { EmbedBuilder } from "discord.js"
export default client => {
   
      const log = process.env.PREFIX
      console.log(log);
   client.on("messageCreate" , message => {
    if (message.content == log) {
        const bilgi = new EmbedBuilder()
         .setAuthor({ name: "Bot Bilgilendirme" , iconURL: client.user.displayAvatarURL()})
         .setDescription("GYBK-GDSC bot , sunucunun düzenini ve işleyişini sağlamak için oluşturulmuş bir discord botudur")
         .setColor("#749ddb")
         .setFooter({ text: "KraTOAST/Habil Yusuf Ayhan tarafından yazılmıştır"})
         .setThumbnail(client.user.displayAvatarURL())
         .setTimestamp(Date.now())
         message.channel.send({content:"Bilgilerim Şöyle", embeds: [bilgi]})
    }
   })

}