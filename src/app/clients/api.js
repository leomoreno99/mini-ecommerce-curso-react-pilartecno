const get = async (url) => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (e) {
    throw new Error(e);
  }
};

const post = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: body,
    });
    return res.json();
  } catch (e) {
    throw new Error(e);
  }
};

const api = {
  get: (url) => get(url),
  post: (url, body) => post(url, body),
};

export default api;
