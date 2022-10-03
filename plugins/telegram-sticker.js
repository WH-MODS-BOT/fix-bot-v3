import fetch from "node-fetch"
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://t.me/addstickers/namapack`
    let packName = args[0].replace("https://t.me/addstickers/", "")
    let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`)
    let json = await gas.json()
    if (command == 'stikerteleget') {
    let gx = await fetch('https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=' + args[0])
    let jx = await gx.json()
  return conn.sendFile(m.chat, 'https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/' + jx.result.file_path, 'sticker.webp', '', fakes, adReply, { asSticker: true })
    }
    let dapet = json.result.stickers
	let row = Object.values(dapet).map((v, index) => ({
		title: v.set_name,
		description: '\n• type: ' + v.type + '\n• width: ' + v.width + '\n• height: ' + v.height + '\n• emoji: ' + v.emoji + '\n• is_animated: ' + v.is_animated + '\n• is_video: ' + v.is_video,
		rowId: usedPrefix + 'stikerteleget ' + v.thumb.file_id
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['stikertele <url>']
handler.tags = ['sticker']
handler.command = /^(stic?kertele(gram)?|stikerteleget)$/i
handler.limit = 1

export default handler
