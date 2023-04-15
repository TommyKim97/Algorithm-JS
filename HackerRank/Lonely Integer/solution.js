const lonelyinteger = (a) => {
  for (let int of a) {
    if (a.indexOf(int) === a.lastIndexOf(int)) return int;
  }
};
