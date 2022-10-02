import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./mp3/Bot.opus') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.customPrefix = /^(bot|robot|p|tes|tes123|tes1|tes12|woy)$/i
handler.command = new RegExp

export default handler
