const { constant } = require("../constant");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    let title = '';
    switch (statusCode) {
        case constant.SUCCESS:
            title = 'Success';
            break;
        case constant.BAD_REQUEST:
            title = 'Bad Request';
            break;
        case constant.UNAUTHORIZED:
            title = 'Unauthorized';
            break;
        case constant.FORBIDDEN:
            title = 'Forbidden';
            break;
        case constant.NOT_FOUND:
            title = 'Not Found';
            break;
        case constant.INTERNAL_SERVER_ERROR:
            title = 'Internal Server Error';
            break;
        default:
            title = 'Something went wrong';
    }
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        title: title,
    });
}
module.exports = errorHandler