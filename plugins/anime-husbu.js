import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/husbu?apikey=ebb6251cc00f9c63'
	conn.sendButton(m.chat, 'Bojone Gepenk🐦', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(husbu)$/i
handler.tags = ['anime', 'limitmenu']
handler.help = ['husbu']
handler.limit = true
export default handler
