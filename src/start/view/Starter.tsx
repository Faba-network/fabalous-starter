import * as React from 'react';
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

interface IStarterProps {
    children?: any
}

export default class Starter extends FabaWebBaseComponent<IStarterProps> {
    render() {
        return (
            <div>
                Start Fabalous
            </div>
        )
    }
}