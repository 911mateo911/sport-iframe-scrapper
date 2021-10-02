import { Elements } from '../globals/domElements';

export const formatTitle = (title: string) => title.replace(/\r?\n|\r/g, ' ')

export const getDomContent = (matches: Element[]) => {
    return matches.map(match => {
        const name = formatTitle(match.querySelector(Elements.TITLE_SELECTOR)?.textContent || '');
        const time = match.querySelector(Elements.TIME_SELECTOR)?.textContent;
        const image = match.querySelector('img')?.src;
        const allChildrens = Array.from(match.children);
        const links = Array.from(allChildrens[allChildrens.length - 1].children) as HTMLAnchorElement[];
        return {
            name,
            time,
            links: links.map(link => link.href),
            image
        };
    });
};