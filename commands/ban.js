module.exports = {
    name: 'ban',
    description: "it bans people",
    execute(message, args){
        let role = message.guild.roles.cache.find(r => r.name === "bot tester");
            if(message.member.permissions.has("KICK_MEMBERS")){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send('haha they got noobed');    
        }else{
            message.channel.send('you cant ban that member idiot');
        }
    }
}
}