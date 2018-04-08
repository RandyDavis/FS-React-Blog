const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'select_account'
    }));

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/blogs');
        }
    );

    app.get(
        '/api/login',
        passport.authenticate("local"),
        (req, res) => {
            res.redirect('/blogs');
        }
    );

    app.post(
        '/api/login',
        passport.authenticate("local", {
            successRedirect: '/blogs',
            failureRedirect: '/login'
        }), (req, res) => {

        }
    )

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/blogs');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};