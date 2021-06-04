//Protótipo #1

/*passport.use('local-signup', new LocalStrategy(
{
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
));

app.use(session ({
    secret: 'secret key',
    resave: true,
    saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
passport.authenticate('local', { successRedirect: '/',
failureRedirect: '/login',
failureFlash: true}));

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
    (username, password, done) => {
        username.findOne({ username: username }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Username incorreto.'});
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Password errada.'});
            }
            return done(null, user);
        })
    }
))*/

// Protótipo #2
const mysql = require('mysql');
const { DOUBLE } = require('sequelize/types');
    crypto = require('crypto');

const connection = mysql.createConnection({
    user: 'username',
    password: 'password'
});

connection.query('USE nodedatabase');
const username = process.argv[2];
const password = process.argv[3]; 

connection.query('SELECT password, salt FROM user WHERE username = ?',
    [username], (err, result, fields) => {
        if (err) return console.error(err);

        var newhash = crypto.createHash('sha512')
            .update(result[0].salt + password, 'utf8')
            .digest('hex');

        if (result[0].password === newhash) {
            console.log("Ok, você está logado.");
        }
        else {
            console.log("Sua senha é desconhecida.Tente novamente.");
        }
        connection.end();
    });

    /*CREATE TABLE user (userid INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(userid),
        username VARCHAR(400) NOT NULL, passwordhash VARCHAR(400) NOT NULL ,
        salt DOUBLE NOT NULL);*/

