function datafetcher(key) {
	loklakFetcher.getTweets(key, {}, datahandler);
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
	document.getElementById("tweet").style.opacity =  0;
	window.setTimeout(parseFunc, 560);
}
function lastTweet() {
	if (tweetNum > 0) {
		tweetNum -= 1;
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
				parsed += "<a href='" + words[word] + "' target='_blank'>" + words[word] + "</a> ";
			}
		} else {
			parsed += words[word] + " ";
		}
	}
	document.getElementById("tweet").innerHTML =  parsed;
	document.getElementById("tweet").style.opacity =  1;
}