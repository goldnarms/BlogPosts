class WebWorker {
    constructor() {
        addEventListener("message", (e) => {
            this.OnMessage(e);
        }, false);
    }

    public OnMessage(e: MessageEvent) {
    }
}

interface WorkerEvent extends MessageEvent{
    key: string;
    url: string;
}
new WebWorker();