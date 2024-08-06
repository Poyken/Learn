function getA(callback) {
  (function () {
    console.log("getA");
    callback();
  })();
}
function getB(callback) {
  (function () {
    console.log("getB");
    callback();
  })();
}
function getC(callback) {
  (function () {
    console.log("getC");
    callback();
  })();
}
getC(function () {
  getB(function () {
    getA(function () {});
  });
});
