var GithubFeed = {
	init: function(config) {
		this.count = config.count || 0;
		this.order = config.order || 'desc';
		this.url = 'https://api.github.com/users/'+config.username +'/repos?per_page='+ this.count +'&sort=created&direction='+ this.order;
		this.container = config.container;
		this.onComplete = config.onComplete || function () {};
		this.fetch();
	},

	xmlHttp: function(){
		return new XMLHttpRequest();
	},

	objJSON: function(options, callback) {
		var self = this;

		var xhttp = self.xmlHttp();
		options.url = options.url || location.href;
		xhttp.open("GET", options.url, true);
		xhttp.send( null );

		xhttp.onreadystatechange = function () {
			if (xhttp.status === 200 && xhttp.readyState === 4) {
				callback(xhttp.responseText);
			}
        };
	},
	getCache: function(data) {

	},
	setCache: function(data) {
		if (window.sessionStorage) {
			window.sessionStora.setItem = data;
		}
	},
	bindTemplate: function(name, description, url, starCount) {
		var container = '';

		container += '<div class="repo-container">';
		container += '<h3 class="repo-name"><a href="' + url + '">' + name + '</a></h3>';
		container += '<div class="repo-description">' + description + '</div>';
		container += '</div>';

		return container;
	},

	fetch: function() {
		var self = this;

		self.objJSON({url: self.url}, function(response) {
			var repos     = JSON.parse(response),
					reposList = document.querySelector(self.container),
					content   = '',
					i;

			for(i = 0; i < repos.length; i++) {
				content += self.bindTemplate(repos[i].name, repos[i].description, repos[i].svn_url, repos[i].stargazers_count);
			}

			reposList.innerHTML = content;

			self.onComplete();
		});
	}
};
