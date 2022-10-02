import fetch from 'node-fetch'
import { format } from 'util'

let handler = async (m, { text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
	if (!text) throw 'Masukkan url'
	let { href: url, origin } = new URL(text)
	let res = await fetch(url, { headers: { 'referer': origin }})
	if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) throw `Content-Length: ${res.headers.get('content-length')}`
	if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, url, ucapan, text, m, null, { fileName: ucapan, pageCount: fpagedoc, fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
	let txt = await res.buffer()
	try {
		txt = format(JSON.parse(txt + ''))
	} catch (e) {
		txt = txt + ''
	} finally {
		m.reply(txt.slice(0, 65536) + '')
	}
}
handler.help = ['fetch']
handler.tags = ['tools']
handler.alias = ['get', 'fetch']
handler.command = /^(fetch|get)$/i

export default handler
