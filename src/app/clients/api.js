const execute = async (url, config) => {
  try {
    const res = await fetch(url, config = {});
    return res.json();
  } catch (e) {
    throw new Error(e);
  }
}

const get = async (url) => {
  return execute(url)
};

const post = async (url, body) => {
  return execute(url, {
    method: "POST",
    body: body,
  })
};

const put = async (url, body) => {
 return execute (url, {
  method: "PUT",
  body: body,
})
};

const delet = async (url) => {
 return execute(url, {
  method: "DELETE",
})
};

const api = {
  get: (url) => get(url),
  delete: (url) => delet(url),
  post: (url, body) => post(url, body),
  put: (url, body) => put(url, body),
};

export default api;
