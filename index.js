const app = express();
__path = process.cwd();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
console.log('Loading modules...');
let server = require('./qr'),
    code = require('./pair');
console.log('Modules loaded successfully');
require('events').EventEmitter.defaultMaxListeners = 500;

app.use('/server', server);
app.use('/code', code);
app.use('/pair', async (req, res, next) => {
  try {
    console.log('Serving pair.html from:', __path + '/pair.html');
    res.sendFile(__path + '/pair.html');
  } catch (err) {
    console.error('Error serving pair.html:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.use('/qr', async (req, res, next) => {
  try {
    console.log('Serving qr.html from:', __path + '/qr.html');
    res.sendFile(__path + '/qr.html');
  } catch (err) {
    console.error('Error serving qr.html:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.use('/', async (req, res, next) => {
  try {
    console.log('Serving main.html from:', __path + '/main.html');
    res.sendFile(__path + '/main.html');
  } catch (err) {
    console.error('Error serving main.html:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`
Don't Forgot To Give Star.

 Server running on http://localhost:` + PORT);
});

module.exports = app;
