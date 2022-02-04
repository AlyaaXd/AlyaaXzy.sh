
exports.menu = (listcmdblock, explain, kyun, process, timeWit, timeWita, timeWib, multi, fs, isPremium, getLimit, limit, limitCount, balance, getBalance, sender, blocked, ban, listerror, user, autosticker, forwarding, fake,autoread, autovn, typing, Antibuggc,antibugtroli,Toxic, isAntihidetag, isKickarea, isAntiLink, AntiVirtex, isAntiviewonce, hitnya, pushname, ucapanWaktu, prefix, publik, week, weton, calender) => {
return`*${fake}*
${week}, ${calender} 

 *╭⬡* Nama : ${pushname}
 *│*⦁ Status : ${isPremium ? 'Premium':'Free'}
 *│*⦁ Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
 *│*⦁ Balance : $${getBalance(sender, balance)}
 *│*⦁ Prefix :「  ${multi ? 'Multi Prefix' : `${prefix}`}  」
 *│*⦁ Mode : ${publik ? "Public" : "Self"}
 *│*⦁ Active : ${kyun(process.uptime())}
 *│*⦁ Time : ${timeWib} Wib
 *│*⦁ Time : ${timeWit} Wit
 *│*⦁ Time : ${timeWita} Wita
 *│*⦁ Hit Today : ${JSON.parse(fs.readFileSync('./database/hitToday.json')).length}
 *│*⦁ Total User : ${JSON.parse(fs.readFileSync('./database/user.json')).length}
 *│*⦁ Total Error : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}
 *│*⦁ User Banned : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}
 *│*⦁ User Blocked : ${JSON.parse(fs.readFileSync('./database/userblocked.json')).length} 
 *╰⬡* Cmd Blocked : ${JSON.parse(fs.readFileSync('./database/blockcmd.json')).length} 

 *]───── COMMAND ─────[*
					          ▾
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*╭─「 GROUP 」*
*│*
*│⬡* ${prefix}antilink    ${explain ? "on/off":""}
*│⬡* ${prefix}antilinkgc   ${explain ? "on/off":""}
*│⬡* ${prefix}antivirtex     ${explain ? "on/off":""}
*│⬡* ${prefix}antibuggc    ${explain ? "on/off":""}
*│⬡* ${prefix}antitroli     ${explain ? "on/off":""}
*│⬡* ${prefix}antihidetag    ${explain ? "on/off":""}
*│⬡* ${prefix}antibadword     ${explain ? "on/off":""}
*│⬡* ${prefix}antivo    ${explain ? "on/off":""}
*│⬡* ${prefix}antidelete    ${explain ? "on/off":""}
*│⬡* ${prefix}addbadword    ${explain ? "teks":""}
*│⬡* ${prefix}delbadword     ${explain ? "teks":""}
*│⬡* ${prefix}add    ${explain ? "Reply/Tag/Nomor":""}
*│⬡* ${prefix}kick    ${explain ? "Reply/Tag/Nomor":""}
*│⬡* ${prefix}kickme
*│⬡* ${prefix}kicktime    ${explain ? "Reply/Tag":""}
*│⬡* ${prefix}opentime    ${explain ? "1 menit/1 jam":""}
*│⬡* ${prefix}closetime    ${explain ? "1 menit/1 jam":""}
*│⬡* ${prefix}welcome    ${explain ? "on/off":""}
*│⬡* ${prefix}linkgc
*│⬡* ${prefix}infogc
*│⬡* ${prefix}gc    ${explain ? "open/close/revoke":""}
*│⬡* ${prefix}setdesc    ${explain ? "query":""}
*│⬡* ${prefix}setname    ${explain ? "query":""}
*│⬡* ${prefix}infoall    ${explain ? "query":""}
*│⬡* ${prefix}sider      ${explain ? "reply chat bot":""}
*│⬡* ${prefix}unbanchat
*│⬡* ${prefix}promote    ${explain ? "Reply/Tag/Nomor":""}
*│⬡* ${prefix}demote    ${explain ? "Reply/Tag/Nomor":""}
*│⬡* ${prefix}revoke
*│⬡* ${prefix}getppgc
*│⬡* ${prefix}getbio    ${explain ? "Reply":""}
*│⬡* ${prefix}getpp    ${explain ? "Reply":""}
*│⬡* ${prefix}ban    ${explain ? "Reply/Tag":""}
*│⬡* ${prefix}unban    ${explain ? "Reply/Tag":""}
*│⬡* ${prefix}listban
*│⬡* ${prefix}reminder    ${explain ? "teks/8detik":""}
*│⬡* ${prefix}ceksewa 
*│⬡* ${prefix}voting    ${explain ? "tag|alasan|1":""}
*│⬡* ${prefix}delvote
*│⬡* vote
*│⬡* devote
*│*
*╰────────────⦁*

*╭─「 INFO 」*          
*│*
*│* ⬡ Antibuggc : ${Antibuggc ? 'ON' : 'OFF'}
*│* ⬡ Antibadword : ${Toxic ? 'ON' : 'OFF'}
*│* ⬡ Antihidetag : ${isAntihidetag ? 'Aktif' : 'OFF'}
*│* ⬡ Antiasing : ${isKickarea ? 'ON' : 'OFF'}
*│* ⬡ Antilink : ${isAntiLink ? 'ON' : 'OFF'}
*│* ⬡ Antivirtex : ${AntiVirtex ? 'ON' : 'OFF'}
*│* ⬡ Antivo : ${isAntiviewonce ? 'ON' : 'OFF'}
*│* ⬡ Autotyping : ${typing ? 'ON' : 'OFF'}
*│* ⬡ Autovn : ${autovn ? 'ON' : 'OFF'}
*│* ⬡ Autosticker : ${autosticker ? 'ON' : 'OFF'}
*│* ⬡ Autoread : ${autoread ? 'ON' : 'OFF'}
*│* ⬡ Forward : ${forwarding ? 'ON' : 'OFF'}
*│*
*╰────────────⦁*

*╭─「 RANDOM 」*
*│* 
*│⬡* ${prefix}loli   
*│⬡* ${prefix}cosplay 
*│⬡* ${prefix}wallml     
*│⬡* ${prefix}katailham
*│⬡* ${prefix}anna 
*│⬡* ${prefix}asunayuki  
*│⬡* ${prefix}ayuzawa 
*│⬡* ${prefix}chitoge 
*│⬡* ${prefix}emilia    
*│⬡* ${prefix}erza 
*│⬡* ${prefix}hinata
*│⬡* ${prefix}naruto 
*│⬡* ${prefix}sasuke  
*│⬡* ${prefix}anime
*│⬡* ${prefix}memeindo
*│*
*╰────────────⦁*

*╭─「 NSFW 」*    
*│*
*│⬡* ${prefix}nsfwmenu 
*│*
*╰────────────⦁*

*╭─「 GAME 」*
*│*
*│⬡* ${prefix}tebakbendera    
*│⬡* ${prefix}tebakgambar     
*│⬡* ${prefix}tebakanime    Eror
*│⬡* ${prefix}caklontong     
*│⬡* ${prefix}family100     
*│⬡* ${prefix}tebakkata     
*│⬡* ${prefix}tebaklirik     
*│⬡* ${prefix}siapaaku     
*│⬡* ${prefix}math
*│*
*╰────────────⦁*

*╭─「 USER LIMIT 」*
*│*
*│⬡* ${prefix}limit 
*│⬡* ${prefix}claim
*│⬡* ${prefix}cekprem 
*│⬡* ${prefix}listprem
*│⬡* ${prefix}topbalance 
*│⬡* ${prefix}buylimit
*│⬡* ${prefix}buygamelimit
*│⬡* ${prefix}myprofil
*│*
*╰────────────⦁*

*╭─「 MAKER 」*
*│*
*│⬡* ${prefix}sticker      ${explain ? "tag":""} 
*│⬡* ${prefix}swm     ${explain ? "teks|teks":""} 
*│⬡* ${prefix}take    ${explain ? "teks|teks":""} 
*│⬡* ${prefix}fdeface    ${explain ? "link|title|desc|teks":""}
*│⬡* ${prefix}trigger    ${explain ? "tag/reply":""} 
*│⬡* ${prefix}wasted    ${explain ? "reply image":""} 
*│⬡* ${prefix}emoji    ${explain ? "wa emoji":""} 
*│⬡* ${prefix}semoji   ${explain ? "emoji":""} 
*│⬡* ${prefix}nuliskiri    ${explain ? "teks":""} 
*│⬡* ${prefix}nuliskanan    ${explain ? "teks":""} 
*│⬡* ${prefix}foliokiri     ${explain ? "teks":""} 
*│⬡* ${prefix}foliokanan    ${explain ? "teks":""} 
*│⬡* ${prefix}tts    ${explain ? "id teks":""} 
*│⬡* ${prefix}narutoteks    ${explain ? "teks":""} 
*│⬡* ${prefix}shadow     ${explain ? "teks":""} 
*│⬡* ${prefix}romantic     ${explain ? "teks":""} 
*│⬡* ${prefix}smoke     ${explain ? "teks":""} 
*│⬡* ${prefix}burnpaper     ${explain ? "teks":""} 
*│⬡* ${prefix}lovemsg     ${explain ? "teks":""} 
*│⬡* ${prefix}grass     ${explain ? "teks":""} 
*│⬡* ${prefix}doubleheart     ${explain ? "teks":""} 
*│⬡* ${prefix}coffecup     ${explain ? "teks":""} 
*│⬡* ${prefix}lovetext     ${explain ? "teks":""} 
*│⬡* ${prefix}butterfly     ${explain ? "teks":""} 
*│⬡* ${prefix}wanted    ${explain ? "reply image":""} 
*│⬡* ${prefix}sniper    ${explain ? "reply image":""} 
*│⬡* ${prefix}rip    ${explain ? "reply image":""} 
*│⬡* ${prefix}instagram   ${explain ? "reply image":""} 
*│⬡* ${prefix}beautiful    ${explain ? "reply image":""} 
*│⬡* ${prefix}scary    ${explain ? "reply image":""} 
*│⬡* ${prefix}utatoo    ${explain ? "reply image":""} 
*│⬡* ${prefix}missionpassed    ${explain ? "reply image":""} 
*│⬡* ${prefix}glitch     ${explain ? "reply image":""} 
*│⬡* ${prefix}fire      ${explain ? "reply image":""} 
*│⬡* ${prefix}dictator     ${explain ? "reply image":""} 
*│⬡* ${prefix}ddungeon     ${explain ? "reply image":""} 
*│*
*╰────────────⦁*

*╭─「 CONVERTER 」*
*│*
*│⬡* ${prefix}toimg    ${explain ? "reply sticker":""} 
*│⬡* ${prefix}tomp3    ${explain ? "reply video":""} 
*│⬡* ${prefix}toptt    ${explain ? "reply audio":""} 
*│⬡* ${prefix}slow    ${explain ? "reply video":""} 
*│⬡* ${prefix}togif    ${explain ? "reply video":""} 
*│⬡* ${prefix}tovideo    ${explain ? "reply sticker":""} 
*│⬡* ${prefix}fast    ${explain ? "reply video":""} 
*│⬡* ${prefix}reverse    ${explain ? "reply vidio":""} 
*│⬡* ${prefix}pastebin    ${explain ? "teks":""} 
*│⬡* ${prefix}hode    ${explain ? "reply audio":""} 
*│⬡* ${prefix}imut    ${explain ? "reply audio":""} 
*│⬡* ${prefix}nightcore    ${explain ? "reply audio":""} 
*│⬡* ${prefix}ghost    ${explain ? "reply audio":""} 
*│⬡* ${prefix}volume    ${explain ? "reply audio":""} 
*│*
*╰────────────⦁*

*╭─「 STORAGE 」*
*│*
*│⬡* ${prefix}addmusik    ${explain ? "reply audio":""} 
*│⬡* ${prefix}adderror    ${explain ? "teks":""} 
*│⬡* ${prefix}addstik    ${explain ? "reply sticker":""} 
*│⬡* ${prefix}addimg    ${explain ? "reply image":""} 
*│⬡* ${prefix}addvid    ${explain ? "reply video":""} 
*│⬡* ${prefix}addvn    ${explain ? "reply audio":""} 
*│⬡* ${prefix}liststik
*│⬡* ${prefix}listimg
*│⬡* ${prefix}listvid
*│⬡* ${prefix}listerror
*│⬡* ${prefix}delimg    ${explain ? "teks":""} 
*│⬡* ${prefix}delvn    ${explain ? "teks":""} 
*│⬡* ${prefix}delstik    ${explain ? "teks":""} 
*│⬡* ${prefix}delerror    ${explain ? "teks":""} 
*│*
*╰────────────⦁*

*╭─「 FUN 」*
*│*
*│⬡* ${prefix}fitnah     ${explain ? "@tagmember|teks|teks":""} 
*│⬡* ${prefix}hobby
*│⬡* ${prefix}watak
*│⬡* ${prefix}bisakah    ${explain ? "teks":""} 
*│⬡* ${prefix}apakah    ${explain ? "teks":""} 
*│⬡* ${prefix}kapankah    ${explain ? "teks":""} 
*│⬡* ${prefix}bagaimanakah    ${explain ? "teks":""} 
*│⬡* ${prefix}rate
*│⬡* ${prefix}sangecek
*│⬡* ${prefix}gaycek
*│⬡* ${prefix}lesbicek
*│⬡* ${prefix}gantengcek
*│⬡* ${prefix}cantikcek
*│⬡* ${prefix}jadian 
*│⬡* ${prefix}ngewe
*│⬡* ${prefix}wangy    ${explain ? "nama":""} 
*│⬡* ${prefix}truth
*│⬡* ${prefix}dare
*│⬡* ${prefix}cekbapak
*│*
*╰────────────⦁*

*╭─「 PREMIUM 」*
*│* 
*│⬡* ${prefix}pinterest    ${explain ? "teks":""} 
*│⬡* ${prefix}asupan 
*│⬡* ${prefix}aspan 
*│⬡* ${prefix}totag    ${explain ? "reply":""} 
*│⬡* ${prefix}chat    ${explain ? "nomer|teks":""} 
*│⬡* ${prefix}simi    ${explain ? "teks/on/off":""} 
*│⬡* ${prefix}caridoi   
*│⬡* ${prefix}hidetag    ${explain ? "teks":""} 
*│⬡* ${prefix}mediafire     ${explain ? "link":""} 
*│⬡* ${prefix}ytdl     ${explain ? "link":""} 
*│⬡* ${prefix}fbhd
*│⬡* ${prefix}twitterhd      ${explain ? "link":""} 
*│⬡* ${prefix}playaudio    ${explain ? "teks":""} 
*│⬡* ${prefix}playvideo   ${explain ? "teks":""} 
*│*
*╰────────────⦁*

*╭─「 PRIMBON 」*
*│* 
*│⬡* ${prefix}artinama     ${explain ? "teks":""} 
*│⬡* ${prefix}artimimpi     ${explain ? "teks":""} 
*│⬡* ${prefix}namapasangan     ${explain ? "teks":""} 
*│⬡* ${prefix}tanggaljadian    ${explain ? "tanggal":""} 
*│⬡* ${prefix}tipewatak      ${explain ? "nama tanggal":""} 
*│⬡* ${prefix}ramalanjodoh    ${explain ? "nama tanggal nama tanggal":""} 
*│⬡* ${prefix}ramalanrejeki     ${explain ? "tanggal":""} 
*│⬡* ${prefix}kecocokannama     ${explain ? "nama tanggal":""} 
*│⬡* ${prefix}haribaik      ${explain ? "tanggal":""} 
*│⬡* ${prefix}harilarangan     ${explain ? "tanggal":""} 
*│*
*╰────────────⦁*

*╭─「 DOWNLOAD 」*
*│*
*│⬡* ${prefix}ytmp4     ${explain ? "Link":""} 
*│⬡* ${prefix}ytmp3     ${explain ? "Link":""} 
*│⬡* ${prefix}play      ${explain ? "teks":""} 
*│⬡* ${prefix}tiktok     ${explain ? "Link":""} 
*│⬡* ${prefix}tiktoknowm     ${explain ? "Link":""} 
*│⬡* ${prefix}ig     ${explain ? "Link":""} 
*│⬡* ${prefix}igstory     ${explain ? "Link":""} 
*│⬡* ${prefix}twitter          ${explain ? "Link":""} 
*│⬡* ${prefix}fb          ${explain ? "Link":""} 
*│*
*╰────────────⦁* 

*╭─「 TEXT PROME 」*
*│*
*│⬡* ${prefix}blackping     ${explain ? "teks":""} 
*│⬡* ${prefix}glitch     ${explain ? "teks":""} 
*│⬡* ${prefix}glitch2     ${explain ? "teks|teks":""} 
*│⬡* ${prefix}glitch3      ${explain ? "teks|teks":""} 
*│⬡* ${prefix}lion       ${explain ? "teks":""} 
*│⬡* ${prefix}3dneon     ${explain ? "teks":""} 
*│⬡* ${prefix}neon      ${explain ? "teks":""} 
*│⬡* ${prefix}greenneon    ${explain ? "teks":""} 
*│⬡* ${prefix}bokeh    ${explain ? "teks":""} 
*│⬡* ${prefix}hollographic   ${explain ? "teks":""} 
*│⬡* ${prefix}bear     ${explain ? "teks":""} 
*│⬡* ${prefix}wolf      ${explain ? "teks":""} 
*│⬡* ${prefix}joker    ${explain ? "teks":""} 
*│⬡* ${prefix}dropwater   ${explain ? "teks":""} 
*│⬡* ${prefix}foggy    ${explain ? "teks":""} 
*│⬡* ${prefix}thewall     ${explain ? "teks":""} 
*│⬡* ${prefix}natural     ${explain ? "teks":""} 
*│⬡* ${prefix}carbon     ${explain ? "teks":""} 
*│⬡* ${prefix}pencil     ${explain ? "teks":""} 
*│*
*╰────────────⦁* 

*╭─「 TEXT TO PNG 」*
*│*
*│⬡* ${prefix}attp
*│⬡* ${prefix}ttp
*│⬡* ${prefix}ttpred
*│⬡* ${prefix}ttpblue
*│⬡* ${prefix}ttpyellow
*│⬡* ${prefix}ttppink
*│⬡* ${prefix}ttpviolet
*│⬡* ${prefix}ttpgreen
*│⬡* ${prefix}ttppurple
*│⬡* ${prefix}ttpmagenta
*│⬡* ${prefix}ttp2
*│⬡* ${prefix}ttp2red
*│⬡* ${prefix}ttp2blue
*│⬡* ${prefix}ttp2yellow
*│⬡* ${prefix}ttp2pink
*│⬡* ${prefix}ttp2violet
*│⬡* ${prefix}ttp2green
*│⬡* ${prefix}ttp2purple
*│⬡* ${prefix}ttp2magenta
*│*
*╰────────────⦁* 

*╭─「 SEARCH 」*
*│*
*│⬡* ${prefix}ytsearch     ${explain ? "teks":""} 
*│⬡* ${prefix}google     ${explain ? "teks":""} 
*│⬡* ${prefix}igstalk     ${explain ? "username":""} 
*│⬡* ${prefix}gimage     ${explain ? "teks":""} 
*│⬡* ${prefix}wiki     ${explain ? "teks":""} 
*│⬡* ${prefix}kbbi     ${explain ? "teks":""} 
*│⬡* ${prefix}brainly    ${explain ? "teks":""} 
*│⬡* ${prefix}wait     ${explain ? "reply image":""} 
*│⬡* ${prefix}chara    ${explain ? "teks":""} 
*│⬡* ${prefix}lirik     ${explain ? "teks":""} 
*│⬡* ${prefix}wallpaper     ${explain ? "teks":""} 
*│*
*╰────────────⦁*

*╭─「 OTHER 」*
*│*
*│⬡* ${prefix}ping
*│⬡* ${prefix}inspect     ${explain ? "link gc":""} 
*│⬡* ${prefix}caripesan    ${explain ? "teks":""} 
*│⬡* ${prefix}kontak
*│⬡* ${prefix}style    ${explain ? "teks":""} 
*│⬡* ${prefix}shorturl     ${explain ? "link":""} 
*│⬡* ${prefix}tourl     ${explain ? "reply image/video/sticker":""} 
*│⬡* ${prefix}zalgo     ${explain ? "teks":""} 
*│⬡* ${prefix}linkwa     ${explain ? "teks":""} 
*│⬡* ${prefix}listsewa 
*│⬡* ${prefix}tospam    ${explain ? "reply image/vidio":""} 
*│⬡* ${prefix}spam     ${explain ? "teks":""} 
*│⬡* ${prefix}kodebahasa 
*│⬡* ${prefix}listvn
*│⬡* ${prefix}ssweb
*│⬡* ${prefix}cerpen     
*│⬡* ${prefix}musik
*│⬡* ${prefix}reportbug     ${explain ? "teks":""} 
*│⬡* ${prefix}translate     ${explain ? "teks/reply teks":""} 
*│⬡* ${prefix}otakuongoing  
*│⬡* ${prefix}samehadaku
*│*
*╰────────────⦁*

*╭─「 OWNER 」*
*│*
*│⬡* ${prefix}off     ${explain ? "alasan":""} 
*│⬡* ${prefix}on
*│⬡* ${prefix}bc     ${explain ? "teks":""} 
*│⬡* ${prefix}bcgc     ${explain ? "teks":""} 
*│⬡* ${prefix}bcpc     ${explain ? "teks":""} 
*│⬡* ${prefix}pcallmem     ${explain ? "teks":""} 
*│⬡* ${prefix}block    ${explain ? "tag/reply/nomer":""} 
*│⬡* ${prefix}unblock     ${explain ? "tag/reply/nomer":""} 
*│⬡* ${prefix}addstory     ${explain ? "reply image/vidio/teks":""} 
*│⬡* ${prefix}status
*│⬡* ${prefix}explain <on/off>
*│⬡* ${prefix}self
*│⬡* ${prefix}public
*│⬡* ${prefix}setthumb    ${explain ? "reply image":""} 
*│⬡* ${prefix}setppbot     ${explain ? "reply image":""} 
*│⬡* ${prefix}setfakeimg    ${explain ? "reply image":""} 
*│⬡* ${prefix}setreply
*│⬡* ${prefix}setbc     ${explain ? "troli/lokasi/dokumen":""} 
*│⬡* ${prefix}setovo      ${explain ? "reply image":""} 
*│⬡* ${prefix}setgopay      ${explain ? "reply image":""} 
*│⬡* ${prefix}setdana       ${explain ? "reply image":""} 
*│⬡* ${prefix}setimageinfo     ${explain ? "reply image":""} 
*│⬡* ${prefix}setmenu      ${explain ? "pdf/troli/katalog/lokasi":""} 
*│⬡* ${prefix}sendhidetag      ${explain ? "idgc|teks":""} 
*│⬡* ${prefix}adderror     ${explain ? "teks|teks":""} 
*│⬡* ${prefix}addorder      ${explain ? "link gc":""} 
*│⬡* ${prefix}addprem      ${explain ? "reply/tag/nomer":""} 
*│⬡* ${prefix}addrespon     ${explain ? "teks teks":""} 
*│⬡* ${prefix}delrespon     ${explain ? "teks":""} 
*│⬡* ${prefix}listrespon
*│⬡* ${prefix}listuser
*│⬡* ${prefix}delprem      ${explain ? "reply/tag/nomer":""} 
*│⬡* ${prefix}giftlimit
*│⬡* ${prefix}resetlimit
*│⬡* ${prefix}setcmd      ${explain ? "reply/sticker + commandnya":""} 
*│⬡* ${prefix}delcmd      ${explain ? "reply/sticker":""} 
*│⬡* ${prefix}blockcmd      ${explain ? "command":""} 
*│⬡* ${prefix}delblockcmd    ${explain ? "command":""} 
*│⬡* ${prefix}delchat
*│⬡* ${prefix}readall
*│⬡* ${prefix}clearall
*│⬡* ${prefix}clearallpc
*│⬡* ${prefix}clearallbc
*│⬡* ${prefix}clearallerror     
*│⬡* ${prefix}clearalluser
*│⬡* ${prefix}clearallblock
*│⬡* ${prefix}clearallban
*│⬡* ${prefix}listblockcmd  
*│⬡* ${prefix}listcmd
*│⬡* ${prefix}listorder
*│⬡* ${prefix}out
*│⬡* ${prefix}autowelcome    ${explain ? "on/off":""} 
*│⬡* ${prefix}autotyping     ${explain ? "on/off":""} 
*│⬡* ${prefix}autoread     ${explain ? "on/off":""} 
*│⬡* ${prefix}autoreadgc     ${explain ? "on/off":""} 
*│⬡* ${prefix}autoreadpc     ${explain ? "on/off":""} 
*│⬡* ${prefix}autovn     ${explain ? "on/off":""} 
*│⬡* ${prefix}autoblockcmd     ${explain ? "on/off":""} 
*│⬡* ${prefix}antichatbot     ${explain ? "on/off":""} 
*│⬡* ${prefix}anticall     ${explain ? "on/off":""} 
*│⬡* ${prefix}stopjadibot 
*│⬡* ${prefix}listbot
*│⬡* ${prefix}forward     ${explain ? "on/off":""} 
*│⬡* ${prefix}forwardtotal     ${explain ? "angka":""} 
*│⬡* ${prefix}join    ${explain ? "linkgc":""} 
*│*
*╰────────────⦁*

*╭─「 MODE WAR 」*
*│*
*│⬡* ${prefix}bugv1 
*│⬡* ${prefix}bugv2 
*│⬡* ${prefix}bugv3 
*│⬡* ${prefix}bugv4 
*│⬡* ${prefix}bugv5     
*│⬡* ${prefix}bugvn    
*│⬡* ${prefix}amaterasu 
*│*
*╰────────────⦁*

*╭─「 THANKS TO 」*
*│*
*│* • AlyaaXzy
*│* • BOTCAH™
*│* • Dittaz
*│* • Zeeone Ofc
*│* • Yudha Perdana
*│* • Yogi PW
*│* • Decode Denpa
*│* • Fernazer
*│* • X - Dev Team
*│*
*╰────────────⦁*`
}