module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/writeToDatabase.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/writeToDatabase.js":
/*!**************************************!*\
  !*** ./pages/api/writeToDatabase.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ \"./util/mongodb.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/*helper function to calculate a user's total exercise time on a treadmill*/\n\nfunction diff(start, end) {\n  // var start_date = new Date(JSON.stringify(start));\n  // console.log(`start_date: ${start_date}`)\n  // var end_date = new Date(JSON.stringify(end));\n  // console.log(`end_date: ${end_date}`)\n  console.log(`start_date: ${start}`);\n  console.log(`end_date: ${end}`);\n  var diff = end.getTime() - start.getTime();\n  console.log(`diff: ${diff}`);\n  return diff; // var diff_h = Math.floor(diff / 1000 / 60 / 60);\n  // diff -= diff_h * 1000 * 60 * 60;\n  // var diff_m = Math.floor(diff / 1000 / 60);\n  // diff -= diff_m * 1000 * 60;\n  // var diff_s = Math.floor(diff / 1000);\n  // var diff_ms = diff - diff_s * 1000;\n  // return (diff_h <= 9 ? \"0\":\"\") + diff_h + \":\" + (diff_m <= 9 ? \"0\":\"\") + diff_m + \":\" + (diff_s <= 9 ? \"0\":\"\") + diff_s + \":\" + (diff_ms <= 9 ? \"0\":\"\") + diff_ms;\n}\n\nasync function handler(req, res) {\n  //connect to MongoDB\n  const {\n    db\n  } = await Object(_util_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"connectToDatabase\"])(); //console.log(db)\n\n  const {\n    method,\n    body\n  } = req;\n  const name = body.name;\n  const action = body.action;\n  const like = body.likedBy;\n  const password = body.password;\n  const nickname = body.nickname;\n\n  switch (method) {\n    //write into data base\n    case \"POST\":\n      //const tread =  db.collection(\"Treadmills\").find({_id: id})\n      switch (action) {\n        //occupy a treadmill\n        case \"occupy\":\n          const id = new mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"](body._id);\n          console.log(id);\n          const treadmill = await db.collection(\"Treadmills\").findOne({\n            _id: id\n          }, {\n            status: 1,\n            who_occupied: 1,\n            start_time: 1,\n            end_time: 1,\n            totalTime: 1\n          });\n          console.log(\"find the treadmill\");\n          console.log(JSON.stringify(treadmill));\n          console.log(treadmill.status);\n\n          if (treadmill.status === 1) {\n            console.log(\"I am in branch that will occupy\");\n            const start = new Date();\n            console.log(JSON.stringify(start));\n            await db.collection(\"Treadmills\").updateOne({\n              _id: id\n            }, {\n              $set: {\n                status: 0,\n                who_occupied: nickname\n              }\n            });\n            const user = await db.collection(\"User\").findOne({\n              nickname: nickname\n            }, {\n              start_time: 1\n            });\n            await db.collection(\"User\").updateOne({\n              nickname: nickname\n            }, {\n              $set: {\n                start_time: start\n              }\n            }, console.log(`start time: ${user.start_time}`));\n          } else {\n            if (treadmill.who_occupied === nickname) {\n              console.log(\"I am in branch that will unoccupy\");\n              const end = new Date();\n              console.log(JSON.stringify(end));\n              await db.collection(\"Treadmills\").updateOne({\n                _id: id\n              }, {\n                $set: {\n                  status: 1,\n                  who_occupied: \"\",\n                  Liked_By: 0\n                }\n              });\n              const user = await db.collection(\"User\").findOne({\n                nickname: nickname\n              }, {\n                totalTime: 1\n              }, {\n                start_time: 1\n              }, {\n                end_time: 1\n              });\n              await db.collection(\"User\").updateOne({\n                nickname: nickname\n              }, {\n                $set: {\n                  totalTime: user.totalTime + diff(user.start_time, end),\n                  start_time: new Date(),\n                  end_time: new Date()\n                }\n              }, console.log(`total time: ${user.totalTime}`), console.log(`start time: ${user.start_time}`), console.log(`end time: ${user.end_time}`));\n            } else {\n              console.log(\"I am in branch that will alert\"); // the alert still does not work, try something else later\n              // window.alert(\"This machine has already been occupied by others\");\n            }\n          }\n\n          res.status(200).json({\n            message: \"equipment occupied\"\n          }); // Router.push('/')\n\n          break;\n\n        case \"like\":\n          const id2 = new mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"](body._id); //console.log(like)\n          //like other's exercise on this treadmill\n\n          await db.collection(\"Treadmills\").updateOne({\n            _id: id2\n          }, {\n            $set: {\n              Liked_By: like + 1\n            }\n          });\n          res.status(200).json({\n            message: 'Liked exercise!'\n          }); // Router.push('/')\n\n          break;\n\n        case \"signup\":\n          // try to find the user passed in\n          const user = await db.collection(\"User\").findOne({\n            username: name\n          }, {\n            username: 1,\n            password: 1,\n            nickname: 1\n          });\n\n          if (!user) {\n            //cannot find an existing user with the typed in username\n            await db.collection(\"User\").insertOne({\n              username: name,\n              password: password,\n              nickname: nickname,\n              start_time: new Date(),\n              end_time: new Date(),\n              totalTime: 0\n            });\n            console.log(`Congrats! You have successfully Signed Up!\\n \\\n                      Your Username is ${name}\\n \\\n                      Your Password is ${password}\\n\n                      Your Nickname is ${nickname}...`);\n            res.status(200).json({\n              message: \"created one\"\n            });\n          } // else {\n          //   // check password if exist\n          //   if (user.password === password){\n          //     console.log(\"loged in\")\n          //   } else {\n          //     console.log(\"incorrect password\")\n          //   }\n          //   // console.log(user.username, user.password)\n          // }\n\n\n          res.status(200).json({\n            message: \"did not branch!\"\n          });\n          break;\n      }\n\n      break;\n    //read only   \n\n    case \"GET\":\n      /*other cases here*/\n      break;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvd3JpdGVUb0RhdGFiYXNlLmpzP2E0YmQiXSwibmFtZXMiOlsiZGlmZiIsInN0YXJ0IiwiZW5kIiwiY29uc29sZSIsImxvZyIsImdldFRpbWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsIm1ldGhvZCIsImJvZHkiLCJuYW1lIiwiYWN0aW9uIiwibGlrZSIsImxpa2VkQnkiLCJwYXNzd29yZCIsIm5pY2tuYW1lIiwiaWQiLCJPYmplY3RJZCIsIl9pZCIsInRyZWFkbWlsbCIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwic3RhdHVzIiwid2hvX29jY3VwaWVkIiwic3RhcnRfdGltZSIsImVuZF90aW1lIiwidG90YWxUaW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsIkRhdGUiLCJ1cGRhdGVPbmUiLCIkc2V0IiwidXNlciIsIkxpa2VkX0J5IiwianNvbiIsIm1lc3NhZ2UiLCJpZDIiLCJ1c2VybmFtZSIsImluc2VydE9uZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0UsU0FBU0EsSUFBVCxDQUFlQyxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBYSxlQUFjSCxLQUFNLEVBQWpDO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLGFBQVlGLEdBQUksRUFBN0I7QUFDQSxNQUFJRixJQUFJLEdBQUdFLEdBQUcsQ0FBQ0csT0FBSixLQUFnQkosS0FBSyxDQUFDSSxPQUFOLEVBQTNCO0FBQ0FGLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLFNBQVFKLElBQUssRUFBMUI7QUFDQSxTQUFPQSxJQUFQLENBVHlCLENBVXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Q7O0FBRUgsZUFBZU0sT0FBZixDQUF3QkMsR0FBeEIsRUFB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QUFNRUgsdUJBQVMsRUFBRTtBQU5iLGFBREksQ0FBTjtBQVVBMUIsbUJBQU8sQ0FBQ0MsR0FBUixDQUFhO0FBQ3pCLHlDQUF5Q1MsSUFBSztBQUM5Qyx5Q0FBeUNJLFFBQVM7QUFDbEQseUNBQXlDQyxRQUFTLEtBSHRDO0FBSUFWLGVBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCWSxJQUFoQixDQUFxQjtBQUFFQyxxQkFBTyxFQUFFO0FBQVgsYUFBckI7QUFFRCxXQTNCSCxDQTRCRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBOUIsYUFBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JZLElBQWhCLENBQXFCO0FBQUVDLG1CQUFPLEVBQUU7QUFBWCxXQUFyQjtBQUNBO0FBdEhKOztBQXdIQTtBQUNGOztBQUNBLFNBQUssS0FBTDtBQUNFO0FBRUE7QUFqSUo7QUFtSUQ7O0FBSWNoQyxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS93cml0ZVRvRGF0YWJhc2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJy4uLy4uL3V0aWwvbW9uZ29kYidcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIlxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuLypoZWxwZXIgZnVuY3Rpb24gdG8gY2FsY3VsYXRlIGEgdXNlcidzIHRvdGFsIGV4ZXJjaXNlIHRpbWUgb24gYSB0cmVhZG1pbGwqL1xuICBmdW5jdGlvbiBkaWZmIChzdGFydCwgZW5kKSB7XG4gICAgLy8gdmFyIHN0YXJ0X2RhdGUgPSBuZXcgRGF0ZShKU09OLnN0cmluZ2lmeShzdGFydCkpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBzdGFydF9kYXRlOiAke3N0YXJ0X2RhdGV9YClcbiAgICAvLyB2YXIgZW5kX2RhdGUgPSBuZXcgRGF0ZShKU09OLnN0cmluZ2lmeShlbmQpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhgZW5kX2RhdGU6ICR7ZW5kX2RhdGV9YClcbiAgICBjb25zb2xlLmxvZyhgc3RhcnRfZGF0ZTogJHtzdGFydH1gKVxuICAgIGNvbnNvbGUubG9nKGBlbmRfZGF0ZTogJHtlbmR9YClcbiAgICB2YXIgZGlmZiA9IGVuZC5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCk7XG4gICAgY29uc29sZS5sb2coYGRpZmY6ICR7ZGlmZn1gKVxuICAgIHJldHVybiBkaWZmO1xuICAgIC8vIHZhciBkaWZmX2ggPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwIC8gNjAgLyA2MCk7XG4gICAgLy8gZGlmZiAtPSBkaWZmX2ggKiAxMDAwICogNjAgKiA2MDtcbiAgICAvLyB2YXIgZGlmZl9tID0gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCAvIDYwKTtcbiAgICAvLyBkaWZmIC09IGRpZmZfbSAqIDEwMDAgKiA2MDtcbiAgICAvLyB2YXIgZGlmZl9zID0gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCk7XG4gICAgLy8gdmFyIGRpZmZfbXMgPSBkaWZmIC0gZGlmZl9zICogMTAwMDtcblxuICAgIC8vIHJldHVybiAoZGlmZl9oIDw9IDkgPyBcIjBcIjpcIlwiKSArIGRpZmZfaCArIFwiOlwiICsgKGRpZmZfbSA8PSA5ID8gXCIwXCI6XCJcIikgKyBkaWZmX20gKyBcIjpcIiArIChkaWZmX3MgPD0gOSA/IFwiMFwiOlwiXCIpICsgZGlmZl9zICsgXCI6XCIgKyAoZGlmZl9tcyA8PSA5ID8gXCIwXCI6XCJcIikgKyBkaWZmX21zO1xuICB9XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIgKHJlcSwgcmVzKSB7XG4gIC8vY29ubmVjdCB0byBNb25nb0RCXG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKClcbiAgLy9jb25zb2xlLmxvZyhkYilcbiAgY29uc3QgeyBtZXRob2QsIGJvZHkgfSA9IHJlcTtcblxuXG4gIGNvbnN0IG5hbWUgPSBib2R5Lm5hbWU7XG4gIGNvbnN0IGFjdGlvbiA9IGJvZHkuYWN0aW9uO1xuICBjb25zdCBsaWtlID0gYm9keS5saWtlZEJ5O1xuICBjb25zdCBwYXNzd29yZCA9IGJvZHkucGFzc3dvcmQ7XG4gIGNvbnN0IG5pY2tuYW1lID0gYm9keS5uaWNrbmFtZTtcblxuICBzd2l0Y2goIG1ldGhvZCApIHtcbiAgICAvL3dyaXRlIGludG8gZGF0YSBiYXNlXG4gICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgIC8vY29uc3QgdHJlYWQgPSAgZGIuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIikuZmluZCh7X2lkOiBpZH0pXG4gICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAvL29jY3VweSBhIHRyZWFkbWlsbFxuICAgICAgICBjYXNlIFwib2NjdXB5XCI6XG4gICAgICAgICAgY29uc3QgaWQgPSBuZXcgT2JqZWN0SWQoYm9keS5faWQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGlkKVxuICAgICAgICAgIGNvbnN0IHRyZWFkbWlsbCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpLmZpbmRPbmUoXG4gICAgICAgICAgICB7X2lkIDogaWR9LCBcbiAgICAgICAgICAgIHsgc3RhdHVzOiAxLCBcbiAgICAgICAgICAgICAgd2hvX29jY3VwaWVkOiAxLFxuICAgICAgICAgICAgICBzdGFydF90aW1lOiAxLFxuICAgICAgICAgICAgICBlbmRfdGltZTogMSxcbiAgICAgICAgICAgICAgdG90YWxUaW1lOiAxLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmQgdGhlIHRyZWFkbWlsbFwiKVxuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRyZWFkbWlsbCkpXG4gICAgICAgICAgY29uc29sZS5sb2codHJlYWRtaWxsLnN0YXR1cylcbiAgICAgICAgICBpZiAodHJlYWRtaWxsLnN0YXR1cyA9PT0gMSlcbiAgICAgICAgICAgIHsgY29uc29sZS5sb2coXCJJIGFtIGluIGJyYW5jaCB0aGF0IHdpbGwgb2NjdXB5XCIpXG4gICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzdGFydCkpXG4gICAgICAgICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpLnVwZGF0ZU9uZShcbiAgICAgICAgICAgICAgICB7IF9pZDogaWQgfSxcbiAgICAgICAgICAgICAgICB7ICRzZXQ6IHsgc3RhdHVzOiAwLCB3aG9fb2NjdXBpZWQ6IG5pY2tuYW1lfX0pXG5cbiAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJVc2VyXCIpLmZpbmRPbmUoXG4gICAgICAgICAgICAgICAgeyBuaWNrbmFtZTogbmlja25hbWUgfSxcbiAgICAgICAgICAgICAgICB7IHN0YXJ0X3RpbWU6IDEgfSwpXG4gICAgICAgICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJVc2VyXCIpLnVwZGF0ZU9uZShcbiAgICAgICAgICAgICAgICB7IG5pY2tuYW1lOiBuaWNrbmFtZSB9LFxuICAgICAgICAgICAgICAgIHsgJHNldDogeyBzdGFydF90aW1lIDogc3RhcnR9fSxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RhcnQgdGltZTogJHt1c2VyLnN0YXJ0X3RpbWV9YCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXsgXG4gICAgICAgICAgICBpZiAodHJlYWRtaWxsLndob19vY2N1cGllZCA9PT0gbmlja25hbWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBpbiBicmFuY2ggdGhhdCB3aWxsIHVub2NjdXB5XCIpXG4gICAgICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZW5kKSlcbiAgICAgICAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIikudXBkYXRlT25lKFxuICAgICAgICAgICAgICAgIHsgX2lkOiBpZCB9LFxuICAgICAgICAgICAgICAgIHsgJHNldDogeyBzdGF0dXM6IDEsIHdob19vY2N1cGllZDogXCJcIiwgTGlrZWRfQnk6IDB9fSlcblxuICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlVzZXJcIikuZmluZE9uZShcbiAgICAgICAgICAgICAgICB7IG5pY2tuYW1lOiBuaWNrbmFtZSB9LFxuICAgICAgICAgICAgICAgIHsgdG90YWxUaW1lOiAxIH0sXG4gICAgICAgICAgICAgICAgeyBzdGFydF90aW1lOiAxfSxcbiAgICAgICAgICAgICAgICB7IGVuZF90aW1lOiAxfSApXG4gICAgICAgICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJVc2VyXCIpLnVwZGF0ZU9uZShcbiAgICAgICAgICAgICAgICB7IG5pY2tuYW1lOiBuaWNrbmFtZSB9LFxuICAgICAgICAgICAgICAgIHsgJHNldDogXG4gICAgICAgICAgICAgICAgICAgIHt0b3RhbFRpbWU6IHVzZXIudG90YWxUaW1lICsgZGlmZih1c2VyLnN0YXJ0X3RpbWUsIGVuZCksIFxuICAgICAgICAgICAgICAgICAgICBzdGFydF90aW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBlbmRfdGltZTogbmV3IERhdGUoKX19LFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0b3RhbCB0aW1lOiAke3VzZXIudG90YWxUaW1lfWApLFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdGFydCB0aW1lOiAke3VzZXIuc3RhcnRfdGltZX1gKSxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZW5kIHRpbWU6ICR7dXNlci5lbmRfdGltZX1gKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGluIGJyYW5jaCB0aGF0IHdpbGwgYWxlcnRcIilcbiAgICAgICAgICAgICAgLy8gdGhlIGFsZXJ0IHN0aWxsIGRvZXMgbm90IHdvcmssIHRyeSBzb21ldGhpbmcgZWxzZSBsYXRlclxuICAgICAgICAgICAgICAvLyB3aW5kb3cuYWxlcnQoXCJUaGlzIG1hY2hpbmUgaGFzIGFscmVhZHkgYmVlbiBvY2N1cGllZCBieSBvdGhlcnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJlcXVpcG1lbnQgb2NjdXBpZWRcIn0pXG4gICAgICAgICAgLy8gUm91dGVyLnB1c2goJy8nKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibGlrZVwiOlxuICAgICAgICAgIGNvbnN0IGlkMiA9IG5ldyBPYmplY3RJZChib2R5Ll9pZCk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhsaWtlKVxuICAgICAgICAgIC8vbGlrZSBvdGhlcidzIGV4ZXJjaXNlIG9uIHRoaXMgdHJlYWRtaWxsXG4gICAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIikudXBkYXRlT25lKFxuICAgICAgICAgICAgeyBfaWQ6IGlkMiB9LFxuICAgICAgICAgICAgeyAkc2V0OiB7IExpa2VkX0J5OiBsaWtlICsgMX19XG4gICAgICAgICAgKVxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0xpa2VkIGV4ZXJjaXNlISd9KVxuICAgICAgICAgIC8vIFJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNpZ251cFwiOlxuICAgICAgICAgIC8vIHRyeSB0byBmaW5kIHRoZSB1c2VyIHBhc3NlZCBpblxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS5maW5kT25lKFxuICAgICAgICAgICAgeyB1c2VybmFtZTogbmFtZX0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVzZXJuYW1lOiAxLFxuICAgICAgICAgICAgICBwYXNzd29yZDogMSxcbiAgICAgICAgICAgICAgbmlja25hbWU6IDEsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgLy9jYW5ub3QgZmluZCBhbiBleGlzdGluZyB1c2VyIHdpdGggdGhlIHR5cGVkIGluIHVzZXJuYW1lXG4gICAgICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS5pbnNlcnRPbmUoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxuICAgICAgICAgICAgICAgIHN0YXJ0X3RpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgZW5kX3RpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgdG90YWxUaW1lOiAwLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApIFxuICAgICAgICAgICAgY29uc29sZS5sb2coYENvbmdyYXRzISBZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgU2lnbmVkIFVwIVxcbiBcXFxuICAgICAgICAgICAgICAgICAgICAgIFlvdXIgVXNlcm5hbWUgaXMgJHtuYW1lfVxcbiBcXFxuICAgICAgICAgICAgICAgICAgICAgIFlvdXIgUGFzc3dvcmQgaXMgJHtwYXNzd29yZH1cXG5cbiAgICAgICAgICAgICAgICAgICAgICBZb3VyIE5pY2tuYW1lIGlzICR7bmlja25hbWV9Li4uYClcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJjcmVhdGVkIG9uZVwifSlcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0gXG4gICAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgLy8gICAvLyBjaGVjayBwYXNzd29yZCBpZiBleGlzdFxuICAgICAgICAgIC8vICAgaWYgKHVzZXIucGFzc3dvcmQgPT09IHBhc3N3b3JkKXtcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJsb2dlZCBpblwiKVxuICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJpbmNvcnJlY3QgcGFzc3dvcmRcIilcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHVzZXIudXNlcm5hbWUsIHVzZXIucGFzc3dvcmQpXG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJkaWQgbm90IGJyYW5jaCFcIn0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICAvL3JlYWQgb25seSAgIFxuICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgIC8qb3RoZXIgY2FzZXMgaGVyZSovXG4gICAgICBcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/writeToDatabase.js\n");

/***/ }),

/***/ "./util/mongodb.js":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDatabase\", function() { return connectToDatabase; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = \"mongodb+srv://cs97_group:gymtracker@equipments.vkkku.mongodb.net/Treadmills?retryWrites=true&w=majority\";\nconst MONGODB_DB = \"Treadmills\";\n\nif (!MONGODB_URI) {\n  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\n\nif (!MONGODB_DB) {\n  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentiatlly\n * during API Route usage.\n */\n\n\nlet cached = global.mongo;\nif (!cached) cached = global.mongo = {};\nasync function connectToDatabase() {\n  if (cached.conn) return cached.conn;\n\n  if (!cached.promise) {\n    const conn = {};\n    const opts = {\n      useNewUrlParser: true,\n      useUnifiedTopology: true\n    };\n    cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(MONGODB_URI, opts).then(client => {\n      conn.client = client;\n      return client.db(MONGODB_DB);\n    }).then(db => {\n      conn.db = db;\n      cached.conn = conn;\n    });\n  }\n\n  await cached.promise;\n  return cached.conn;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL21vbmdvZGIuanM/MWRmYyJdLCJuYW1lcyI6WyJNT05HT0RCX1VSSSIsIk1PTkdPREJfREIiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsIm1vbmdvIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjb25uIiwicHJvbWlzZSIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ0aGVuIiwiY2xpZW50IiwiZGIiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxXQUFXLEdBQUcseUdBQXBCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5COztBQUVBLElBQUksQ0FBQ0QsV0FBTCxFQUFrQjtBQUNoQixRQUFNLElBQUlFLEtBQUosQ0FDSixzRUFESSxDQUFOO0FBR0Q7O0FBRUQsSUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2YsUUFBTSxJQUFJQyxLQUFKLENBQ0oscUVBREksQ0FBTjtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQXBCO0FBQ0EsSUFBSSxDQUFDRixNQUFMLEVBQWFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxLQUFQLEdBQWUsRUFBeEI7QUFFTixlQUFlQyxpQkFBZixHQUFtQztBQUN4QyxNQUFJSCxNQUFNLENBQUNJLElBQVgsRUFBaUIsT0FBT0osTUFBTSxDQUFDSSxJQUFkOztBQUNqQixNQUFJLENBQUNKLE1BQU0sQ0FBQ0ssT0FBWixFQUFxQjtBQUNuQixVQUFNRCxJQUFJLEdBQUcsRUFBYjtBQUNBLFVBQU1FLElBQUksR0FBRztBQUNYQyxxQkFBZSxFQUFFLElBRE47QUFFWEMsd0JBQWtCLEVBQUU7QUFGVCxLQUFiO0FBSUFSLFVBQU0sQ0FBQ0ssT0FBUCxHQUFpQkksbURBQVcsQ0FBQ0MsT0FBWixDQUFvQmIsV0FBcEIsRUFBaUNTLElBQWpDLEVBQ2RLLElBRGMsQ0FDUkMsTUFBRCxJQUFZO0FBQ2hCUixVQUFJLENBQUNRLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQU9BLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVZixVQUFWLENBQVA7QUFDRCxLQUpjLEVBS2RhLElBTGMsQ0FLUkUsRUFBRCxJQUFRO0FBQ1pULFVBQUksQ0FBQ1MsRUFBTCxHQUFVQSxFQUFWO0FBQ0FiLFlBQU0sQ0FBQ0ksSUFBUCxHQUFjQSxJQUFkO0FBQ0QsS0FSYyxDQUFqQjtBQVNEOztBQUNELFFBQU1KLE1BQU0sQ0FBQ0ssT0FBYjtBQUNBLFNBQU9MLE1BQU0sQ0FBQ0ksSUFBZDtBQUNEIiwiZmlsZSI6Ii4vdXRpbC9tb25nb2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXG5cbmNvbnN0IE1PTkdPREJfVVJJID0gXCJtb25nb2RiK3NydjovL2NzOTdfZ3JvdXA6Z3ltdHJhY2tlckBlcXVpcG1lbnRzLnZra2t1Lm1vbmdvZGIubmV0L1RyZWFkbWlsbHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbmNvbnN0IE1PTkdPREJfREIgPSBcIlRyZWFkbWlsbHNcIlxuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gIClcbn1cblxuaWYgKCFNT05HT0RCX0RCKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCdcbiAgKVxufVxuXG4vKipcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYXRsbHlcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXG4gKi9cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29cbmlmICghY2FjaGVkKSBjYWNoZWQgPSBnbG9iYWwubW9uZ28gPSB7fVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWQuY29ubikgcmV0dXJuIGNhY2hlZC5jb25uXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBjb25uID0ge31cbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH1cbiAgICBjYWNoZWQucHJvbWlzZSA9IE1vbmdvQ2xpZW50LmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpXG4gICAgICAudGhlbigoY2xpZW50KSA9PiB7XG4gICAgICAgIGNvbm4uY2xpZW50ID0gY2xpZW50XG4gICAgICAgIHJldHVybiBjbGllbnQuZGIoTU9OR09EQl9EQilcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGIpID0+IHtcbiAgICAgICAgY29ubi5kYiA9IGRiXG4gICAgICAgIGNhY2hlZC5jb25uID0gY29ublxuICAgICAgfSlcbiAgfVxuICBhd2FpdCBjYWNoZWQucHJvbWlzZVxuICByZXR1cm4gY2FjaGVkLmNvbm5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/mongodb.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ })

/******/ });