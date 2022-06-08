module.exports = {
    name: 'timeout',
    description: "makes people shut up",
    execute(message, args){
            let role = message.guild.roles.cache.find(r => r.name === "bot tester");
            if(message.member.permissions.has("Timeout_members")){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.timeout();
            message.channel.send('lol get timeout');
            message.channel.send('stay mad kid')    
        }else{
            message.channel.send('bruh you cant shut that person btw');
        }
    }
}  
}