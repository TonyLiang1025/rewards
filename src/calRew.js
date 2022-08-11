const calRew = (price) => {
  let rewards = 0;
  if (price > 100) {
    return rewards = (price - 100) * 2 + 50;
  }
  if (price > 50) {
    return rewards = rewards + (price - 50);
  }
  return rewards;
};

module.exports = calRew;
