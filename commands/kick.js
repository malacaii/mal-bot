module.exports = {
    name: 'kick',
    description: "it kicks people",
    execute(message, args){
            let role = message.guild.roles.cache.find(r => r.name === "bot tester");
            if(message.member.permissions.has("KICK_MEMBERS")){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send('haha imagine getting kicked noob');    
        }else{
            message.channel.send('you cant kick that member idiot');
        }
    }
}  
}