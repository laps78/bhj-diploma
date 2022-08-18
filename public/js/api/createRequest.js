/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  console.log(`createRequest.js: options`);
  console.log(options);
  
  const method = options.method;
  console.log(options.method);
  //make GET request
  let requestUrl = '';
  if (method === 'GET') {
    console.log(`method get`);
    requestUrl = options.url + '?mail=' + options.data.email + '&password=' + options.data.password;
    console.log(requestUrl);
  } else {
    //create FormData
    const formData = new FormData();
  }
 
  const xhr = new XMLHttpRequest();

  xhr.open(method, requestUrl);
  xhr.responseType = 'json';
  xhr.send();

};
 