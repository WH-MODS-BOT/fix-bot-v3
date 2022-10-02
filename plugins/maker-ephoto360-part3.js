import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks'
  m.reply('Proses...')
  let res = `https://api.violetics.pw/api/ephoto360/${command}?apikey=1290-0463-b5e6&text=${response[0]}`
  conn.sendFile(m.chat, res, 'logo.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['wallpaper-moblie', 'water-3d', 'water-effect', 'water-effect2', 'watercolor-effect', 'wedding-silver', 'wet-glass', 'wings-effect', 'women-day', 'yasuo', 'yellowskin-snake', 'yena-arena-of-valor'].map(v => v + ' <teks>')
handler.tags = ['logo']
handler.command = /^(wallpaper-moblie|water-3d|water-effect|water-effect2|watercolor-effect|wedding-silver|wet-glass|wings-effect|women-day|yasuo|yellowskin-snake|yena-arena-of-valor)$/i

export default handler
