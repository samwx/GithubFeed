# Github Feed

Display your latest github repositories with lightweight and pure JavaScript! [See demo](http://samuelmartins.me/githubfeed)

## Basic usage

1. Call `githubFeed.js` preferably right before the `</body>` tag:

```html
<script src="assets/js/githubFeed.js"></script>
```

2. Add the code below into your HTML. The repositories will appear in this tag;

```html
<div id="github-feeds"></div>
```

3. Copy/paste code bellow and be happy! :D

```javascript
GithubFeed.init({
    username: 'username',       //github username
	container: '#github-feeds', //DOM element to bind
	count: 3, 				    //Number of repositories you'll want to show
	order: 'desc', 			    //Order to show
	onComplete: function() { 
		console.log('Yeah!');   //Callback to execute after function init
	}
});
```