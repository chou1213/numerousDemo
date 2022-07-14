define(['require'], (function (require) { 'use strict';

  new Promise(function (resolve, reject) { require(['./utils-da7b37ec'], resolve, reject); }).then(({num ,log}) => {
    console.log(num);
    log();
  });

}));
