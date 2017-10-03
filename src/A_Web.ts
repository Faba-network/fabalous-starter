import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaImmutableStore from "@fabalous/core/store/FabaImmutableStore";
import Routes from "./common/Routes";
import Layout from "./common/web/Layout";
import {forceRenderStyles} from "typestyle";
import FabaApiConnection from "@fabalous/runtime-web/transport/FabaApiConnection";
import FabaCore from "@fabalous/core/FabaCore";
import StoreWeb from "./common/store/StoreWeb";

declare const window:any;

if (process.env.NODE_ENV == "development"){
    require('react-hot-loader/patch');
}

class A_Web extends FabaRuntimeWeb{
    constructor(store, module){
        FabaCore.reset();

        if (window.init != true){
            //normalize();
            //setupPage('#container');
            forceRenderStyles();
            FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(process.env.API_URL), "api");
        }

        window.init = true;
        super(store ,Routes ,Layout, module);
    }
}


new A_Web(new FabaImmutableStore(new StoreWeb()), module);