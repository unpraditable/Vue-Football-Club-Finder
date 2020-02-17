# Vue-Football-Club-Finder
Football Club Finder created with Vue JS framework. People can search it based on the area (countries) and competitions.
Created using https://www.football-data.org/ API for Free User.

## Project setup
First, clone this project via https:
```
git clone https://github.com/unpraditable/Vue-Football-Club-Finder.git
```
After you clone it, navigate to the folder where you clone the project
```
cd vue-football-club-finder
```

Then, install all dependencies in this folder
```
npm install
```

After that, you can run this project
```
npm run serve
```

Then, open the project with your browser at the localhost (usually, it will be http://localhost:8080/ )

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Extra Works & Limitations
1. Separate the continents into the main area at the homepage. I think it is necessary to limit the number of country.
2. Show only the continents/area that has a country, because I think it will be helpful for user.
3. Because of free plan limited requests to only 10 requests per minute, I only show clubs with plan = TIER_ONE for every country.
4. For best results, I suggest to test to search teams from top leagues firsts (England, Italy, Germany, Spain, France)

### Improvement Plans
1. Show empty message if a country has no football clubs inside club list page
2. Show unique colors for each club in club list page and club detail page
3. Add filter input
4. Add breadcrumbs
5. Fix messy and unorganized URLs

### Testing Environment (in General)
So far, this project runs well with latest version of Google Chrome and Safari browser. Opened in MacBook Air with FirstMedia internet connection.
