# loklak webtweets

FOSSASIA Tweets with loklak: Implement Webtweets with loklak

**Objective of the mini project**

Implement web tweets with loklak and substitute the implementation with twitter. Improve former implementations and reduce dependencies on additional files in repositories as much as possible. Make use of anonymous loklak API at http://loklak.org/api.html

**Requirements**

- use loklak API at http://loklak.org/api.html
- 

**Expected Outcome**

- substitution of twitter implementation with loklak and accepted pull request
- improvement of implementation e.g. possibility to call API with several hashtags, search term, specific accounts, time limit etc.

**Links**

- loklak API http://loklak.org/api.html
- Repository https://github.com/fossasia/fossasia-loklak-webtweets
- Sample http://fossasia.github.io/fossasia-loklak-webtweets/

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