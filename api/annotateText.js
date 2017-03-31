const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        accessToken,
        encodingType,
        documentType='UTF8',
        documentLanguage,
        documentContent,
        documentGcsContentUri,
        extractSyntax,
        extractEntities,
        extractDocumentSentiment
    } = req.body.args;
        
    let required = lib.parseReq({accessToken});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    if(!documentContent && !documentGcsContentUri)
        throw new RapidError('REQUIRED_FIELDS_OR', ['documentContent', 'extractEntities']);

    if(!extractSyntax && !extractEntities && !extractDocumentSentiment)
        throw new RapidError('REQUIRED_FIELDS_OR', ['extractSyntax', 'extractEntities', 'extractDocumentSentiment']);

    let params = lib.clearArgs({
        encodingType,
        document: {
            type: documentType,
            language: documentLanguage,
            content: documentContent,
            gcsContentUri: documentGcsContentUri
        },
        features: {
            extractSyntax, 
            extractEntities, 
            extractDocumentSentiment
        }
    }, true);

    request({
        uri: 'https://language.googleapis.com/v1beta1/documents:annotateText',
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve(lib.safeParse(reslut));
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;
}
