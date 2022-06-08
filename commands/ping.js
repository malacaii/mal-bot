module.exports = {
    name: 'ping',
    description: "this is a ping command lol",
    execute(message, args){
        
       
        let role = message.guild.roles.cache.find(r => r.name === "noob overlord");

        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('you are pro you can kick people ggs rat');
        } else {
            message.channel.send('you are NOT pro you cant kick people');
        }

        if(message.member.permissions.has("BAN_MEMBERS")){
            message.channel.send('you are pro you can ban people ggs rat');
        } else {
            message.channel.send('you are NOT pro you cant ban people noobie');
        }
   
    }

}