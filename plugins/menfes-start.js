import fetch from 'node-fetch'
let handler = async(m, {
	conn, text, usedPrefix, command, args
}) => {

	if (args[0].length > 14) throw 'Nomor Kepanjangan'
	if (args[0].length < 7) throw 'Nomor Kependekan'
	if (args[0].startsWith('0')) throw 'Gunakan format 62'
	if (!args[0]) throw 'Masukkan Teks'
	
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
	let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	let tujuan = `👋 Saya *${conn.user.name}*, Pesan Untuk Kamu
👥 Dari : *PENGIRIM RAHASIA*
${htki} 💌 Pesan ${htka}
${htjava} ${txt}
`
	let cap = `${htki} PESAN RAHASIA ${htka}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${usedPrefix + command} ${nomorown} pesan untuknya
Contoh: ${usedPrefix + command} ${nomorown} hai`
	if (!m.quoted) {
		await conn.sendButton(mention, tujuan, cap, null, [['Menu', '/menu']], m)
	} else {
		await conn.sendButton(mention, tujuan, cap, null, [['Menu', '/menu']], m)
		let media = q ? await m.getQuotedObj() : false || m
		await conn.copyNForward(mention, media, false).catch(_ => _)
	}
	let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
👥 Dari : @${m.sender.replace(/@.+/, '')}
👥 Untuk : @${mention.replace(/@.+/, '')}
${htki} 💌 Pesan ${htka}
${htjava} ${txt}
`
	await conn.sendButton(m.chat, suks, wm, null, [['Menu', '/menu']], m, { mentions: conn.parseMention(suks) })
}
handler.help = ['menfess <pesan>']
handler.tags = ['menbalas']
handler.command = /^(menfess|confess|menfes|confes)$/i
export default handler
