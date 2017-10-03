import * as React from "react";
import {AppContainer} from 'react-hot-loader';

import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

interface ILayoutProps {
    childs: any;
    model: any;
}

export default class Layout extends FabaWebBaseComponent<ILayoutProps> {
    render() {
        if (process.env.NODE_ENV == "development") {
            return (
                <AppContainer>
                    {this.renderContent()}
                </AppContainer>
            );
        } else {
            return this.renderContent();
        }
    }

    renderContent() {
        return this.props.childs;
    }
}