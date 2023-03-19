const songsRoutes = require('./routes/songsRoutes');
const geresRoutes = require('./routes/genreRoutes');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/canciones', songsRoutes);
app.use('/generos', geresRoutes);

app.listen(process.env.PORT || 3050, () => console.log('Servidor activo-3050'));
