
passport.use('local-signup', new LocalStrategy(
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
))

