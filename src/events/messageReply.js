export default client =>{
    client.on("messageCreate", async (message) => {
        if (message.content.toLocaleLowerCase() == "atahan") {
          message.reply("recep ivedik");
        }
      });
}