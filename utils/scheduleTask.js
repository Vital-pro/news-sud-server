const cron = require('node-cron');

function scheduleTask(task) {
  const now = new Date();
  const nowDay = now.getDay();
  const nowHour = now.getHours();
  const nowMinute = now.getMinutes();
  const nowSecond = now.getSeconds();

  // Wednesday
  cron.schedule(`11 7 * * 3`, task);
  cron.schedule(`32 9 * * 3`, task);
  cron.schedule(`10 41 10 * * 3`, task);
  cron.schedule(`33 18 11 * * 3`, task);
  cron.schedule(`41 54 11 * * 3`, task);
  cron.schedule(`30 33 12 * * 3`, task);
  cron.schedule(`21 11 13 * * 3`, task);
  cron.schedule(`21 14 * * 3`, task);
  cron.schedule(`27 34 15 * * 3`, task);

  //Thursday
  cron.schedule(`14 9 * * 4`, task);
  cron.schedule(`31 43 10 * * 4`, task);
  cron.schedule(`44 13 12 * * 4`, task);
  cron.schedule(`37 48 13 * * 4`, task);
  cron.schedule(`11 29 14 * * 4`, task);
  cron.schedule(`7 15 * * 4`, task);
  cron.schedule(`13 16 * * 4`, task);
}

module.exports = scheduleTask