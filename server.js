require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cheerio = require('cheerio');

const app = express();

// app.use(express.json());
app.use(cors());
app.use(express.static('public'));

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
  console.log({ message: 'this console.log' });
  res.redirect('/');
});

app.get('/news', (req, res) => {
  res.status(200).json(app.locals.news);
});

async function getNews() {
  const article_data = [];

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
      app.locals.news = article_data;
      return app.locals.news;
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
  console.log(`Server has started..! on port: http://localhost:${process.env.PORT || 3333}`);
});
