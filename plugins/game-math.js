let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.math = conn.math ? conn.math : {}
    const buttons = Object.keys(modes).map(v => [v, `${usedPrefix}${command} ${v}`])
    let math1 = `Silahkan Pilih Mode Math Yang Ingin Kamu Mainkan Dibawah Ini`

    const sections = [
        {
            title: `${htjava} MARI SENANG BELAJAR BERHITUNG ✦-------`,
            rows: [
                {title: "🔖 NOOB", rowId: `${usedPrefix}math noob`, description: "0% Kesulitan" },
                {title: "🔖 EASY", rowId: `${usedPrefix}math easy`, description: "5% Kesulitan" },
                {title: "🔖 MEDIUM", rowId: `${usedPrefix}math medium`, description: "30% Kesulitan" },
                {title: "🔖 HARD", rowId: `${usedPrefix}math hard`, description: "50% Kesulitan" },
                {title: "🔖 EXTREME", rowId: `${usedPrefix}math extreme`, description: "70% Kesulitan" },
                {title: "🔖 IMPOSSIBLE", rowId: `${usedPrefix}math impossible`, description: "100% Kesulitan" },
                {title: "🔖 IMPOSSIBLE2", rowId: `${usedPrefix}math impossible2`, description: "100% Kesulitan" },
                ]
            },
    ]
    const listMessage = {
        text: math1,
        footer: botdate,
        mentions: await conn.parseMention(math1),
        title:  "SMART MATH",
        buttonText: "Click Here!",
        sections
      }

    if (args.length < 1) return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(math1), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    
    /* return conn.sendButton(m.chat, `
  Mode: ${Object.keys(modes).join(' | ')}
  Contoh penggunaan: ${usedPrefix}math medium
  `.trim(), author, null, buttons, m) */

  // -----------------------------------------------------------------------------------------------------------
  let math2 = `Silahkan Pilih Mode Math Yang Ingin Kamu Mainkan Dibawah Ini`

    const section2 = [
        {
            title: `${htjava} MARI SENANG BELAJAR BERHITUNG ✦-------`,
            rows: [
                {title: "🔖 NOOB", rowId: `${usedPrefix}math noob`, description: "0% Kesulitan" },
                {title: "🔖 EASY", rowId: `${usedPrefix}math easy`, description: "5% Kesulitan" },
                {title: "🔖 MEDIUM", rowId: `${usedPrefix}math medium`, description: "30% Kesulitan" },
                {title: "🔖 HARD", rowId: `${usedPrefix}math hard`, description: "50% Kesulitan" },
                {title: "🔖 EXTREME", rowId: `${usedPrefix}math extreme`, description: "70% Kesulitan" },
                {title: "🔖 IMPOSSIBLE", rowId: `${usedPrefix}math impossible`, description: "100% Kesulitan" },
                {title: "🔖 IMPOSSIBLE2", rowId: `${usedPrefix}math impossible2`, description: "100% Kesulitan" },
                ]
            },
    ]
    const listMessage2 = {
        text: math2,
        footer: botdate,
        mentions: await conn.parseMention(math2),
        title:  "SMART MATH",
        buttonText: "Click Here!",
        section2
      }
    let mode = args[0].toLowerCase()
    if (!(mode in modes)) return conn.sendMessage(m.chat, listMessage2, { quoted: m, mentions: await conn.parseMention(math2), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    
    /* return conn.sendButton(m.chat, `
  Mode: ${Object.keys(modes).join(' | ')}
  Contoh penggunaan: ${usedPrefix}math medium
    `.trim(), author, null, buttons, m) */

    // -----------------------------------------------------------------------------------------------------------

    let id = m.chat
    if (id in conn.math) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.math[id][0])
    let math = genMath(mode)
    conn.math[id] = [
        await conn.reply(m.chat, `Berapa hasil dari *${math.str}*?\n\nTimeout: ${(math.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: ${math.bonus} XP`, m),
        math, 4,
        setTimeout(() => {
            if (conn.math[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah ${math.result}`, author, null, [['again', `${usedPrefix}${command} ${math.mode}`], ['New Math', `${usedPrefix}math`]], conn.math[id][0])
            delete conn.math[id]
        }, math.time)
    ]
}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math/i


let modes = {
    noob: [-3, 3, -3, 3, '+-', 15000, 10],
    easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
    medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
    hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
    extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
    impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
    impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷'
}

function genMath(mode) {
    let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
    let a = randomInt(a1, a2)
    let b = randomInt(b1, b2)
    let op = pickRandom([...ops])
    let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
    if (op == '/') [a, result] = [result, a]
    return {
        str: `${a} ${operators[op]} ${b}`,
        mode,
        time,
        bonus,
        result
    }
}

function randomInt(from, to) {
    if (from > to) [from, to] = [to, from]
    from = Math.floor(from)
    to = Math.floor(to)
    return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

handler.modes = modes

export default handler
