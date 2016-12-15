module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'GoogleNLP',
        "tagline": "GoogleNLP API Package",
        "keywords": ["API"],
        "description": "Derive insights from unstructured text using Google machine learning",
        'image': 'http://logo.clearbit.com/google.com',
        'repo': 'https://github.com/RapidSoftwareSolutions/Marketplace-GoogleNLP-Package',
        'accounts': {
            'domain': 'cloud.google.com',
            'credentials': [
                'accessToken'
            ]
        },
        'blocks': [{
            "name":"analyzeEntities",
            "description": "Finds named entities (currently finds proper names) in the text, entity types, salience, mentions for each entity, and other properties.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "encodingType",
                    type: "String",
                    info: "The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`",
                    required: false
                },
                {
                    name: "documentType",
                    type: "String",
                    info: "Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`",
                    required: true
                },
                {
                    name: "documentLanguage",
                    type: "String",
                    info: "The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. nly English, Spanish, and Japanese textual content are supported.",
                    required: false
                },
                {
                    name: "documentContent",
                    type: "String",
                    info: "The content of the input in string format.",
                    required: false
                },
                {
                    name: "documentGcsContentUri",
                    type: "String",
                    info: "The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        },
        {
            "name":"analyzeSentiment",
            "description": "Analyzes the sentiment of the provided text.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "encodingType",
                    type: "String",
                    info: "The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`",
                    required: false
                },
                {
                    name: "documentType",
                    type: "String",
                    info: "Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`",
                    required: true
                },
                {
                    name: "documentLanguage",
                    type: "String",
                    info: "The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. nly English, Spanish, and Japanese textual content are supported.",
                    required: false
                },
                {
                    name: "documentContent",
                    type: "String",
                    info: "The content of the input in string format.",
                    required: false
                },
                {
                    name: "documentGcsContentUri",
                    type: "String",
                    info: "The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        },
        {
            "name":"analyzeSyntax",
            "description": "Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "encodingType",
                    type: "String",
                    info: "The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`",
                    required: false
                },
                {
                    name: "documentType",
                    type: "String",
                    info: "Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`",
                    required: true
                },
                {
                    name: "documentLanguage",
                    type: "String",
                    info: "The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. nly English, Spanish, and Japanese textual content are supported.",
                    required: false
                },
                {
                    name: "documentContent",
                    type: "String",
                    info: "The content of the input in string format.",
                    required: false
                },
                {
                    name: "documentGcsContentUri",
                    type: "String",
                    info: "The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        },
        {
            "name":"annotateText",
            "description": "A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.",
            "args":[
                {
                    name: "accessToken",
                    type: "credentials",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "encodingType",
                    type: "String",
                    info: "The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`",
                    required: false
                },
                {
                    name: "documentType",
                    type: "String",
                    info: "Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`",
                    required: true
                },
                {
                    name: "documentLanguage",
                    type: "String",
                    info: "The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. nly English, Spanish, and Japanese textual content are supported.",
                    required: false
                },
                {
                    name: "documentContent",
                    type: "String",
                    info: "The content of the input in string format.",
                    required: false
                },
                {
                    name: "documentGcsContentUri",
                    type: "String",
                    info: "The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.",
                    required: false
                },
                {
                    name: "extractSyntax",
                    type: "Boolean",
                    info: "Extract syntax information.",
                    required: false
                },
                {
                    name: "extractEntities",
                    type: "Boolean",
                    info: "Extract entities.",
                    required: false
                },
                {
                    name: "extractDocumentSentiment",
                    type: "Boolean",
                    info: "Extract document-level sentiment.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }]
    })
};
