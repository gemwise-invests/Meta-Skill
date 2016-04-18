export function respondWithResult(res, statusCode) {
    return function (entity) {
        // override status code from entity
        statusCode = entity.statusCode || statusCode || 200
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
