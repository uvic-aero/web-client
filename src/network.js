
class Network {

    constructor() {

        this.config = {
            host: "127.0.0.1",
            port: 24000
        };

        this.socket = null;
        this.connected = false;

        this.initialize();
    }

    initialize() {

        this.connect();
    }

    connect() {

        if (!this.connected) {

            this.socket = new WebSocket(this.address);
            //this.socket.binaryType = "arraybuffer";

            this.extendSocket();
        }
    }

    reconnect() {

        this.setTimeout(() => {

            this.connect();
        }, 5000);
    }

    close() {

        if (this.connected) {

            this.socket.close();

            this.connected = false;
        }
    }

    send(message) {

        if (message !== undefined && message !== null) {

            if (typeof message === "object") {
				try {
					this.socket.send(JSON.stringify(message));
				}
				catch (e) {
                    console.log(e);
				}
			}
			else if (typeof message === "string") {
				this.socket.send(message);
			}
        }
    }

    extendSocket() {

        const funcs = this.socketFuncs;

        for(let prop in funcs) {
            this.socket[prop] = funcs[prop];
        }
    }

    get address() {
        return `ws://${this.config.host}:${this.config.port}`;
    }

    get socketFuncs() {

        return  {
            onopen: function () {
                this.connected = true;
            },

            onmessage: function (msg) {
                console.log(JSON.parse(msg.data));
            },

            onclose: function (event) {
                let reason = "";

                switch (event.code) {
                    case 1000:
                        reason = "Connection fulfilled.";
                        break;
                    case 1001:
                        reason = "An endpoint is \"going away\", such as a server going down or a browser having navigated away from a page.";
                        break;
                    case 1002:
                        reason = "An endpoint is terminating the connection due to a protocol error";
                        break;
                    case 1003:
                        reason = "An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message).";
                        break;
                    case 1004:
                        reason = "Reserved. The specific meaning might be defined in the future.";
                        break;
                    case 1005:
                        reason = "No status code was actually present.";
                        break;
                    case 1006:
                        reason = "The connection was closed abnormally, e.g., without sending or receiving a Close control frame";
                        break;
                    case 1007:
                        reason = "An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [http://tools.ietf.org/html/rfc3629] data within a text message).";
                        break;
                    case 1008:
                        reason = "An endpoint is terminating the connection because it has received a message that \"violates its policy\". This reason is given either if there is no other sutible reason, or if there is a need to hide specific details about the policy.";
                        break;
                    case 1009:
                        reason = "An endpoint is terminating the connection because it has received a message that is too big for it to process.";
                        break;
                    case 1010:
                        reason = "An endpoint (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn't return them in the response message of the WebSocket handshake. Specifically, the extensions that are needed are: " + event.reason;
                        break;
                    case 1011:
                        reason = "A server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.";
                        break;
                    case 1015:
                        reason = "The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).";
                        break;
                    default:
                        reason = "Unknown reason.";
                }

                console.log(reason);

                this.reconnect();
            }
        };
    }
}

export default new Network();