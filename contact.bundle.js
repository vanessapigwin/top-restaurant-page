"use strict";
(self["webpackChunktop_restaurant_page"] = self["webpackChunktop_restaurant_page"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeContact: () => (/* binding */ makeContact)
/* harmony export */ });
/* harmony import */ var _background_images_cabin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background_images/cabin.png */ "./src/background_images/cabin.png");


const makeContact = () => {
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const imgDiv  = document.createElement('div');
    const img = document.createElement('img');

    p1.textContent = 'Your new culinary adventure awaits.'
    p2.textContent = 'realsteve.notarickroll.com';
    p3.textContent = '420 69 350';

    img.classList.add('feature-img');
    img.src = _background_images_cabin_png__WEBPACK_IMPORTED_MODULE_0__;
    imgDiv.classList.add('card-holder');
    
    imgDiv.appendChild(p1);
    imgDiv.appendChild(p2);
    imgDiv.appendChild(p3);
    imgDiv.appendChild(img);
    
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('content', 'contact-content');
    contactDiv.appendChild(imgDiv);

    return contactDiv
}



/***/ }),

/***/ "./src/background_images/cabin.png":
/*!*****************************************!*\
  !*** ./src/background_images/cabin.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45925f7b2647b15c4c00.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLHlEQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvdHRhZ2UgZnJvbSAnLi9iYWNrZ3JvdW5kX2ltYWdlcy9jYWJpbi5wbmcnO1xuXG5jb25zdCBtYWtlQ29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBpbWdEaXYgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBwMS50ZXh0Q29udGVudCA9ICdZb3VyIG5ldyBjdWxpbmFyeSBhZHZlbnR1cmUgYXdhaXRzLidcbiAgICBwMi50ZXh0Q29udGVudCA9ICdyZWFsc3RldmUubm90YXJpY2tyb2xsLmNvbSc7XG4gICAgcDMudGV4dENvbnRlbnQgPSAnNDIwIDY5IDM1MCc7XG5cbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnZmVhdHVyZS1pbWcnKTtcbiAgICBpbWcuc3JjID0gY290dGFnZTtcbiAgICBpbWdEaXYuY2xhc3NMaXN0LmFkZCgnY2FyZC1ob2xkZXInKTtcbiAgICBcbiAgICBpbWdEaXYuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGltZ0Rpdi5hcHBlbmRDaGlsZChwMik7XG4gICAgaW1nRGl2LmFwcGVuZENoaWxkKHAzKTtcbiAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBcbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50JywgJ2NvbnRhY3QtY29udGVudCcpO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcblxuICAgIHJldHVybiBjb250YWN0RGl2XG59XG5cbmV4cG9ydCB7bWFrZUNvbnRhY3R9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9