const apiKey = "gg05jJCm5RdJaWeTG3ngzSsbFkIOGSTE";

// Access to individual objects by ID
const objectBaseURL = "https://api.nytimes.com/svc/archive/v1/";

var dat = [];
var newsdesk_dat = [];
var dates = ["2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10"];
var month_dat = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
var month_dat_rand = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

//fetches content based on id of an object.
async function fetchContentDataById(id) {
    let url = objectBaseURL + id + ".json?api-key=" + apiKey;
    const response = await fetch(url);
    const articles = await response.json();
    return articles;
}

fetchContentDataById("2020/1").then(articles => {
    dat = dat.concat(articles.response.docs);
    dat.forEach(function(d, i) {
        if (d.news_desk == "Express") {
            newsdesk_dat.push(d);
        }
    })
    fetchContentDataById("2020/2").then(articles => {
        dat = dat.concat(articles.response.docs);
        dat.forEach(function(d, i) {
            if (d.news_desk == "Express") {
                newsdesk_dat.push(d);
            }
        })
        fetchContentDataById("2020/3").then(articles => {
            dat = dat.concat(articles.response.docs);
            dat.forEach(function(d, i) {
                if (d.news_desk == "Express") {
                    newsdesk_dat.push(d);
                }
            })
            fetchContentDataById("2020/4").then(articles => {
                dat = dat.concat(articles.response.docs);
                dat.forEach(function(d, i) {
                    if (d.news_desk == "Express") {
                        newsdesk_dat.push(d);
                    }
                })
                fetchContentDataById("2020/5").then(articles => {
                    dat = dat.concat(articles.response.docs);
                    dat.forEach(function(d, i) {
                        if (d.news_desk == "Express") {
                            newsdesk_dat.push(d);
                        }
                    })
                    fetchContentDataById("2020/6").then(articles => {
                        dat = dat.concat(articles.response.docs);
                        dat.forEach(function(d, i) {
                            if (d.news_desk == "Express") {
                                newsdesk_dat.push(d);
                            }
                        })
                        fetchContentDataById("2020/7").then(articles => {
                            dat = dat.concat(articles.response.docs);
                            dat.forEach(function(d, i) {
                                if (d.news_desk == "Express") {
                                    newsdesk_dat.push(d);
                                }
                            })
                            fetchContentDataById("2020/8").then(articles => {
                                dat = dat.concat(articles.response.docs);
                                dat.forEach(function(d, i) {
                                    if (d.news_desk == "Express") {
                                        newsdesk_dat.push(d);
                                    }
                                })
                                fetchContentDataById("2020/9").then(articles => {
                                    dat = dat.concat(articles.response.docs);
                                    dat.forEach(function(d, i) {
                                        if (d.news_desk == "Express") {
                                            newsdesk_dat.push(d);
                                        }
                                    })
                                    fetchContentDataById("2020/10").then(articles => {
                                        dat = dat.concat(articles.response.docs);
                                        dat.forEach(function(d, i) {
                                            if (d.news_desk == "Express") {
                                                newsdesk_dat.push(d);
                                            }
                                        })

                                        let str1, str2;
                                        newsdesk_dat.forEach(function(d) {
                                            dates.forEach(function(month_d, i) {
                                                str1 = month_d;
                                                str2 = d.pub_date.substr(0, 7);
                                                if (str1 == str2) {
                                                    month_dat[i].push(d);
                                                }
                                            })
                                        });
                                        console.log("str build complete");

                                        month_dat.forEach(function(d, i) {
                                            var arr = [];
                                            while (arr.length < 30) {
                                                var r = getRandomInt(0, d.length);
                                                if (arr.indexOf(r) === -1) {
                                                    try {
                                                        month_dat[i][r].multimedia[0].url;
                                                        arr.push(r);
                                                    } catch (err) {}
                                                }
                                            }
                                            arr.forEach(function(rand_d) {
                                                month_dat_rand[i].push(month_dat[i][rand_d]);
                                            })
                                        });

                                        month_dat_rand.forEach(function(d, i) {
                                            d.forEach(function(rand_d, rand_i) {
                                                let y = pos_y[i];
                                                let x = pos_x[rand_i];
                                                let imgid = '#img' + y + x;
                                                let xytop = '#rect' + y + x + 'top';
                                                let xymid = '#rect' + y + x + 'mid';
                                                let xybot = '#rect' + y + x + 'bot';

                                                d3.select(imgid).attr('xlink:href', 'https://static01.nyt.com/' + rand_d.multimedia[0].url)
                                                    .on('mouseover', function() {
                                                        let prev = document.getElementById('preview')
                                                        prev.src = 'https://static01.nyt.com/' + rand_d.multimedia[0].url
                                                        let cap = document.getElementById('caption')
                                                        cap.innerHTML = rand_d.abstract
                                                        let title = document.getElementById('title')
                                                        title.innerHTML = rand_d.headline.main
                                                        d3.select(imgid)
                                                        .attr('border', 1)
                                                        .attr('stroke', 'black')
                                                        .attr('opacity', 1)
                                                    })
                                                    .on('mouseout', function() {
                                                        d3.select(imgid)
                                                        .attr('border', 0)
                                                        .attr('stroke', 'white')
                                                        .attr('opacity', 0.5)
                                                    })
                                                    .on('click', function() {
                                                        window.open(rand_d.web_url)
                                                    })

                                                d3.select(xytop)
                                                    .on('mouseover', function() {
                                                        let prev = document.getElementById('preview')
                                                        prev.src = 'https://static01.nyt.com/' + rand_d.multimedia[0].url
                                                        let cap = document.getElementById('caption')
                                                        cap.innerHTML = rand_d.abstract
                                                        let title = document.getElementById('title')
                                                        title.innerHTML = rand_d.headline.main
                                                        d3.select(xytop)
                                                        .attr('stroke', "#333333")
                                                        .attr('stroke-width', 5)
                                                        .attr('opacity', 0.5)
                                                    })
                                                    .on('mouseout', function() {
                                                        let cap = document.getElementById('caption')
                                                        cap.innerHTML = ">>>>Hover over color blocks to read the article"
                                                        let title = document.getElementById('title')
                                                        title.innerHTML = ">>>Hmmm, Interesting"
                                                        d3.select(xytop)
                                                        .attr('stroke-width', 0)
                                                        .attr('opacity', 1)
                                                        
                                                    })
                                                    .on('click', function() {
                                                        window.open(rand_d.web_url)
                                                    })
                                                d3.select(xymid)
                                                    .on('mouseover', function() {
                                                        let prev = document.getElementById('preview')
                                                        prev.src = 'https://static01.nyt.com/' + rand_d.multimedia[0].url
                                                        let cap = document.getElementById('caption')
                                                        cap.innerHTML = rand_d.abstract
                                                        let title = document.getElementById('title')
                                                        title.innerHTML = rand_d.headline.main
                                                        d3.select(xymid)
                                                        .attr('stroke', "#333333")
                                                        .attr('stroke-width', 5)
                                                        .attr('opacity', 0.5)
                                                    })
                                                    .on('mouseout', function() {
                                                        let cap = document.getElementById('caption')
                                                        cap.innerHTML = ">>>>Hover over color blocks to read the article"
                                                        let title = document.getElementById('title')
                                                        title.innerHTML = ">>>Hmmm, Interesting"
                                                        d3.select(xymid)
                                                        .attr('stroke-width', 0)
                                                        .attr('opacity', 1)
                                                    })
                                                    .on('click', function() {
                                                        window.open(rand_d.web_url)
                                                    })
                                                d3.select(xybot)
                                                    .on('mouseover', function() {
                                                        let prev = document.getElementById('preview')
                                                        prev.src = 'https://static01.nyt.com/' + rand_d.multimedia[0].url
                                                        let cap = document.getElementById('caption')
                                                        cap.innerHTML = rand_d.abstract
                                                        let title = document.getElementById('title')
                                                        title.innerHTML = rand_d.headline.main
                                                        d3.select(xybot)
                                                        .attr('stroke', "#333333")
                                                        .attr('stroke-width', 5)
                                                        .attr('opacity', 0.5)
                                                    })
                                                    .on('mouseout', function() {
                                                        let cap = document.getElementById('caption')
                                                        cap.innerHTML = ">>>>Hover over color blocks to read the article"
                                                        let title = document.getElementById('title')
                                                        title.innerHTML = ">>>Hmmm, Interesting"
                                                        d3.select(xybot)
                                                        .attr('stroke-width', 0)
                                                        .attr('opacity', 1)
                                                    })
                                                    .on('click', function() {
                                                        window.open(rand_d.web_url)
                                                    })

                                                var img = document.createElement('img');
                                                img.src = 'https://static01.nyt.com/' + rand_d.multimedia[0].url;
                                                var src = document.getElementById('main');
                                                src.appendChild(img);

                                                const colorThief = new ColorThief();
                                                let palette = [];

                                                img.crossOrigin = '';
                                                if (img.complete) {
                                                    palette = colorThief.getPalette(img);

                                                    let color1 = 'rgba(' + palette[0][0] + ', ' + palette[0][1] + ', ' + palette[0][2] + ', 1)'
                                                    let color2 = 'rgba(' + palette[1][0] + ', ' + palette[1][1] + ', ' + palette[1][2] + ', 1)'
                                                    let color3 = 'rgba(' + palette[2][0] + ', ' + palette[2][1] + ', ' + palette[2][2] + ', 1)'

                                                    d3.select(xytop).attr('fill', color1);
                                                    d3.select(xymid).attr('fill', color2);
                                                    d3.select(xybot).attr('fill', color3);

                                                    src.removeChild(img);
                                                } else {
                                                    img.addEventListener('load', function() {
                                                        palette = colorThief.getPalette(img);

                                                        let color1 = 'rgba(' + palette[0][0] + ', ' + palette[0][1] + ', ' + palette[0][2] + ', 1)'
                                                        let color2 = 'rgba(' + palette[1][0] + ', ' + palette[1][1] + ', ' + palette[1][2] + ', 1)'
                                                        let color3 = 'rgba(' + palette[2][0] + ', ' + palette[2][1] + ', ' + palette[2][2] + ', 1)'

                                                        d3.select(xytop).attr('fill', color1);
                                                        d3.select(xymid).attr('fill', color2);
                                                        d3.select(xybot).attr('fill', color3);

                                                        src.removeChild(img);
                                                    });
                                                }
                                            })
                                        });
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}