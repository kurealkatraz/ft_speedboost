const fs		= require('fs');
const homedir	= require('os').homedir();
const argv		= process.argv;
const ascii		= require('asciiart-logo');


var str		= "SetPrivateProfileString('Program Options','Maximum Frame Rate','";
var SPEED	= Number(process.argv[2]) || 50;

str += SPEED;
str += "')";
fs.appendFile(homedir + "/.local/share/Baldur\'s\ Gate\ -\ Enhanced\ Edition/Baldur.lua", str, 'utf-8', (err) => {
	if (err)
		console.log(err);
	else
		console.log(SPEED + " up my boi");
});
