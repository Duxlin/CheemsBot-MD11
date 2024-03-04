//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Duxlin" //ur yt chanel name
global.socialm = "GitHub: Duxlin" //ur github or insta name
global.location = "Alien realm" //ur location

//new
global.botname = 'Dux Bot MD' //ur bot name
global.ownernumber = '2347082252014' //ur owner number
global.ownername = 'Dux' //ur owner name
global.websitex = "https://www.tiktok.com/@quadhir"
global.wagc = ""
global.themeemoji = '😊'
global.wm = "Dux Bot Inc."
global.botscript = 'https://github.com/Duxlin' //script link
global.packname = "Dux"
global.author = "Dux\n\n+2347082252014"
global.creator = "2347082252014@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2347082252014","2349167632397"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
