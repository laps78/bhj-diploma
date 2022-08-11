/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  console.log(`createRequest.js:`);
  console.log(options);
  
  const method = options.method;
  const requestUrl = options.url;
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.responseType = 'json';
  //xhr.send();
};
 