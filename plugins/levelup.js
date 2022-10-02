import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level ${user.level} 📊
*${user.exp - min} / ${xp}*
Kurang *${max - user.exp}* lagi! ✨
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Selamat ${conn.getName(m.sender)} naik 🧬level\n.             ${user.role}`
        let str = `${conn.getName(m.sender)} naik 🧬level\n.             ${user.role}

*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]

• 🧬Level Sebelumnya : ${before}
• 🧬Level Baru : ${user.level}
• Pada Jam : ${new Date().toLocaleString('id-ID')}

*Note:* _Semakin sering berinteraksi dengan bot Semakin Tinggi level kamu_
`.trim()

            let knights = await(await import('knights-canvas'))
            let image = await new knights.Up()
    .setAvatar(hwaifu.getRandom())
    .toAttachment();
  let data = image.toBuffer();
            try {
            let img = await levelup(teks, user.level)
            conn.sendButton(m.chat, str, botdate, img, [['INVENTORY', '.inv']], m)
            } catch (e) {
            conn.sendButton(m.chat, str, botdate, data, [['INVENTORY', '.inv']], m)
            }

    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

export default handler
