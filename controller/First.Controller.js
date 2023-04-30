export const getMessege = (req, res) => {
    res.json({
        "message": "Request tipo GET"
    });
}

export const getParam = (req, res) => {

    const param = req.params.name;

    res.json({
        "message": `Request con PARAM->NAME = ${param}`
    });
}

export const getQuery = (req, res) => {

    const query = req.query.name;

    res.json({
        "message": `Request con QUERY->NAME = ${query}`
    });
}

export const postMessege = (req, res) => {
    res.json({
        "message": "Request tipo POST"
    });
}

export const putMessege = (req, res) => {
    res.json({
        "message": "Request tipo PUT"
    });
}

export const deleteMessege = (req, res) => {
    res.json({
        "message": "Request tipo DELETE"
    });
}