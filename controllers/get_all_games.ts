import { Request, Response } from 'express';
import axios from 'axios';
import { Elements } from '../globals/domElements'
import { JSDOM } from 'jsdom';
import { getDomContent } from '../utilities/getDomContent';

export const getAllGames = async (req: Request, res: Response) => {
    try {
        const { data } = await axios.get(Elements.FROM_URL);
        const dom = new JSDOM(data);
        const allMatches = dom.window.document.querySelector(Elements.ALL_MATCHES_SELECTOR)?.children;
        res.send(getDomContent(Array.from(allMatches || [])));
    } catch {
        res.send('Ndodhi nje gabim');
    }
}