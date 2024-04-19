"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLocator = void 0;
const getUserList_1 = require("../../user/domain/usecases/getUserList");
const userRepositoryImpl_js_1 = require("../../user/domain/repositories/userRepositoryImpl.js");
const createUser_js_1 = require("../../user/domain/usecases/createUser.js");
const presenter_1 = require("./presenter");
const view_1 = require("./view");
class ServiceLocator {
    constructor() {
        this.userRepository = new userRepositoryImpl_js_1.UserRepositoryImpl();
        this.createUserUseCase = new createUser_js_1.CreateUserUseCase(this.userRepository);
        this.getUserListUseCase = new getUserList_1.GetUserListUseCase(this.userRepository);
        this.view = new view_1.View();
        this.presenter = undefined;
    }
    init() {
        this.presenter = new presenter_1.Presenter({
            getUserListUseCase: this.getUserListUseCase,
            createUserUseCase: this.createUserUseCase,
            view: this.view,
        });
        this.presenter.init();
    }
}
exports.ServiceLocator = ServiceLocator;
