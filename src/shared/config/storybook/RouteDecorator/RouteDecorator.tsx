import {Decorator} from '@storybook/react';
import '../../../../app/styles/index.scss';
import {BrowserRouter} from "react-router-dom";

export const RouteDecorator: Decorator = (Story) => {
    return (
        <BrowserRouter>
            <Story/>
        </BrowserRouter>
    );
};