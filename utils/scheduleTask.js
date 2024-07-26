const cron = require('node-cron');

function scheduleTask(task) {
  const now = new Date();
  const nowDay = now.getDay();
  const nowHour = now.getHours();
  const nowMinute = now.getMinutes();
  const nowSecond = now.getSeconds();

  // Monday
  cron.schedule('19 38 8 * * 1', task);
  cron.schedule('43 12 9 * * 1', task);
  cron.schedule('3,42 10 * * 1', task);
  cron.schedule('13,51 11 * * 1', task);
  cron.schedule('16,58 12 * * 1', task);
  cron.schedule('37 41 13 * * 1', task);
  cron.schedule('22 40 14 * * 1', task);
  cron.schedule('12 22 15 * * 1', task);
  cron.schedule('4 39 16 * * 1', task);

  // Tuesday
  cron.schedule('11 42 8 * * 2', task);
  cron.schedule('17 28 9 * * 2', task);
  cron.schedule('11,54 10 * * 2', task);
  cron.schedule('22,50  11 * * 2', task);
  cron.schedule('16,57 12 * * 2', task);
  cron.schedule('10 35 13 * * 2', task);
  cron.schedule('40 28 14 * * 2', task);
  cron.schedule('42 11 15 * * 2', task);
  cron.schedule('21 9 16 * * 2', task);

  // Wednesday
  cron.schedule(`10 51 8 * * 3`, task);
  cron.schedule(`50 32 9 * * 3`, task);
  cron.schedule(`10 41 10 * * 3`, task);
  cron.schedule(`33 18 11 * * 3`, task);
  cron.schedule(`13 54 11 * * 3`, task);
  cron.schedule(`30 33 12 * * 3`, task);
  cron.schedule(`22 41 13 * * 3`, task);
  cron.schedule(`10 55 14 * * 3`, task);
  cron.schedule(`27 28 15 * * 3`, task);
  cron.schedule(`45 39 16 * * 3`, task);

  //Thursday
  cron.schedule(`11 4 9 * * 4`, task);
  cron.schedule(`31 43 10 * * 4`, task);
  cron.schedule(`44 13 12 * * 4`, task);
  cron.schedule(`37 48 13 * * 4`, task);
  cron.schedule(`11 27 14 * * 4`, task);
  cron.schedule(`44 7 15 * * 4`, task);
  cron.schedule(`3 13 16 * * 4`, task);

  // Friday
  cron.schedule(`4 32 9 * * 5`, task);
  cron.schedule(`10 41 10 * * 5`, task);
  cron.schedule(`33 18 11 * * 5`, task);
  cron.schedule(`41 34 12 * * 5`, task);
  cron.schedule(`30 57 13 * * 5`, task);
  cron.schedule(`21 43 14 * * 5`, task);
  cron.schedule(`9 59 15 * * 5`, task);

  // Saturday
  cron.schedule(`50 26 9 * * 6`, task);
  cron.schedule(`10 41 10 * * 6`, task);
  cron.schedule(`52 13 12 * * 6`, task);
  cron.schedule(`10 28 13 * * 6`, task);
  cron.schedule(`47 44 15 * * 6`, task);

  // Sunday
  cron.schedule(`50 32 9 * * 0`, task);
  cron.schedule(`2 14 11 * * 0`, task);
  cron.schedule(`50 43 12 * * 0`, task);
  cron.schedule(`19 39 14 * * 0`, task);
  cron.schedule(`30 7 16 * * 0`, task);
}

module.exports = scheduleTask;