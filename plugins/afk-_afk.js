/*
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        conn.sendButtonDoc(m.chat,`
  Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
  Selama ${(new Date - user.afk).toTimeString()}
  `,wm,'Hai Kak','Ya',m,fakeig)
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        conn.sendButtonDoc(m.chat,`
  Jangan tag dia!
  Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
  Selama ${(new Date - afkTime).toTimeString()}
  `,wm,'Maaf Kak','Ya',m,fakeig)
    }
    return true
}
*/

export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        let caption = `
  *${conn.getName(m.sender)}* @${m.sender.split("@")[0]} *berhenti AFK* ${user.afkReason ? ' setelah ' + user.afkReason : ''}
  Selama ${(new Date - user.afk).toTimeString()}
  `.trim()
  let kataafk = ['mau turu', 'mau nyolong', 'Ke rumah ayang', 'jagain lilin', 'beli pop es', 'kawin lari', 'main kelereng', 'petak umpet', 'push renk', 'push up joni', 'olahraga', 'onani', 'beraq', 'open bo', 'di suruh emak', 'kerja']
    conn.sendButton(m.chat, caption, wm, null, [['AFK Lagi', '.afk ' + kataafk.getRandom()]], m, { mentions: conn.parseMention(caption) })
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        let caption = `
  *Jangan tag* *${conn.getName(jid)}* @${jid.split("@")[0]}!
  Dia sedang AFK *${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}*
  Selama ${(new Date - afkTime).toTimeString()}
  `.trim()
    conn.sendButton(m.chat, caption, wm, null, [['Berhenti', '/tts id kok berhenti']], m, { mentions: conn.parseMention(caption) })
    }
    return true
}
