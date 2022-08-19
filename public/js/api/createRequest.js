/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {  
  const method = options.method;
  const formData = new FormData;
  let requestUrl = '';
  
  if (method === 'GET') {
    for (let key in options.data) {
      requestUrl = options.url + '?' + key + '=' + options.data[key] + '&';
    }
  } else {
    for (let key in options.data) {
      formData.append(key, options.data[key]);
    };
  }

  const xhr = new XMLHttpRequest();
  xhr.open(method, options.url + requestUrl);
  xhr.responseType = 'json';
  if (formData.length !== 0) {
    xhr.send(formData);
  } else {
    xhr.send();
  };  
};
 