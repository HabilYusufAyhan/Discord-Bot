import { EmbedBuilder } from "discord.js"

export default {
    name: "ping",
    execute(message){
        const discord_ping = message.client.ws.ping
        const bot_ping = Date.now() - message.createdTimestamp
        const log = new EmbedBuilder()
        //.setAuthor({ name: "Bot Bilgilendirme" , iconURL: client.user.displayAvatarURL()})
        //.setDescription("GYBK-GDSC bot , sunucunun düzenini ve işleyişini sağlamak için oluşturulmuş bir discord botudur")
        .addFields(
            { name: "Discord Ping" , value: discord_ping.toString(), inline: true},
            { name: "Bot Ping" , value: bot_ping.toString() , inline: true} 
        )
        .setColor("#749ddb")
       // .setFooter({ text: "KraTOAST/Habil Yusuf Ayhan tarafından yazılmıştır"})
      //  .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp(Date.now())
        message.channel.send({content:"ping değerleri şöyle" , embeds: [log]})
    }

}