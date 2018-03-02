const TeleBot = require("telebot");
const bot = new TeleBot("464437322:AAHL4K-FyOtglauma0rYy6RBUMC1nic6_rc");
const request = require("request");
const _ = require('lodash');
const r = require('./r');

class Bot {

  getName() {
    if (this.last_name) {
      return `${this.first_name} ${this.last_name}`;
    } else {
      return `${this.first_name}`;
    }
  }

  getCoins() {
    const opt = {
      url: 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
    }
    return r.get(opt);
  }

  listCoins(msg, coins) {
    let text;
    _.forEach(coins, (coin) => {
      text += `${coin.rank} ${coin.symbol} - $${coin.price_usd} - vol ${coin.market_cap_usd} \n`;
    });
    console.log(text);
    return msg.reply.text(text);
  }

  introduceYourself() {
    console.log(
      `Hello, my name is ${this.getName()}. You can talk to me through my username: @${
        this.username
      }`
    );
  }
}

TOKEN = '464437322:AAHL4K-FyOtglauma0rYy6RBUMC1nic6_rc';
// const b = new Bot()
// b.init(TOKEN).then(() => {
//   b.introduceYourself()
// })

bot.on(["/start", "/hello"], msg => msg.reply.text("Welcome!"));

bot.on(["/top"], msg => {
  const b = new Bot();
  return b.getCoins().then((coins) => {
    // console.log("Got here");
    // return b.listCoins(msg, coins);
    let text = '';
    const c = JSON.parse(coins);
    for(let i = 0; i < c.length; i++) {
      const coin = c[i];
      text += `${coin.rank} ${coin.symbol} - $${coin.price_usd} - vol ${coin.market_cap_usd} \n`;
    }
    text += '\n \n';
    text += 'Source: https://coinmarketcap.com';
    return msg.reply.text(text);
  }, err => console.log(err));
});

bot.start();
