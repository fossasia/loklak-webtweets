# loklak webtweets

FOSSASIA Tweets with loklak: Implement Webtweets with loklak

**Objective of the mini project**

Implement web tweets with loklak and substitute the implementation with twitter. Improve former implementations and reduce dependencies on additional files in repositories as much as possible. Make use of anonymous loklak API at http://api.loklak.org

**Requirements**

- use loklak API at http://api.loklak.org

**Expected Outcome**

- substitution of twitter implementation with loklak and accepted pull request
- improvement of implementation e.g. possibility to call API with several hashtags, search term, specific accounts, time limit etc.

**Links**

- loklak API http://api.loklak.org
- Repository https://github.com/fossasia/loklak-webtweets
- Sample http://fossasia.github.io/loklak-webtweets/

**Directions**
- To change the number of tweets being recycled, change the *data-count* attribute in the HTML of the div with class "tweets-feed". To change the query, change the *data-query* attribute to preference.  
- To require specific users and hashtags to be in the tweets, add a @ or # sign in front of the word, respectively. Separate each word by a space.  
- To require the tweet to be in a timeframe of days, add the attributes below to the "tweets-feed class":  

```
data-start='YYYY-MM-DD' 
data-end='YYYY-MM-DD'
```
- To filter out tweets from one user, add the *data-from* attribute.  

An example of the attributes:  
`<div class="tweets-feed" id="tweets" data-count=50 data-query="fossasia #googlecodein" data-start="2015-12-08" data-end="2016-01-14"  data-from="fossasia">`

**Client-side Tweets control**

You can allow your viewers to control the tweets div in compliance to the controls detailed above by doing the following modifications:

Add the following to the end of `index.html` file, just before the closing `<body> tag:

```html
  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Loklak Settings</h4>
        </div>
        <div class="modal-body">
          <div class="form-group">
              <label for="query">Query:</label>
              <input class="form-control" value="fossasia #gci" id="query">
            </div>
            <div class="form-group">
              <label for="result-count">Results Count:</label>
              <input class="form-control" value="50" id="result-count">
            </div>
            <div class="form-group">
              <label for="tweet-from">Tweets From:</label>
              <input class="form-control" value="" id="tweet-from">
            </div>
            <div class="form-group">
              <label for="tweet-from-date">Tweet From Date:</label>
              <input class="form-control" value="2016-01-01" type="date" id="tweet-from-date">
            </div>
            <div class="form-group">
              <label for="tweet-to-date">Tweet To Date:</label>
              <input class="form-control" value="2016-01-18" type="date" id="tweet-to-date">
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="submit-btn" class="btn btn-default" data-dismiss="modal">Submit</button>
        </div>
      </div>
      
    </div>
  </div>
  <script type="text/javascript">
  	$('#submit-btn').click(function(e){
  		var from = $('#tweet-from-date');
		var to = $('#tweet-to-date');
  		var date1 = new Date(from[0].value);
		var date2 = new Date(to[0].value);
		var timeDiff = Math.abs(date2.getTime() - date1.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
		if (diffDays < 5){
			alert('Kindly provide a difference of more than 4 days between the two dates.')
		} else {
  			$('#tweets').attr('data-query', $('#query')[0].value);
  			$('#tweets').attr('data-start', $('#tweet-from-date')[0].value);
  			$('#tweets').attr('data-end', $('#tweet-to-date')[0].value);
  			$('#tweets').attr('data-from', $('#tweet-from')[0].value);
  			console.log($('#tweets').data());
  			clearInterval(interval_id);
  			$('#tweet')[0].innerHTML = 'Loading...';
  			$('#tweet-info')[0].innerHTML = 'Fetching tweets...';
  			datafetcher();
  		}
  	})
  </script>
```

And replace the following line:

```
<i class="icon social_twitter text-white"></i>
```

with this:

```
<a class="twitter-logo" data-toggle="modal" href="#myModal"><i class="icon social_twitter text-white"></i></a>
```
