"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Either = void 0;
class Either {
    constructor(value) {
        this.value = value;
    }
    isLeft() {
        return this.value.kind === "left";
    }
    isRight() {
        return this.value.kind === "right";
    }
    fold(leftFn, rightFn) {
        switch (this.value.kind) {
            case "left":
                return leftFn(this.value.leftValue);
            case "right":
                return rightFn(this.value.rightValue);
        }
    }
    map(fn) {
        return this.flatMap(r => Either.right(fn(r)));
    }
    flatMap(fn) {
        return this.fold(leftValue => Either.left(leftValue), rightValue => fn(rightValue));
    }
    getOrThrow(errorMessage) {
        const throwFn = () => {
            throw Error(errorMessage ? errorMessage : "An error has ocurred: " + this.value);
        };
        return this.fold(() => throwFn(), rightValue => rightValue);
    }
    getOrElse(defaultValue) {
        return this.fold(() => defaultValue, someValue => someValue);
    }
    static left(value) {
        return new Either({ kind: "left", leftValue: value });
    }
    static right(value) {
        return new Either({ kind: "right", rightValue: value });
    }
}
exports.Either = Either;
