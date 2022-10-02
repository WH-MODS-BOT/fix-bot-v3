import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hsia/i.test(m.quoted.text) || /.*hsia/i.test(m.text))
        return !0
    this.tebaksiapa = this.tebaksiapa ? this.tebaksiapa : {}
    if (!(id in this.tebaksiapa))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttontebaksiapa, m)
    if (m.quoted.id == this.tebaksiapa[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebaksiapa[id][3])
            delete this.tebaksiapa[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebaksiapa, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebaksiapa[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebaksiapa[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebaksiapa[id][2]} XP`, author, null, buttontebaksiapa, m)
            clearTimeout(this.tebaksiapa[id][3])
            delete this.tebaksiapa[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Hint', '/hsia'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebaksiapa = [
    ['tebaksiapa', '/tebaksiapa']
]