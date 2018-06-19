const fs		= require('fs');
const homedir	= require('os').homedir();
const argv		= process.argv;
const ascii		= require('asciiart-logo');


var str		= "alias cokeMeUpDady =\"node ~/ft_speedboost/faster.js\"\n";

fs.appendFile(homedir + "/.zshrc", str, 'utf-8', (err) => {
	if (err)
		console.log(err);
	else
		console.log("Type 'cokeMeUpDady' to set da speed");
});
