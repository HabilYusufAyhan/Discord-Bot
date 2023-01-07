import {
    EmbedBuilder,
  } from "discord.js";
export default client => {
    client.on("messageCreate", async (message) => {
        var message2 = message.content.split(" ", 2);
        var deletingnumber = message2[1];
        if (deletingnumber === undefined) {
          deletingnumber = 2;
        }
        if (message.content.lastIndexOf("/sil") != -1) {
          message.channel.bulkDelete(deletingnumber, true);
        }
      
        var deleting = [
          "siktir",
          "amına koyduğum",
          "orospu çocuğu",
          "ibine",
          "ibne",
          "piç",
        ];
      
        for (let index = 0; index < deleting.length; index++) {
          if (
            message.content.toLocaleLowerCase().lastIndexOf(deleting[index]) != -1 &&
            message.channelId != "1060183015613005924"
          ) {
            var id = message.member.id;
            var name = message.member.user.username;
            var content = message.content;
            let deletelog = message.guild.channels.cache.find(
              (channel) => channel.name === "ben-mesaj-sildim-ha"
            );
            let rolelog = message.guild.channels.cache.find(
              (channel) => channel.name === "ben-rol-verdim-ha"
            );
      
            message.member.roles.add(["1060308799350636585"]);
      
            const mesajsilme = new EmbedBuilder()
              .setColor(0xff0000)
              .setTitle("Mesaj Silme")
              .setTimestamp(Date.now())
              .setDescription(
                id +
                  " id sine sahip " +
                  name +
                  " isimli kullanıcının mesajını sildim Mesaj:" +
                  '"' +
                  content +
                  '"'
              );
              
      
            deletelog.send({ embeds: [mesajsilme] });
      
            const rolverme = new EmbedBuilder()
              .setColor(0x808080)
              .setTitle("Rol Verme")
              .setDescription(
                id +
                  " id sine sahip " +
                  name +
                  " isimli kullanıcısına uyarı rolünü verdim"
              );
      
            rolelog.send({ embeds: [rolverme] });
            message.delete(this);
          }
        }
      });
}