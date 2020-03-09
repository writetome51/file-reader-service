"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class TextFileReaderService extends index_1.FileReaderService {
    constructor() {
        super('readAsText');
    }
}
exports.TextFileReaderService = TextFileReaderService;
