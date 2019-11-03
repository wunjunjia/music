export function serialize(data) {
  const arr = [];
  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; ++i) {
        arr.push(`${key}=${value[i]}`);
      }
    } else {
      arr.push(`${key}=${value}`);
    }
  });
  return arr.join('&');
}

export function jsonp(url, data = {}, key = 'jsonpCallback') {
  return new Promise((resolve, reject) => {
    try {
      const tag = document.createElement('script');
      const callback = `callback_${Date.now()}`;
      window[callback] = (result) => {
        delete window[callback];
        document.body.removeChild(tag);
        resolve(result);
      };
      const target = `${url}?${serialize(Object.assign({}, data, { [key]: callback }))}`;
      tag.src = target;
      document.body.appendChild(tag);
    } catch (e) {
      reject(e);
    }
  });
}

export function debounce(fn, delay = 100) {
  let flag = false;
  return function (...args) {
    if (flag) return;
    flag = true;
    const timer = setTimeout(() => {
      clearTimeout(timer);
      flag = false;
      fn.apply(this, args);
    }, delay);
  };
}
