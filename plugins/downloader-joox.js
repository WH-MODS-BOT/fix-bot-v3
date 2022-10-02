/*
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} akad`
    if (isUrl(text)) throw `uhm.. judul kak bukan pake url\n\ncontoh:\n${usedPrefix + command} akad`

    let res = await fetch(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let { song, singer, album, duration, date, lirik } = json.result.info
    let pesan = `
❖ Title : *${song}*
❖ Artists : *${singer}*
❖ Album : *${album}*
❖ Duration : *${duration}*
❖ Date : *${date}*
❖ Lirik : *${lirik}*
`.trim()
    conn.sendFile(m.chat, json.result.image, 'eror.jpg', pesan, m)
    conn.sendMessage(m.chat, { document: { url: json.result.audio[0].link}, mimetype: 'audio/mpeg', fileName: `${song}.mp3`}, {quoted: m})
}
handler.help = ['jooxp'].map(v => v + ' <judul>')
handler.tags = ['jooxmenu']
handler.command = /^(joox|jooxp)$/i

handler.limit = true

export default handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
*/
