var fs = require('fs');
var path = require('path');
var os = require("os");

function write_json(fpath,json)
{
	var filepath = path.join(__dirname, fpath);
	fs.writeFileSync(filepath, JSON.stringify(json)); 
}
function append_file(fpath,data)
{
	var filepath = path.join(__dirname, fpath);
	fs.writeFileSync(filepath, data,{flag:'a+'}); 
}
function file_to_json(fpath)
{
	var filepath = path.join(__dirname, fpath);
    let json =  fs.readFileSync(filepath).toString();
	
	let j = JSON.parse(json);
	console.log(">>>> READ JSON FILE [" + j.project.name + "]>>>");
	return j;
}
function file_to_line_array(fpath) {
	var filepath = path.join(__dirname, fpath);
    let kws =  fs.readFileSync(filepath).toString().split(os.EOL);
    // clean keywords
    kws = kws.filter((kw) => {
        return kw.trim().length > 0;
    });
    return kws;
}

module.exports = {
    file_to_line_array: file_to_line_array,
	file_to_json:file_to_json,
	write_json:write_json,
    append_file:append_file,
};