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
exports.addCharacter = void 0;
function addCharacter(input) {
  return __awaiter(this, void 0, void 0, function* () {
    if (!input.name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing name" }),
      };
    }
    if (!input.goes_by) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing alias" }),
      };
    }
    if (!input.image_link) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing image" }),
      };
    }
  });
}
exports.addCharacter = addCharacter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBTUEsU0FBc0IsWUFBWSxDQUFDLEtBQWdCOztRQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNmLE9BQU87Z0JBQ0wsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUM7YUFDbEQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbEIsT0FBTztnQkFDTCxVQUFVLEVBQUUsR0FBRztnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQzthQUNuRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNyQixPQUFPO2dCQUNMLFVBQVUsRUFBRSxHQUFHO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDO2FBQ25ELENBQUM7U0FDSDtJQUNILENBQUM7Q0FBQTtBQW5CRCxvQ0FtQkMifQ==
