let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`

  let teks = 'Pilih dibawah kak Sounds kane Nya! o(〃＾▽＾〃)o'
const sections = [
   {
	title: `${htjava} SOUND MENU –––––––––·•`,
	rows: [
	{title: "Mangkane 1", rowId: ".mangkane1"},
    {title: "Mangkane 2", rowId: ".mangkane2"},
	{title: "Mangkane 3", rowId: ".mangkane3"},
	{title: "Mangkane 4", rowId: ".mangkane4"},
	{title: "Mangkane 5", rowId: ".mangkane5"},
	{title: "Mangkane 6", rowId: ".mangkane6"},
	{title: "Mangkane 7", rowId: ".mangkane7"},
	{title: "Mangkane 8", rowId: ".mangkane8"},
	{title: "Mangkane 9", rowId: ".mangkane9"},
	{title: "Mangkane 10", rowId: ".mangkane10"},
	{title: "Mangkane 11", rowId: ".mangkane11"},
	{title: "Mangkane 12", rowId: ".mangkane12"},
	{title: "Mangkane 13", rowId: ".mangkane13"},
	{title: "Mangkane 14", rowId: ".mangkane14"},
	{title: "Mangkane 15", rowId: ".mangkane15"},
	{title: "Mangkane 16", rowId: ".mangkane16"},
	{title: "Mangkane 17", rowId: ".mangkane17"},
	{title: "Mangkane 18", rowId: ".mangkane18"},
	{title: "Mangkane 19", rowId: ".mangkane19"},
    {title: "Mangkane 20", rowId: ".mangkane20"},
	{title: "Mangkane 21", rowId: ".mangkane21"},
    {title: "Mangkane 22", rowId: ".mangkane22"},
	{title: "Mangkane 23", rowId: ".mangkane23"},
	{title: "Mangkane 24", rowId: ".mangkane24"},
]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".owner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *SOUND MENGKANE MENU* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(soundkanemenu)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: fakes, mentions: await conn.parseMention(teks), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['soundkanemenu']
handler.tags = ['fun']
handler.command = /^(soundkanemenu)/i


export default handler
