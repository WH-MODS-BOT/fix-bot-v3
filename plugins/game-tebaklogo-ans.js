/*
import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hani/i.test(m.quoted.text) || /.*hani/i.test(m.text))
        return !0
    this.tebaklogo = this.tebaklogo ? this.tebaklogo : {}
    if (!(id in this.tebaklogo))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttontebaklogo, m)
    if (m.quoted.id == this.tebaklogo[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebaklogo[id][3])
            delete this.tebaklogo[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebaklogo, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebaklogo[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.hasil.data.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebaklogo[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebaklogo[id][2]} XP`, author, null, buttontebaklogo, m)
            clearTimeout(this.tebaklogo[id][3])
            delete this.tebaklogo[id]
        } else if (similarity(m.text.toLowerCase(), json.hasil.data.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Hint', '/hani'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebaklogo = [
    ['tebaklogo', '/tebaklogo']
]
*/
