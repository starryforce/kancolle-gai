var fn_index = async(ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome!'
    });
};

var fn_signin = async(ctx) => {
    var email = ctx.request.body.email || '',
        password = ctx.request.body.password || '';
    if (email === 'admin@example.com' && password === '123456') {
        ctx.render('signin-ok.html', {
            titlle: 'Sign In OK',
            name: 'Mr Node'
        })
    } else {
        ctx.render('signin-failed.html', {
            title: 'Sign In Failed'
        })
    }
}

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};