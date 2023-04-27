"use strict";

var _Swiper;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var swiper = new Swiper(".swiper", (_Swiper = {
  loop: true,
  // ループ有効
  slidesPerView: 5,
  // 一度に表示する枚数
  speed: 6000,
  // ループの時間
  allowTouchMove: false,
  // スワイプ無効
  autoplay: {
    delay: 0 // 途切れなくループ
  }
}, _defineProperty(_Swiper, "slidesPerView", 1), _defineProperty(_Swiper, "breakpoints", {
  // スライドの表示枚数：500px以上の場合
  500: {
    slidesPerView: 3
  }
}), _Swiper));