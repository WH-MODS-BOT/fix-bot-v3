import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hani/i.test(m.quoted.text) || /.*hani/i.test(m.text))
        return !0
    this.tebakanjime = this.tebakanjime ? this.tebakanjime : {}
    if (!(id in this.tebakanjime))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttontebakanjime, m)
    if (m.quoted.id == this.tebakanjime[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakanjime[id][3])
            delete this.tebakanjime[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakanjime, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakanjime[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakanjime[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebakanjime[id][2]} XP`, author, null, buttontebakanjime, m)
            clearTimeout(this.tebakanjime[id][3])
            delete this.tebakanjime[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold)
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

const buttontebakanjime = [
    ['tebakanime', '/tebakanime']
]
