import FabaStore from "@fabalous/core/store/FabaStore";
import FabaRuntimeNode from "@fabalous/runtime-node/FabaRuntimeNode";
import NodeStore from "./common/store/StoreNode";

class A_Server extends FabaRuntimeNode{
    constructor(store:FabaStore<NodeStore>){
        const port = process.env.SERVER_PORT || 3000 as any;
        console.log("Server start at port: ", port);
        super(store, port);
    };
}

new A_Server(new FabaStore(new NodeStore()));