const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.gray('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {
  // Called whenever there's an error on the server we want to print
  error: (err : any) => {
    console.error(chalk.red(err));
  },
  
  // Called when express.js app starts on given port w/o errors
  appStarted: (port : any, host : any) => {
    console.log(divider)
    console.log(`${chalk.yellow(`The magic happens on port:`)} ${chalk.red(port)} ${chalk.green('✓')}`);
    console.log(divider)
    console.log(`
${chalk.bold('Access URLs:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  }
};

module.exports = logger;