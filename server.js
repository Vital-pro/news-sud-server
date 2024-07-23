require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cheerio = require('cheerio');
const fs = require('fs');
const scheduleTask = require('./utils/scheduleTask');

const app = express();

// app.use(express.json());
app.use(cors());
app.use(express.static('public'));

//***start***CRON***** */
const interval = 10000;
function cron(ms, fn) {
  async function cb() {
    clearTimeout(timeout);
    await fn();
    setTimeout(cb, ms);
  }
  let timeout = setTimeout(cb, ms);
  // return () => clearTimeout(timeout);
  return () => { };
}
//***finish***CRON****** */

app.get('/entry', (req, res) => {
  // res.sendFile('./public/index.html', { root: __dirname });
  if (req.query.url == process.env.ENTRY_KEY) {
    res.sendFile('./public/index1.html', { root: __dirname });
  } else {
    res.status(400).json({
      message: 'Bad Request',
    });
  }
});

app.get('/start', (req, res) => {
  getNews();
  scheduleTask(getNews);
  // cron(interval, () => getNews()); //! раскомментить и запустится crone
  res.redirect('/');
});

app.get('/news', (req, res) => {
  res.status(200).json(app.locals.news);
});

async function getNews() {
  const article_data = [];
  const date = String(new Date());

  try {
    const response = await fetch(process.env.URL_SITE);
    const html = await response.text();
    const $ = cheerio.load(html);

    const articles_all = $('section > .grid > .grid-item');

    articles_all.each(function () {
      let title = $(this).find('.content > a > span').text();
      let titleBig = $(this).find('.content > a > h2').text();
      let imageUrl = $(this).find('img').attr('data-realsrc');
      let imageUrlBig = $(this).find('.bgc-image').attr('data-realsrc');
      let link = $(this).find('.content > a').attr('href');
      article_data.push({
        title: title || titleBig,
        imageUrl: imageUrl || imageUrlBig,
        link,
      });
    });

    fs.appendFile('datelog.txt', `\n${date}`, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

    app.locals.news = article_data;
    console.log(app.locals.news);
    return app.locals.news;

  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}

app.listen(process.env.PORT || 3333, () => {
  console.log(
    `Server has started..! on port: http://localhost:${
      process.env.PORT || 3333
    }`
  );
});
