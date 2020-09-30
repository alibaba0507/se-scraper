var fs = require('fs');
var path = require('path');
var os = require("os");


const se_scraper = require('./../src/node_scraper.js');
var filepath_de = path.join(__dirname, '/keywords.txt');

(async () => {
    let browser_config = {
        output_file: 'examples/results/data.json',
		 // how long to sleep between requests. a random sleep interval within the range [a,b]
        // is drawn before every request. empty string for no sleeping.
        sleep_range: '',
		// whether to prevent images, css, fonts from being loaded
        // will speed up scraping a great deal
        block_assets: true,
		 // whether to prevent images, css, fonts from being loaded
        // will speed up scraping a great deal
        block_assets: true,
        // check if headless chrome escapes common detection techniques
        // this is a quick test and should be used for debugging
        test_evasion: false,
        apply_evasion_techniques: true,
        // log ip address data
        log_ip_address: false,
        // log http headers
        log_http_headers: false,
    };

    let scrape_job = {
        search_engine: 'google',
        //keywords: ['news', 'se-scraper'],
		keyword_file:filepath_de,
        num_pages: 1,
    };

    let scrape_job2 = {
        search_engine: 'bing',
		keyword_file:filepath_de,
        //keywords: ['test', 'what a wonderful world'],
        num_pages: 1,
    };

    var scraper = new se_scraper.ScrapeManager(browser_config);
    await scraper.start();

    var results = await scraper.scrape(scrape_job);
    console.dir(results, {depth: null, colors: true});

    var results2 = await scraper.scrape(scrape_job2);
    console.dir(results2, {depth: null, colors: true});

    await scraper.quit();
})();
