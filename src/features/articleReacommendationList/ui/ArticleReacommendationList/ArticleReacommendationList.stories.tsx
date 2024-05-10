import type {Meta, StoryObj} from '@storybook/react';
import {ArticleReacommendationList} from './ArticleReacommendationList';
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";
import {Article} from "../../../../entities/Article";
const article: Article = {
    id: '1',
    img: '',
    type: [],
    title: 'Hello World',
    subtitle: 'Retng',
    blocks: [],
    views: 123,
    user: {id: '1', username: 'Pavel'},
    createdAt: ''
}
const meta = {
    title: 'features /ArticleReacommendationList',
    component: ArticleReacommendationList,
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    {...article, id: '1'},
                    {...article, id: '2'},
                    {...article, id: '3'}
                ],
            },
        ],
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleReacommendationList>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({})]
};