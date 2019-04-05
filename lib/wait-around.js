async function waitAround(delay) {
  const stop = Date.now() + delay;
  while (Date.now() < stop) {
    // wait around a bit
  }
}

module.exports = waitAround;
