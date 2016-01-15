var interval_id = null;

function Interval() {
	if (interval_id !== null){
		clearInterval(interval_id)
		interval_id = window.setInterval(nextTweet, 6600); //6.6 secs
	} else{
		interval_id = window.setInterval(nextTweet, 6600); //6.6 secs
	}
}

function datafetcher() {
	loklakFetcher.getTweets({}, datahandler);
	Interval();
}

function datahandler(raw) {
	stuff = raw;   //Makes the data available globally.
	parser(stuff);
}

var tweetNum = 0;

function parseFunc(){
	parser(stuff)
}

function nextTweet() {
	tweetNum += 1;
	var tweetsEl = document.getElementById('tweets');
	//go back to the first tweet if it's greater than the amount of tweets available
	if(tweetNum == tweetsEl.dataset.count) {
		tweetNum = 0;
	}
	Interval();
	document.getElementById("tweet").style.opacity =  0;
	window.setTimeout(parseFunc, 560);
}
function lastTweet() {
	if (tweetNum > 0) {
		tweetNum -= 1;
		Interval();
		document.getElementById("tweet").style.opacity =  0;
		window.setTimeout(parseFunc, 560);
	}
}

function parser(data) {
	var parsed = ""
	var tweet = data.statuses[tweetNum].text;
	var words = tweet.split(" ");
	var loklakLinkCount = 0;
	for (word in words) {
		if (words[word].startsWith("@")) {
			parsed += "<a href='https://twitter.com/" + words[word].slice(1) + "' target='_blank'>" + words[word] + "</a> ";
		} else if (words[word].startsWith("#")) {
			parsed += "<a href='https://twitter.com/hashtag/" + words[word].slice(1) + "' target='_blank'>" + words[word] + "</a> ";
		} else if (words[word].startsWith("http")) {
			if (words[word].startsWith("http://loklak")) {
				parsed += "<a href='" + data.statuses[tweetNum].links[loklakLinkCount] + "' target='_blank'>" + data.statuses[tweetNum].links[loklakLinkCount] + "</a> ";
				loklakLinkCount += 1;
			} else {
				parsed += "<a href='" + words[word] + "' target='_blank' style='word-break:break-all'>" + words[word] + "</a> ";
			}
		} else {
			parsed += words[word] + " ";
		}
	}
	document.getElementById("tweet").innerHTML =  parsed;
	document.getElementById("tweet").style.opacity =  1;
}
