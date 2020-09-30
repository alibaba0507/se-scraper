const utils = require('./utils.js');

var filepath_proxies = utils.file_to_line_array( '../examples/data/proxies.txt');
var filepath_keywords = utils.file_to_line_array( '../examples/keywords.txt');
//console.log(">>> [" + JSON.stringify(filepath_proxies) + "]>>");


let lastProxyIndex = 0;

for (var i = 0;i < filepath_keywords.length;i++) {
        let kws = [filepath_keywords[i]];
		//kw.push(filepath_keywords[i] )
		console.log(">>> [" + JSON.stringify(kws) + "]>>");
		let scrape_job = {
			search_engine: 'google',
			keywords: kws,
			num_pages: 1,
		};
		if (lastProxyIndex < filepath_proxies.length)
		{
			let proxies = [filepath_proxies[lastProxyIndex]];
			// TODO : Increase index if proxy error
			 let browser_config = {
				test_evasion: false,
				log_http_headers: false,
				log_ip_address: false,
				random_user_agent: false,
				apply_evasion_techniques: true,
				screen_output: false,
				html_output: false,
				clean_html_output: true,
			};
		}
}
