const rpc = require('discord-rpc')
const rpcClient = new rpc.Client({
    transport: 'ipc'
})

class RPC {
    run() {
        rpcClient.on('ready', () => {
            rpcClient.request('SET_ACTIVITY', {
                pid: process.pid,
                activity: {
                    details: "Você está pronto para morrer?",
                    state: 'https://www.youtube.com/channel/UC4dd9p1audvw6o65qiuaLbA',
                    assets: {
                        large_image: "logo",
                        large_text: "Atomic"
                    },
                    buttons: [{
                        label: "Download",
                        url: "https://www.youtube.com/channel/UC4dd9p1audvw6o65qiuaLbA"
                    }]
                }
            })
        })

        rpcClient.login({
            clientId: '893619290341777450'
        }).catch(() => {}).then(() => console.log('RPC conectado!'))
    }
}

module.exports = RPC
