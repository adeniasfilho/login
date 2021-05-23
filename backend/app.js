import { createConnection } from 'mysql';
const connection = createConnection();
const app = express();
app.use(express.json().urlencoded());

app.post('/login', (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;
    const sql = "SELECT * FROM users WHERE user = $1 AND pass = $2";
    deb.query(sql, [user, pass], (err, results) => {
        connection.query(sql, function (err, results) {});
    })
});

const module = module.exports;
module.exports = app;