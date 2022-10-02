import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
let imgr = flaaa.getRandom()

    conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
    let id = m.chat
    if (id in conn.tebakjenaka) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakjenaka[id][0])
        throw false
    }
    let res = await fetch('https://anabotofc.herokuapp.com/api/kuis/siapaaku?apikey=AnaBot')
    let json = await res.json()
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hjen untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakjenaka[id] = [
        await conn.sendButton(m.chat, caption, author, `${imgr + command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakjenaka[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['tebakjenaka', '/tebakjenaka']
            ], conn.tebakjenaka[id][0])
            delete conn.tebakjenaka[id]
        }, timeout)
    ]
}
handler.help = ['tebakjenaka']
handler.tags = ['game']
handler.command = /^tebakjenaka/i

export default handler

const buttons = [
    ['Hint', '/hjen'],
    ['Nyerah', 'menyerah']
]