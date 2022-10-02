const tfinventory = {
  others: {
    money: true,
      exp: true,
  },
  tfitems: {
    potion: true,
    trash: true,
    wood: true,
    rock: true,
    string: true,
    emerald: true,
    diamond: true,
    gold: true,
    iron: true,
  },
  tfcrates: {
    common: true,
    uncommon: true,
    mythic: true,
    legendary: true,
    pet: true,
  },
  tfpets: {
    horse: 10,
    cat: 10,
    fox: 10,
    dog: 10,
    robo: 10,
    lion: 10,
    rhinoceros: 10,
    dragon: 10,
    centaur: 10,
    kyubi: 10,
    griffin: 10,
    phonix: 10,
    wolf: 10,
  }
}
const rewards = {
    common: {
        money: 101,
        exp: 201,
        trash: 11,
        potion: [0, 1, 0, 1, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    uncommon: {
        money: 201,
        exp: 401,
        trash: 31,
        potion: [0, 1, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0, 0],
        rock: [0, 1, 0, 0, 0, 0],
        string: [0, 1, 0, 0, 0, 0]
    },
    mythic: {
        money: 301,
        exp: 551,
        trash: 61,
        potion: [0, 1, 0, 0, 0, 0],
        emerald: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        gold: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        iron: [0, 1, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        legendary: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0],
        rock: [0, 1, 0, 0, 0],
        string: [0, 1, 0, 0, 0]
    },
    legendary: {
        money: 401,
        exp: 601,
        trash: 101,
        potion: [0, 1, 0, 0, 0],
        emerald: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        gold: [0, 1, 0, 0, 0, 0, 0, 0],
        iron: [0, 1, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        legendary: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0],
        rock: [0, 1, 0, 0],
        string: [0, 1, 0, 0]
    },
    pet: {
        horse: [0, 1, 0, 0, 0, 0],
        cat: [0, 1, 0, 0],
        fox: [0, 1, 0, 0, 0, 0],
        dog: [0, 1, 0, 0, 0, 0, 0],
        robo: [0, 1, 0, 0],
        lion: [0, 1, 0, 0, 0, 0],
        rhinoceros: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        dragon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        centaur: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        kyubi: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        griffin: [0, 1, 0, 0, 0, 0, 0],
        wolf: [0, 1, 0, 0, 0, 0, 0],
        phonix: [0, 1, 0, 0, 0, 0, 0]
    }
}

let handler = async (m, { command, args, usedPrefix }) => {
let imgr = flaaa.getRandom()
    let user = global.db.data.users[m.sender]
    const tfcrates = Object.keys(tfinventory.tfcrates).map(v => user[v] && `⮕ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
    let listCrate = Object.fromEntries(Object.entries(rewards).filter(([v]) => v && v in user))
    let info = `🧑🏻‍🏫 ᴜsᴇʀ: *${conn.getName(m.sender)}*

🔖 ᴄʀᴀᴛᴇ ʟɪsᴛ :
${Object.keys(tfinventory.tfcrates).map(v => user[v] && `⮕ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴏᴩᴇɴ ᴄʀᴀᴛᴇ:
${usedPrefix}open [crate] [quantity]
★ ᴇxᴀᴍᴩʟᴇ:
${usedPrefix}open mythic 3
`.trim()
    let type = (args[0] || '').toLowerCase()
    let count = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!(type in listCrate)) return conn.sendButton(m.chat, `*${htki} OPEN CRATES ${htka}*`, info, imgr + 'open', [
[`ᴄᴏᴍᴍᴏɴ`, `${usedPrefix}open common`],
[`ᴜɴᴄᴏᴍᴍᴏɴ`, `${usedPrefix}open uncommon`]
], m)
    if (user[type] < count) return m.reply(`
Your *${rpg.emoticon(type)}${type} crate* is not enough!, you only have ${user[type]} *${rpg.emoticon(type)}${type} crate*
type *${usedPrefix}buy ${type} ${count - user[type]}* to buy
`.trim())
    // TODO: add pet crate
    // if (type !== 'pet')
    let crateReward = {}
    for (let i = 0; i < count; i++)
        for (let [reward, value] of Object.entries(listCrate[type]))
            if (reward in user) {
                const total = value.getRandom()
                if (total) {
                    user[reward] += total * 1
                    crateReward[reward] = (crateReward[reward] || 0) + (total * 1)
                }
            }
    user[type] -= count * 1
    m.reply(`
You have opened *${count}* ${global.rpg.emoticon(type)}${type} crate and got:
${Object.keys(crateReward).filter(v => v && crateReward[v] && !/legendary|pet|mythic|diamond|emerald/i.test(v)).map(reward => `
*${global.rpg.emoticon(reward)}${reward}:* ${crateReward[reward]}
`.trim()).join('\n')}
`.trim())
    let diamond = crateReward.diamond, mythic = crateReward.mythic, pet = crateReward.pet, legendary = crateReward.legendary, emerald = crateReward.emerald
    if (mythic || diamond) m.reply(`
Congrats you got a rare item, which is ${diamond ? `*${diamond}* ${rpg.emoticon('diamond')}diamond` : ''}${diamond && mythic ? 'and ' : ''}${mythic ? `*${mythic}* ${rpg.emoticon('mythic')}mythic` : ''}
`.trim())
    if (pet || legendary || emerald) m.reply(`
Congrats you got a epic item, which is ${pet ? `*${pet}* ${rpg.emoticon('pet')}pet` : ''}${pet && legendary && emerald ? ', ' : (pet && legendary || legendary && emerald || emerald && pet) ? 'and ' : ''}${legendary ? `*${legendary}* ${rpg.emoticon('legendary')}legendary` : ''}${pet && legendary && emerald ? 'and ' : ''}${emerald ? `*${emerald}* ${rpg.emoticon('emerald')}emerald` : ''}
`.trim())
}
handler.help = ['open'].map(v => v + ' [crate] [count]')
handler.tags = ['rpg']
handler.command = /^(open|buka|gacha)$/i
export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}