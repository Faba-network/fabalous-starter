import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import InitStartEvent from "../event/InitStartEvent";
import StoreWeb from "../../common/store/StoreWeb";
import * as React from "react";
import Starter from "../view/Starter";

export default class InitStartCommand extends FabaWebCommand<StoreWeb> {
    execute(event: InitStartEvent) {
        event.view = <Starter />;
        event.callBack();
    }
}