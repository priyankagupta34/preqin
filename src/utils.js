const capitalise = (value) => {
  return value
    .split("_")
    .map((val) => val[0].toUpperCase() + val.slice(1).toLowerCase())
    .join(" ");
};

export { capitalise };
