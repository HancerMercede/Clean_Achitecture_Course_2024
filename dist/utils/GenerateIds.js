"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateId = void 0;
const uuid_1 = require("uuid");
const GenerateId = () => {
    const id = (0, uuid_1.v4)();
    return id.toString();
};
exports.GenerateId = GenerateId;
