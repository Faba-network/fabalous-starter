import {FabaWebMediator} from "@fabalous/runtime-web/FabaWebMediator";
import InitStartEvent from "./event/InitStartEvent";
import InitStartCommand from "./command_web/InitStartCommand";

export default class OrderMediatorWeb extends FabaWebMediator {
    registerCommands(): void {
        this.addCommand(InitStartEvent, InitStartCommand);
    }
}