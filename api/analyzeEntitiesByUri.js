const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let {
        accessToken,
        encodingType,
        documentType='PLAIN_TEXT',
        documentLanguage,
        documentContent,
        documentGcsContentUri
    } = req.body.args;

    let required = lib.parseReq({accessToken});

    if(required.length > 0)
        throw new RapidError('REQUIRED_FIELDS', required);

    if(!documentGcsContentUri) {
        throw new RapidError('REQUIRED_FIELDS', ['documentGcsContentUri']);
    }

    let params = lib.clearArgs({
        encodingType,
        document: {
            type: documentType,
            language: documentLanguage,
            gcsContentUri: documentGcsContentUri
        }
    }, true);

    request({
        uri: `https://language.googleapis.com/v1beta1/documents:analyzeEntities${accessToken}`,
        method: 'POST',
        body: JSON.stringify(params)
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))
            defered.resolve(lib.safeParse(reslut));
        else
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;
}
