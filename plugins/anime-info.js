/*
import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*Masukan Judul Anime Yang Ingin Kamu Cari !*`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))

if (!res.ok) throw 'Not Found'
let json = await res.json()

	let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw 'Not Found'
let html = await res2.text()
let animeingfo = `*${htki} ANIME INFO ${htka}*
📚 TITLE: ${title}
🎆 EPISODE: ${episodes}
✉️ TRANSISI: ${type}

🌟 RATING: ${rated}
🧮 SCORE: ${score}
👥 MEMBERS: ${members}
💬 SINOPSIS: ${synopsis}
🎆 LINK: ${url}
`
//conn.sendHydrated(m.chat, `*${htki} ANIME INFO ${htka}*`, animeingfo, image_url, url, '🌎 ʟ ɪ ɴ ᴋ', null, null, [[null,null],[null,null],[null,null]], m)

conn.sendButton(m.chat, animeingfo, wm, image_url, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`],
            ], m)
}
handler.help = ['animeinfo <anime>']
handler.tags = ['anime', 'limitmenu']
handler.command = /^(animeinfo)$/i
handler.limit = true
export default handler
*/

import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.results[0]
let animeingfo = `✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
➡️ *Start date:* ${start_date}
🔚 *End date:* ${end_date}
💬 *Show Type:* ${type}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
👥 *Members:* ${members}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['animeinfo'].map(v => v + ' <judul>')
handler.tags = ['anime', 'limitmenu']
handler.command = /^(animeinfo)$/i
handler.limit = true
export default handler
