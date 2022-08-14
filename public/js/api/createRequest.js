/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  console.log(`createRequest.js: options`);
  console.log(options);
  
  const method = options.method;
  console.log(options.method);
  let requestUrl = '';
  if (method === 'GET') {
    console.log(`method get`);
    requestUrl = options.url + '?mail=' + options.data.email + '&password=' + options.data.password;
    console.log(requestUrl);
  }
  if (method === 'POST') {
    console.log(`method post`);
    requestUrl = options.url;
    console.log(requestUrl);
  }

  const xhr = new XMLHttpRequest();

  xhr.open(method, requestUrl);
  xhr.responseType = 'json';
  xhr.send();

};
 