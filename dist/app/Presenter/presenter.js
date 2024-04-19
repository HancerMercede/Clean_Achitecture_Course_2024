"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
class Presenter {
    constructor({ getUserListUseCase, createUserUseCase, view, }) {
        this.getUserListUseCase = getUserListUseCase;
        this.createUserUseCase = createUserUseCase;
        this.view = view;
    }
    handleFormSubmit(result, err) {
        const response = this.createUserUseCase.execute({
            name: result.name,
            email: result.email,
            password: result.password,
        });
        response === null || response === void 0 ? void 0 : response.fold((e) => {
            this.view.showError(e === null || e === void 0 ? void 0 : e.message);
        }, () => {
            const userList = this.getUserListUseCase.execute();
            this.view.showUserList(userList);
            this.view.showCreateUserForm(['name', 'email', 'password'], this.handleFormSubmit.bind(this));
        });
    }
    init() {
        this.view.initialPrompt();
        this.view.showCreateUserForm(['name', 'email', 'password'], this.handleFormSubmit.bind(this));
    }
}
exports.Presenter = Presenter;
