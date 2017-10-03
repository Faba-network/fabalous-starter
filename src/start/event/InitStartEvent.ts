import FabaEvent from "@fabalous/core/FabaEvent";
import {ReactElement} from "react";

export default class InitStartEvent extends FabaEvent {
    view:ReactElement<any>;

    constructor() {
        super("InitStartEvent");
    }
}