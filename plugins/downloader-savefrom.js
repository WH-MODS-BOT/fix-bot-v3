import { aiovideodl, savefrom } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.facebook.com/groups/972938613264044/permalink/1103753026849268/?app=fbl`
const { meta, hd, sd} = await savefrom(args[0]).catch(async _ => await aiovideodl(args[0]))

const done = hd.url || sd.url
 conn.sendButton(m.chat, ` *🏷️Title:* ${meta.title}
*⌛ durasi:* ${meta.duration}
🔗 *Url:* ${done}`, meta.title + '.mp4', await(await fetch(done)).buffer(), [['🎀 Menu', '/menu']], m, { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
            mimetype: 'video/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: done
     }}
  })
}
handler.help = ['savefrom'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(save(from)?)$/i

export default handler
