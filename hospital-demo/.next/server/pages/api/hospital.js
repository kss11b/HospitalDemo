"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hospital";
exports.ids = ["pages/api/hospital"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "(api)/./pages/api/hospital.js":
/*!*******************************!*\
  !*** ./pages/api/hospital.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https */ \"https\");\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nasync function handler(req, res) {\n    // Workaround to ignore ssl\n    const agent = new (https__WEBPACK_IMPORTED_MODULE_1___default().Agent)({\n        rejectUnauthorized: false\n    });\n    console.log(req.method, \"method\");\n    if (req.method === \"GET\") {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"https://localhost:7286/hospital\", {\n            httpsAgent: agent\n        });\n        res.status(200).json(response.data);\n    } else if (req.method === \"POST\") {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"https://localhost:7286/hospital\", req.body, {\n            httpsAgent: agent\n        });\n        res.status(200).json(response.data);\n    } else if (req.method === \"DELETE\") {\n        console.log(req.body, \"req body\");\n        const url = `https://localhost:7286/hospital/${req.body.id}`;\n        console.log(url, \"url\");\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()[\"delete\"](`https://localhost:7286/hospital/${req.body.id}`, {\n            httpsAgent: agent\n        });\n        res.status(200).json(response.data);\n    }\n// res.status(200).json({ name: 'John Doe' })\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaG9zcGl0YWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFDbkQ7QUFDQTtBQUNYLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsMkJBQTJCO0lBQzNCLE1BQU1DLEtBQUssR0FBRyxJQUFJSixvREFBVyxDQUFDO1FBQzVCTSxrQkFBa0IsRUFBRSxLQUFLO0tBQzFCLENBQUM7SUFDRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEdBQUcsQ0FBQ08sTUFBTSxFQUFFLFFBQVEsQ0FBQztJQUNqQyxJQUFHUCxHQUFHLENBQUNPLE1BQU0sS0FBSyxLQUFLLEVBQUM7UUFDdEIsTUFBTUMsUUFBUSxHQUFHLE1BQU1YLGdEQUFTLENBQzlCLGlDQUFpQyxFQUNqQztZQUNFYSxVQUFVLEVBQUVSLEtBQUs7U0FDbEIsQ0FDRjtRQUNERCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSixRQUFRLENBQUNLLElBQUksQ0FBQztLQUNwQyxNQUNJLElBQUdiLEdBQUcsQ0FBQ08sTUFBTSxLQUFLLE1BQU0sRUFBQztRQUM1QixNQUFNQyxRQUFRLEdBQUcsTUFBTVgsaURBQVUsQ0FDL0IsaUNBQWlDLEVBQ2pDRyxHQUFHLENBQUNlLElBQUksRUFDUjtZQUNFTCxVQUFVLEVBQUVSLEtBQUs7U0FDbEIsQ0FDRjtRQUNERCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSixRQUFRLENBQUNLLElBQUksQ0FBQztLQUNwQyxNQUNJLElBQUdiLEdBQUcsQ0FBQ08sTUFBTSxLQUFLLFFBQVEsRUFBQztRQUM5QkYsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEdBQUcsQ0FBQ2UsSUFBSSxFQUFFLFVBQVUsQ0FBQztRQUNqQyxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRWhCLEdBQUcsQ0FBQ2UsSUFBSSxDQUFDRSxFQUFFLENBQUMsQ0FBQztRQUM1RFosT0FBTyxDQUFDQyxHQUFHLENBQUNVLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFDdkIsTUFBTVIsUUFBUSxHQUFHLE1BQU1YLHNEQUFZLENBQ2pDLENBQUMsZ0NBQWdDLEVBQUVHLEdBQUcsQ0FBQ2UsSUFBSSxDQUFDRSxFQUFFLENBQUMsQ0FBQyxFQUNoRDtZQUNFUCxVQUFVLEVBQUVSLEtBQUs7U0FDbEIsQ0FDRjtRQUNERCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSixRQUFRLENBQUNLLElBQUksQ0FBQztLQUNwQztBQUNELDZDQUE2QztDQUM5QyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvc3BpdGFsLWRlbW8vLi9wYWdlcy9hcGkvaG9zcGl0YWwuanM/OTMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBodHRwcyBmcm9tICdodHRwcyc7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIC8vIFdvcmthcm91bmQgdG8gaWdub3JlIHNzbFxuICBjb25zdCBhZ2VudCA9IG5ldyBodHRwcy5BZ2VudCh7ICBcbiAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlXG4gIH0pO1xuICBjb25zb2xlLmxvZyhyZXEubWV0aG9kLCAnbWV0aG9kJylcbiAgaWYocmVxLm1ldGhvZCA9PT0gJ0dFVCcpe1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgXCJodHRwczovL2xvY2FsaG9zdDo3Mjg2L2hvc3BpdGFsXCIsXG4gICAgICB7XG4gICAgICAgIGh0dHBzQWdlbnQ6IGFnZW50XG4gICAgICB9XG4gICAgKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZS5kYXRhKVxuICB9XG4gIGVsc2UgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBcImh0dHBzOi8vbG9jYWxob3N0OjcyODYvaG9zcGl0YWxcIixcbiAgICAgIHJlcS5ib2R5LFxuICAgICAge1xuICAgICAgICBodHRwc0FnZW50OiBhZ2VudFxuICAgICAgfVxuICAgICk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UuZGF0YSlcbiAgfVxuICBlbHNlIGlmKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKXtcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSwgJ3JlcSBib2R5JylcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9sb2NhbGhvc3Q6NzI4Ni9ob3NwaXRhbC8ke3JlcS5ib2R5LmlkfWAgICAgICBcbiAgICBjb25zb2xlLmxvZyh1cmwsICd1cmwnKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFxuICAgICAgYGh0dHBzOi8vbG9jYWxob3N0OjcyODYvaG9zcGl0YWwvJHtyZXEuYm9keS5pZH1gLFxuICAgICAge1xuICAgICAgICBodHRwc0FnZW50OiBhZ2VudFxuICAgICAgfVxuICAgICk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UuZGF0YSlcbiAgfVxuICAvLyByZXMuc3RhdHVzKDIwMCkuanNvbih7IG5hbWU6ICdKb2huIERvZScgfSlcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImh0dHBzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFnZW50IiwiQWdlbnQiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwicmVzcG9uc2UiLCJnZXQiLCJodHRwc0FnZW50Iiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJwb3N0IiwiYm9keSIsInVybCIsImlkIiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/hospital.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hospital.js"));
module.exports = __webpack_exports__;

})();