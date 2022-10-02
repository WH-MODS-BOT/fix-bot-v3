let handler = async (m, { conn }) => {
let imgr = flaaa.getRandom()
  let user = global.db.data.users[m.sender]
  const caption = `
⛊「 *B A N K  U S E R* 」
│ 📛 *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
│ 💳 *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
│ 🏛️ *Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
│ 💹 *Money:* ${user.money} 💲
│ 🤖 *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
│ 🌟 *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
│ 📑 *Registered:* ${user.registered ? 'Yes':'No'}
╰──┈┈⭑
`.trim()
  conn.sendButton(m.chat, caption, global.wm, imgr + 'bank', [`Inventory`, '.inv'],m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank((total)?|cek)|cekbank)$/i

handler.register = false
export default handler