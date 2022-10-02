/*
import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, {conn, text, args, usedPrefix, command }) => {
    if (!args[0]) throw `Example user ${usedPrefix}${command} WIBU|WIBUbot-md`
    let [usr, rep] = text.split`/`
    let url = `https://api.github.com/repos/${encodeURIComponent(usr)}/${encodeURIComponent(rep)}/zipball`
    let name = `${encodeURIComponent(rep)}.zip`
    m.reply(`D o w n l o a d i n g. . .`)
    conn.sendFile(m.chat, url, name, null, m)
}
handler.help = ['gitclone <username>/<repo>']
handler.tags = ['downloader', 'limitmenu']
handler.command = /gitclone/i

handler.limit = true

export default handler
*/

import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `Example user ${usedPrefix}${command} https://github.com/WH-MODS-BOT/fix-bot-v2`
    if (!regex.test(args[0])) throw 'link salah!'
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    m.reply(`*Mohon tunggu, sedang mengirim repository..*`)
    conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /gitclone/i

handler.limit = true

export default handler
