exports.run = async (client, msg, args) => {
    msg.delete().catch(() => {})

    const target = await msg.guild.fetchMembers()

    target.pruneMembers(1).catch(() => {})
}