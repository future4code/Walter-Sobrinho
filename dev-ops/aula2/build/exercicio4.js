"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEmail = void 0;
function checkEmail(text) {
  return __awaiter(this, void 0, void 0, function* () {
    let result = {
      isEmail: true,
      reason: "",
    };
    if (text.indexOf("@") === -1) {
      result.isEmail = false;
      result.reason = "There is no '@' in the text provided";
    } else if (text.indexOf("@") >= 0) {
      (result.isEmail = true),
        (result.reason = "The format follows that of a email correctly.");
    }
    return result;
  });
}
exports.checkEmail = checkEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS0EsU0FBc0IsVUFBVSxDQUFDLElBQVk7O1FBQzNDLElBQUksTUFBTSxHQUFpQjtZQUN6QixPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU0sRUFBRSxFQUFFO1NBQ1gsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM1QixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN2QixNQUFNLENBQUMsTUFBTSxHQUFHLHNDQUFzQyxDQUFDO1NBQ3hEO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsK0NBQStDLENBQUMsQ0FBQztTQUNyRTtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FBQTtBQWZELGdDQWVDIn0=
