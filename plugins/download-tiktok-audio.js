// ---------------------------------------------------- scrape bochilteam error -----------------------------------------------------------------
/*import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
import { toAudio } from '../lib/converter.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedprefix, command }) => {
    if (!args[0]) throw `use example ${usedprefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdlv3(args[0])
    .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdl(args[0]))
    const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark 
    if (!url) throw 'can\'t download video!'
let f = await(await fetch(url)).buffer()
let audio = await toAudio(f, 'mp4')
    conn.sendFile(m.chat, audio.data, 'tiktok.mp3', `              *「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
    ████████▀▀▀████
    ████████────▀██
    ████████──█▄──█
    ███▀▀▀██──█████
    █▀──▄▄██──█████
    █──█████──█████
    █▄──▀▀▀──▄█████
    ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
*Nickname:* ${nickname}
*Description:* ${description}
_©WH-MODS-BOT-V1🍭_
`.trim(), m, null, { mimetype:'audio/mpeg'})
}
handler.help = ['tiktokmusik', 'ttmusik', 'tiktokaudio', 'tta'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokmusik|ttmusik|tiktokaudio|tta)$/i

export default handler
*/
// ---------------------------------------------------------------------- apikey lol human ----------------------------------------------------------
import fetch from 'node-fetch'
import axios from "axios"
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
 let chat = global.db.data.chats[m.chat]
    let url = `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    await conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`, 'tiktokaudio.mp3', `*「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ  A U D I O 」*
    ████████▀▀▀████
    ████████────▀██
    ████████──█▄──█
    ███▀▀▀██──█████
    █▀──▄▄██──█████
    █──█████──█████
    █▄──▀▀▀──▄█████
    ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────

*Judul:* 
*Type:* MP3
*📥 Ukuran File:* 
`.trim(), m, null, {
   document: { url: `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`}, mimetype: 'audio/mpeg', fileName: 'tiktok.mp3', conntextInfo: {
        externalAdReply: {
            title: '▶︎ ━━━━━━━•────────────────── ', 
            body: 'Now Playing...',
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/9e323ad1f4b2d52579416.jpg')).buffer(),
         mediaUrl: sig
        }
     }
  })
}

handler.help = ['tiktokmusik', 'ttmusik', 'tiktokaudio', 'tta'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokmusik|ttmusik|tiktokaudio|tta)$/i

export default handler
