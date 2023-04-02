const solution = (chicken) => {
  let freeChicken = 0;

  while (chicken >= 10) {
    freeChicken += Math.floor(chicken / 10);
    chicken = (chicken % 10) + Math.floor(chicken / 10);
  }
  return freeChicken;
};
