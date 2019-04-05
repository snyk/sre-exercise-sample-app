function hugeObject() {
  const howBig = Math.random() * 199999;
  const subObject = (depth) => {
    if (depth < 1) { return; }
    return {
      name: `Hello world ${depth}`,
      sub: subObject(depth-1),
    };
  };

  const hugeObject = {};
  for (let i = 0; i < howBig; i++) {
    hugeObject[i] = subObject(Math.random() * 10);
  }

  return hugeObject;
}

module.exports = hugeObject;
