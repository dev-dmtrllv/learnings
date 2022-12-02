"use strict";
class SubSystem {
    initialize() {
        console.log("hi from sub system");
    }
    terminate() {
    }
}
class Renderer extends SubSystem {
    initialize() {
        super.initialize();
        console.log("hi from renderer");
    }
}
class Engine {
    subSystems = [];
    constructor() {
        const subSystem = new SubSystem();
        subSystem.initialize();
        const x = new Renderer();
        x.initialize();
    }
}
const engine = new Engine();
engine.subSystems;
//# sourceMappingURL=Engine.js.map