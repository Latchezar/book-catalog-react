export const ParamByName = (name, query) => {
  if (query.includes(name)) {
    let result = query.split(`${name}=`).pop();
    if (result.includes("&")) {
      result = result.split("&").push();
    }
    return result;
  }
  return undefined;
};
