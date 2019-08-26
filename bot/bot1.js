const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

bot.start(ctx => {
    const name = ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo, ${name}!`)
})

bot.on('text', ctx => {
    const text = ctx.update.message.text
    ctx.reply(`Texto '${text}' recebido com sucesso!`)
})

bot.on('location', ctx => {
    const location = ctx.update.message.location
    ctx.reply(`Entendido, você está em 
        latitude: ${location.latitude}
        longitude: ${location.longitude}`
    )
})

bot.on('contact', ctx => {
    const contact = ctx.update.message.contact
    const name = contact.first_name
    const phone = contact.phone_number
    ctx.reply(`Vou lembrar do(a) ${name} (${phone})`)
})

bot.on('voice', ctx => {
    const voice = ctx.update.message.voice
    ctx.reply(`Audio recebido, ele possui ${voice.duration} segundos`)
})

bot.on('photo', ctx => {
    const photo = ctx.update.message.photo
    photo.forEach((ph, i) => {
        ctx.reply(`Foto ${i} tem resolução de ${ph.width}x${ph.height}`)
    });
})

bot.on('sticker', ctx => {
    const sticker = ctx.update.message.sticker
    ctx.reply(`Você enviou o ${sticker.emoji} do conjunto ${sticker.set_name}`)
})

bot.startPolling()