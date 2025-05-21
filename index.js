const app = express();
__path = process.cwd();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000; // Changed to 5000 to match Dockerfile
let server = require('./qr'),
    code = require('./pair');
require('events').EventEmitter.defaultMaxListeners = 500;

app.use('/server', server);
app.use('/code', code);
app.use('/pair', async (req, res, next) => {
  try {
    res.sendFile(__path + '/pair.html');
  } catch (err) {
    console.error('Error serving pair.html:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.use('/qr', async (req, res, next) => {
  try {
    res.sendFile(__path + '/qr.html');
  } catch (err) {
    console.error('Error serving qr.html:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.use('/', async (req, res, next) => {
  try {
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
