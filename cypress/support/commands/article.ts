import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'JavaScript news Свежая ',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    views: 1022,
    createdAt: '26.04.2024',
    userId: '1',
    type: ['IT'],
    blocks: [],
};
export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: `http://localhost:8000/articles`,
            headers: { Authorization: 'fasdg' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'fasdg' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
