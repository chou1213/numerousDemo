(function (modules) {
  var installedModules = {}; // 声明了一个对象
  function __webpack_require__(moduleId) {
    // 判断installedModules对象，key为moduleId，有没有值
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // 把moudleId存入installedModules对象,其值是一个对象，对象里面有三个属性
    // 同时把这个对象复制给module变量
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });
    // NOTE其实调用了modules数组中key为moduleId的函数，先不管call传入了什么参数
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules; // 把入参保存到静态变量中
  __webpack_require__.c = installedModules; // 把对象保存到静态变量中
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", { enumerable: true, value: value });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__((__webpack_require__.s = 0)); // 调用了__webpack_require__
})([
  /* 0 */
  function (module, exports) {
    function component() {
      let element = document.createElement("div");
      element.innerHTML = "hello world";
      return element;
    }
    document.body.appendChild(component());
  },
]);
