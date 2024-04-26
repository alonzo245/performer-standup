export const download = () => {};

export const parseQueryString = (queryString) => {
  const queryParameters: any = new URLSearchParams(queryString);

  const params = {};

  for (const [key, value] of queryParameters) {
    if (params.hasOwnProperty(key)) {
      if (Array.isArray(params[key])) {
        params[key].push(value);
      } else {
        params[key] = [params[key], value];
      }
    } else {
      params[key] = value;
    }
  }

  return params;
};
