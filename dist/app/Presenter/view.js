"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const prompt_1 = __importDefault(require("prompt"));
class View {
    constructor() { }
    initialPrompt() {
        console.log('Hola! Esta es la lista de usuarios');
    }
    showUserList(users) {
        console.log('Estos son los usuarios que hay en la lista: ', users);
    }
    showCreateUserForm(formFields, onFinish) {
        prompt_1.default.get(formFields, function (err, result) {
            onFinish(result, err);
        });
    }
    showError(error) {
        console.log('Ha habido un error: ', error);
    }
}
exports.View = View;
