const dotenv = require('dotenv');
require("./instrument.js");
const Sentry = require("@sentry/node");

dotenv.config();

const app = require('./delivery/app');

Sentry.setupExpressErrorHandler(app);

app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});