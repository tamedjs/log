import * as Log4js from './lib/index.js';

const state = {
  list: [],
  main: null,
}

export function create (args = {}) {
  const { group = 'system', toConsole = false } = args;
  const log = new Log4js.Logger(group);

  if (!state.main) { state.main = log; }
  state.list.push (log);

  if (state.list.indexOf (log) === -1) {
    // window.console.log ('- created log:', group);
    log.setLevel(Log4js.LogLevel.OFF);
  }

  if (toConsole) {
    let appender = new Log4js.ConsoleAppender (true);
    log.addAppender (appender);
  }

  return log;
}

// function init () {
//   const log = create ({ toConsole: true });
//   return log;
// }

export const systemConsole = create ({ toConsole: true });
// systemConsole.log = function () {
//   systemConsole.info.apply (systemConsole, [].slice.call (arguments));
// }

export default Log4js;
export * from './lib/index.js';

