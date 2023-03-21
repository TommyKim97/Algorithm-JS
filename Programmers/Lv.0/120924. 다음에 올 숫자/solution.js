const solution = (common) => {
  let len = common.length;
  if (common[1] - common[0] === common[2] - common[1]) {
    return common[len - 1] * 2 - common[len - 2];
  } else if (common[1] / common[0] === common[2] / common[1]) {
    return common[len - 1] ** 2 / common[len - 2];
  }
};
