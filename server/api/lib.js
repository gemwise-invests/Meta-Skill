export function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200
    return function (entity) {
        if (entity) {
            res.status(statusCode).json(entity)
        }
    }
}

export function handleError(res, statusCode) {
    return function (err) {
        statusCode = statusCode || err.statusCode || 500
        console.error(err.stack)
        res.status(statusCode).json({code: statusCode, err: err.message})
    }
}
