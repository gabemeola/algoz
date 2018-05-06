const { performance } = require('perf_hooks')


const profile = (wrappedFunction) => (...args) => {
  const t0 = performance.now();
  const result = wrappedFunction(...args);
  const t1 = performance.now();
  console.log(`[profile] ${wrappedFunction.name} took ${(t1 - t0).toFixed(4)}ms to execute`)
  return result;
}


module.exports = profile;
