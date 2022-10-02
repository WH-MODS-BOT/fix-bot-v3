import axios from "axios"
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan nomor hpmu yang akan diartikan', m)

	axios.get(`https://kocakz.herokuapp.com/api/primbon/nomorhoki?nomor=${text}`).then ((res) => {
	 	let hasil = `Nomor HP : ${res.data.result.hoki}\nPositif : ${res.data.result.positif}\nNegatif : ${res.data.result.positif}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['nomorhoki'].map(v => v + ' <no hp>')
handler.tags = ['fun', 'limitmenu']
handler.command = /^(nomorhoki)$/i
handler.fail = null
handler.exp = 0
handler.limit = true

export default handler