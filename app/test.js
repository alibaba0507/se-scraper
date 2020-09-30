const utils = require('./utils.js');
const se_scraper = require('./../src/node_scraper.js');
var project  = utils.file_to_json('project.json');// return json object of the file
console.log(">>> Proj name[" + project.project.name + "]>");
console.log(">>> Proj keywords_file[" + project.project.keywords_file + "]>");
console.log(">>> Proj proxy_file[" + project.project.proxy_file + "]>");

var filepath_proxies = utils.file_to_line_array( project.project.proxy_file /*'../examples/data/proxies.txt'*/);
var filepath_keywords = utils.file_to_line_array( project.project.keywords_file/*'../examples/keywords.txt'*/);
var links_file = project.project.links_file;
console.log(">>> [" + JSON.stringify(filepath_keywords) + "]>>");
let keywords_indx = project.project.keywords_ln;
let proxiies_indx = project.project.proxy_ln;
console.log(" START keywords[" + keywords_indx + "]>>>");

let lastProxyIndex = 0;
(async () =>{
 let browser_config = {
        random_user_agent: true,
        write_meta_data: true,
        sleep_range: '[1,1]',
        headless: true,
       // output_file: `examples/results/multiple_search_engines.json`
    };
	
let scrape_job = {
       // output_file: `examples/results/multiple_search_engines.json`,
		search_engine: 'google',
        keywords: ['news', 'se-scraper'],
        num_pages: 1,
		google_settings: {
            //gl: 'us', // The gl parameter determines the Google country to use for the query.
            //hl: 'fr', // The hl parameter determines the Google UI language to return results.
            start: 15, // Determines the results offset to use, defaults to 0.
            num: 5, // Determines the number of results to show, defaults to 10. Maximum is 100.
        },
    };

    var scraper = new se_scraper.ScrapeManager(browser_config);
    await scraper.start();
	
for (var i = 0;i < filepath_keywords.length;i++) {
        let kw = [filepath_keywords[i]];
		//kw.push(filepath_keywords[i] )
		console.log(">>> [" + JSON.stringify(kw) + "]>>");
		scrape_job.keywords = [kw];
		scrape_job.google_settings.q = kw;
		let start = scrape_job.google_settings.start ? scrape_job.google_settings.start :0;
		let num = scrape_job.google_settings.num ? scrape_job.google_settings.num : 10;
		for (var j = start;j < (5*num);j++)
		{
			scrape_job.google_settings.start = j*num;
			scrape_job.google_settings.num = num;
			var response = await scraper.scrape(scrape_job);
			let res = response.results[kw]['1']['results'];
			//console.dir(res, {depth: null, colors: true});
			let links = '';
			for (var jj = 0;jj < res.length;jj++)
			{
				 links += res[jj]['link'] + '\n';
				 console.log(">>>>[" + res[jj]['link'] + "]>>>");
			}
			//project.project.links_file
			utils.append_file(project.project.links_file,links);
			project.project.start = (j+1)*10;
			project.project.num = 10;
			utils.write_json('project.json',project);
			//console.dir(response, {depth: null, colors: true});
		}// end for
		project.project.keywords_ln = (i+1);
		utils.write_json('project.json',project);
		/*if (lastProxyIndex < filepath_proxies.length)
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
		}*/
}
})();
