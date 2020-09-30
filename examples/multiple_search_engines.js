const se_scraper = require('./../src/node_scraper.js');

(async () => {
    let browser_config = {
        random_user_agent: true,
        write_meta_data: true,
        sleep_range: '[1,1]',
        headless: true,
       // output_file: `examples/results/multiple_search_engines.json`
    };
    let kws = ['news', 'se-scraper'];
    let scrape_job = {
        output_file: `examples/results/multiple_search_engines.json`,
		search_engine: 'google',
        keywords: ['news', 'se-scraper'],
        //num_pages: 1,
		google_settings: {
            //gl: 'us', // The gl parameter determines the Google country to use for the query.
            //hl: 'fr', // The hl parameter determines the Google UI language to return results.
            start: 15, // Determines the results offset to use, defaults to 0.
            num: 5, // Determines the number of results to show, defaults to 10. Maximum is 100.
        },
    };

    var scraper = new se_scraper.ScrapeManager(browser_config);
    await scraper.start();

    for (var se of ['google'/*, 'bing'*/]) {
        scrape_job.search_engine = se;
		for(var kw of ['news', 'se-scraper']){
			scrape_job.output_file = 'examples/results/multiple_search_engines_' + se + '_' + kw + '.json';
			scrape_job.keywords = [kw];
			scrape_job.google_settings.q = kw;
			var results = await scraper.scrape(scrape_job);
			
			console.dir(results, {depth: null, colors: true});
       }// end for
	}// end for

    await scraper.quit();
})();

