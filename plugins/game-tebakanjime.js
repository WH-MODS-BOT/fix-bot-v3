import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakanjime = conn.tebakanjime ? conn.tebakanjime : {}
    let id = m.chat
    if (id in conn.tebakanjime) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakanjime[id][0])
        throw false
    }
    let res = await fetch(`http://zekais-api.herokuapp.com/tebakanime`)
    let json = await res.json()
    let caption = `Siapakah nama dari gambar ini

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hani untuk hint
Bonus: ${poin} XP
    `.trim()
    conn.tebakanjime[id] = [
        await conn.sendButton(m.chat, caption, author, json.image, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakanjime[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*\n*Desk:* ${json.desc}`, author, null, [
                ['tebakanime', '/tebakanime']
            ], conn.tebakanjime[id][0])
            delete conn.tebakanjime[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i

export default handler

const buttons = [
    ['Hint', '/hani'],
    ['Nyerah', 'menyerah']
]