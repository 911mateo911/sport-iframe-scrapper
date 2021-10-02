import express from 'express';
const app = express();
import { getAllGames } from './controllers/get_all_games';
import { getSrcFromUrl } from './controllers/get_src_from_url';
app.use(express.urlencoded({ extended: true }))

app.get('/', getAllGames);
app.post('/', getSrcFromUrl)

app.listen(process.env.PORT || 9000, () => console.log('Server started on port 9000'));