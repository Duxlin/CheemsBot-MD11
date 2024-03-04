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
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"+MJVI54JwZc+blAvfsgDDRVnvGG4MWE+2rFXtN3WBlI="},"public":{"type":"Buffer","data":"BkqAnhaf1jgcMqtZAiSKAIZJFkQDKEtct+M09f+hAgQ="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"EKJS8wf0XxYu0x4r5ZbaiFNe8ynH5eLI1L+j14Aow3c="},"public":{"type":"Buffer","data":"dVzmxK9xeP5VlFMdbLSkccuNOKIES3zpTsJ2wXR652U="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"gMDZdhBYnmLDJb7ogNa00NN+Ajv6wD5DNKz7bcu7N1k="},"public":{"type":"Buffer","data":"2G+hBcQiywyAzZpq+62vOJVJbh79Z177VH3HaaUU3AU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"OC8V+RjSBKnT1GKJFHdnt5U+erNpYte6wTem8PA/tk4="},"public":{"type":"Buffer","data":"E7wbKIXX0lCAjh0ewCoBhH/EaNT3EEuxnkm9vIyKuiA="}},"signature":{"type":"Buffer","data":"omAzbz+0lcs2B0rGMB/B42Or+5LOsVUdlF8SEMT510eJ3fnDch6Buqe1SS6vr5SdDZfearDEWDBDT64PW59rhA=="},"keyId":1},"registrationId":200,"advSecretKey":"nGrDhh6O3/yDLkjPXq4t2OOdsjqXtVgDh4X3+hVMSbU=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"4flSIQnxQoCxhNNG87QH_A","phoneId":"0bf040cf-68db-4b09-b299-70b4199dc782","identityId":{"type":"Buffer","data":"aR6MxtHONrx98MMCKAooAcEeUQ4="},"registered":true,"backupToken":{"type":"Buffer","data":"z3njg/E6iLfAUowh6NBKp2mrivA="},"registration":{},"pairingCode":"T2KRRTAH","me":{"id":"2349150538944:74@s.whatsapp.net","name":"𝐃𝐔𝐗-𝐌𝐃","lid":"17424967561341:74@lid"},"account":{"details":"CLeint0GEMWOma8GGAIgACgA","accountSignatureKey":"NGC49DydgtErIVz8smH3zsch0FjMxJmNYFpzl6cH02k=","accountSignature":"cembD5oqvb4pHRGTMMQvsJ1TYMb2Z+wXiq9G1waOh0DnNtCLLBw0VmrdQBmf43h6cRQQ48JD/HHsia8PDFIEAQ==","deviceSignature":"Y6sgqCLq5BhomZgK3n6cVW+UWKVLHf6v2lOZOCJwIZ9B/pWamw6OJoVs/usjZa7YZMUUY++1hXG4E7JusUTchQ=="},"signalIdentities":[{"identifier":{"name":"2349150538944:74@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BTRguPQ8nYLRKyFc/LJh987HIdBYzMSZjWBac5enB9Np"}}],"platform":"smba","lastAccountSyncTimestamp":1709590344,"myAppStateKeyId":"AAAAAAsH"}'

//owmner v card
global.ytname = "YT: Duxlin" //ur yt chanel name
global.socialm = "GitHub: Duxlin" //ur github or insta name
global.location = "Alien realm" //ur location

//new
global.botname = 'Dux Bot MD' //ur bot name
global.ownernumber = '2347082252014' //ur owner number
global.ownername = 'Dux' //ur owner name
global.websitex = "https://www.tiktok.com/@quadhir"
global.wagc = "https://chat.whatsapp.com/BZK6e00lnLL5t4aH9NfU4n"
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
