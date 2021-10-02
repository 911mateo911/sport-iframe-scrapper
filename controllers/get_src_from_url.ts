import { Request, Response } from 'express';
import axios from 'axios';
import { JSDOM } from 'jsdom';

export const getSrcFromUrl = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { url } = body;
        const { data } = await axios.get(url);
        const dom = new JSDOM(data);
        const iframe = dom.window.document.querySelector('iframe')?.src;
        const goToNestedIframe = await axios.get(iframe || '');
        const cleanDom = new JSDOM(goToNestedIframe.data);
        const src = cleanDom.window.document.querySelector('iframe')?.src;
        res.send(src);
    } catch {
        res.send('Ndodhi nje gabim');
    }
}