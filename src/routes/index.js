
const newRouter = require('./tintuc');
const siteRouter = require('./site');


function route(app)
{
    app.use('/tintuc', newRouter);

    app.use('/', siteRouter);
}

module.exports = route;