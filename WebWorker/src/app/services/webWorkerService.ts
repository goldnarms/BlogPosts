module App.Services {
    "use strict";

    export interface IWebWorkerService {
        post(url: string): void;
    }

    export class WebWorkerService implements IWebWorkerService {
        constructor() {
        }

        public post(url: string): void {

        }
    }
}