import { EmbedBuilder } from "discord.js"
export default client => {
    client.on("messageCreate", async (message) => {
        if (message.content.toLocaleLowerCase() == "atahan") {
          message.reply("recep ivedik");
        }
      });
      
   client.on("messageCreate" , message => {
    if (message.content == "bot bilgi") {
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