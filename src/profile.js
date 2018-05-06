const { performance } = require('perf_hooks')


const profile = (wrappedFunction) => (...args) => {
  const t0 = performance.now();
  const result = wrappedFunction(...args);
  const t1 = performance.now();

  const [ firstArg = '', nextArg ] = args;
  const consoleArg = typeof nextArg !== 'undefined'
      ? `${firstArg} ...`
      : firstArg
  const consoleResult = result || 'void'
  console.log(`[profile] ${wrappedFunction.name || 'anon'}(${consoleArg}) => ${consoleResult} took ${(t1 - t0).toFixed(4)}ms to execute.`)
  return result;
}


module.exports = profile;
