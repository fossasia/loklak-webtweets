function datafetcher(key) {
	loklakFetcher.getTweets(key, {}, datahandler);
}

function datahandler(raw) {
	stuff = raw;
	parser(stuff);
}

var tweetNum = 0;

function nextTweet() {
	tweetNum += 1;
	parser(stuff);
}

function parser(data) {
	document.getElementById("tweets").innerHTML = "<p class='tweet'>" + data.statuses[tweetNum].text + "</p>";
}