/*import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo : {}
    let id = m.chat
    if (id in conn.tebaklogo) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebaklogo[id][0])
        throw false
    }
    let res = await fetch(`https://api.akuari.my.id/games/tebakapp`)
    let json = await res.json()
    let caption = `Logo apakah ini?

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hlog untuk hint
Bonus: ${poin} XP
    `.trim()
    conn.tebaklogo[id] = [
        await conn.sendButton(m.chat, caption, author, json.hasil.data.image, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklogo[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.hasil.data.jawaban}*`, author, null, [
                ['tebaklogo', '/tebaklogo']
            ], conn.tebaklogo[id][0])
            delete conn.tebaklogo[id]
        }, timeout)
    ]
}
handler.help = ['tebaklogo']
handler.tags = ['game']
handler.command = /^tebaklogo/i

export default handler

const buttons = [
    ['Hint', '/hani'],
    ['Nyerah', 'menyerah']
]
*/
