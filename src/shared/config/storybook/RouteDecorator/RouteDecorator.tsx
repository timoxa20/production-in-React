import {Decorator} from '@storybook/react';
import '../../../../app/styles/index.scss';
import {BrowserRouter, MemoryRouter} from "react-router-dom";

export const RouteDecorator: Decorator = (Story) => {
    return (
        <MemoryRouter initialEntries={['/']}>
            <Story/>
        </MemoryRouter>
    );
};