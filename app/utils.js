var fs = require('fs');
var path = require('path');
var os = require("os");

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

};