"use strict";
/********************
Simplifies javascript's built-in FileReader class
( https://developer.mozilla.org/en-US/docs/Web/API/FileReader ).

 Remember that FileReader only works in a browser environment.
 ********************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class FileReaderService {
    constructor(__readMethod) {
        this.__readMethod = __readMethod;
        this.__isReading = false;
        this.__data = new FileReader();
        this.__data.onloadstart = () => this.__isReading = true;
        this.__data.onloadend = () => this.__isReading = false;
    }
    get isReading() {
        return this.__isReading;
    }
    getContents(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((returnData) => {
                this.__data.onload = () => {
                    returnData(this.__data.result);
                };
                this.__data[this.__readMethod](file);
            });
        });
    }
}
exports.FileReaderService = FileReaderService;
