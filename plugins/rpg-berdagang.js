const cooldown = 28800000
let handler = async(m, { conn, text, usedPrefix, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let user = global.db.data.users[who]
  let dapat = (Math.floor(Math.random() * 5000))
  if (!who) throw 'Tag salah satu lah, yang kamu ingin berdagang bareng'
  let ctimer = (new Date - user.lastdagang)
let _ctimer = (cooldown - ctimer)
let timers = clockString(_ctimer)
  if (user.lastdagang < cooldown) {
  if (4999 > user.money) throw 'Target tidak memiliki modal harap masukkan modal 5000'
  if (4999 > user.money) throw 'kamu tidak memiliki modal harap masukkan modal 5000'
  let caption = `${htki} BERDAGANG ${htka}\nMohon tunggu kak..\n@${m.sender.split("@")[0]} dan @${who.split("@")[0]} sedang berdagang.. 😅\n\n@${m.sender.split("@")[0]} dan @${who.split("@")[0]} meletakkan modal -${dapat} 😅`
  
  let _caption = `Selamat @${m.sender.split("@")[0]} dan @${who.split("@")[0]} mendapatkan money..\n\nPenghasilan dagang @${m.sender.split("@")[0]} didapatkan +5000\n${user.money += 5000} Money @${m.sender.split("@")[0]}\n\nPenghasilan dagang @${who.split("@")[0]} didapatkan +5000\n${user.money += 5000} Money @${who.split("@")[0]}`
  
  let __caption = `${htki} SUKSES ${htka}\nSelamat @${m.sender.split("@")[0]} dan @${who.split("@")[0]} mendapatkan money..\n\nPenghasilan dagang @${m.sender.split("@")[0]} didapatkan +10000\n${user.money += 10000} Money @${m.sender.split("@")[0]}\n\nPenghasilan dagang @${who.split("@")[0]} didapatkan +10000\n${user.money += 10000} Money @${who.split("@")[0]}`
  
  conn.sendButton(m.chat, caption, clockString(60000), null, [
      ['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]
    ], m, { mentions: conn.parseMention(caption) })
    
					setTimeout(() => {
			conn.sendButton(m.chat, __caption, `SUKSES`, null, [
      ['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]
    ], m, { mentions: conn.parseMention(__caption) })
		}, 10800000)

		setTimeout(() => {
			conn.sendButton(m.chat, _caption, clockString(10800000), null, [
      ['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]
    ], m, { mentions: conn.parseMention(_caption) })
		}, 7200000)

		setTimeout(() => {
			conn.sendButton(m.chat, _caption, clockString(7200000), null, [
      ['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]
    ], m, { mentions: conn.parseMention(_caption) })
		}, 3600000)

		setTimeout(() => {
			conn.sendButton(m.chat, _caption, clockString(3600000), null, [
      ['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]
    ], m, { mentions: conn.parseMention(_caption) })
		}, 60000)
					user.lastdagang = new Date * 1
} else conn.sendButton(m.chat, `Anda Sudah Berdagang tunggu\n${timers} lagi..`, botdate, null, [
      ['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]
    ], m)
}
handler.help = ['berdagang'].map(v => v + ' @[tag]')
handler.tags = ['rpg']
handler.command = /^(berdagang|dagang)$/i
handler.limit = true
handler.cooldown = cooldown
export default handler 

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}