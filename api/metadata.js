module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'GoogleNLP',
        "tagline": "GoogleNLP API Package",
        "keywords": ["API", "language", "Google", "Cloud Platform"],
        "description": "Derive insights from unstructured text using Google machine learning",
        'image': 'http://logo.clearbit.com/google.com',
        'repo': 'https://github.com/RapidSoftwareSolutions/Marketplace-GoogleNLP-Package',
        'accounts': {
            'domain': 'cloud.google.com',
            'credentials': [
                'apiKey',
                'apiSecret'
            ]
        },
        'blocks': [
          {
              "name":"getAccessToken",
              "description": "Generate access token",
              "args":[
                  {
                      name: "apiKey",
                      type: "credentials",
                      info: "Google Cloud api key",
                      required: true
                  },
                  {
                      name: "apiSecret",
                      type: "credentials",
                      info: "Google Cloud api secret",
                      required: true
                  },
                  {
                      name: "code",
                      type: "String",
                      info: "Code provided by user",
                      required: true
                  },
                  {
                      name: "redirectUrl",
                      type: "String",
                      info: "Redirect URL for your application",
                      required: true
                  }
              ],
              'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
          },
          {
            "name":"analyzeEntities",
            "description": "Finds named entities (currently finds proper names) in the text, entity types, salience, mentions for each entity, and other properties.",
            "args":[
                {
                    name: "accessToken",
                    type: "String",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "encodingType",
                    type: "Select",
                    options: ["NONE", "UTF8", "UTF16", "UTF32"],
                    info: "The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`",
                    required: false
                },
                {
                    name: "documentType",
                    type: "Select",
                    options: ["TYPE_UNSPECIFIED", "PLAIN_TEXT", "HTML"],
                    info: "Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`",
                    required: true
                },
                {
                    name: "documentLanguage",
                    type: "Select",
                    options:["zh", "zh-Hant", "en", "fr", "de", "it", "ja", "ko", "pt", "es"],
                    info: "The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. Only English, Spanish, and Japanese textual content are supported.",
                    required: false
                },
                {
                    name: "documentContent",
                    type: "String",
                    info: "The content of the input in string format.",
                    required: true
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        },
        {
            "name":"analyzeEntitiesByUri",
            "description": "Finds named entities (currently finds proper names) in the text, entity types, salience, mentions for each entity, and other properties.",
            "args":[
                {
                    name: "accessToken",
                    type: "String",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "encodingType",
                    type: "Select",
                    options: ["NONE", "UTF8", "UTF16", "UTF32"],
                    info: "The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`",
                    required: false
                },
                {
                    name: "documentType",
                    type: "Select",
                    options: ["TYPE_UNSPECIFIED", "PLAIN_TEXT", "HTML"],
                    info: "Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`",
                    required: true
                },
                {
                    name: "documentLanguage",
                    type: "Select",
                    options:["zh", "zh-Hant", "en", "fr", "de", "it", "ja", "ko", "pt", "es"],
                    info: "The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. Only English, Spanish, and Japanese textual content are supported.",
                    required: false
                },
                {
                    name: "documentGcsContentUri",
                    type: "String",
                    info: "The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.",
                    required: true
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
                    type: "String",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "encodingType",
                    type: "Select",
                    options: ["NONE", "UTF8", "UTF16", "UTF32"],
                    info: "The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`",
                    required: false
                },
                {
                    name: "documentType",
                    type: "Select",
                    options: ["TYPE_UNSPECIFIED", "PLAIN_TEXT", "HTML"],
                    info: "Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`",
                    required: true
                },
                {
                    name: "documentLanguage",
                    type: "Select",
                    options:["zh", "zh-Hant", "en", "fr", "de", "it", "ja", "ko", "pt", "es"],
                    info: "The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. nly English, Spanish, and Japanese textual content are supported.",
                    required: false
                },
                {
                    name: "documentContent",
                    type: "String",
                    info: "The content of the input in string format.",
                    required: true
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        },
        ,
        {
            "name":"analyzeSentimentByUri",
            "description": "Analyzes the sentiment of the provided text.",
            "args":[
                {
                    name: "accessToken",
                    type: "String",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "encodingType",
                    type: "Select",
                    options: ["NONE", "UTF8", "UTF16", "UTF32"],
                    info: "The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`",
                    required: false
                },
                {
                    name: "documentType",
                    type: "Select",
                    options: ["TYPE_UNSPECIFIED", "PLAIN_TEXT", "HTML"],
                    info: "Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`",
                    required: true
                },
                {
                    name: "documentLanguage",
                    type: "Select",
                    options:["zh", "zh-Hant", "en", "fr", "de", "it", "ja", "ko", "pt", "es"],
                    info: "The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. nly English, Spanish, and Japanese textual content are supported.",
                    required: false
                },

                {
                    name: "documentGcsContentUri",
                    type: "String",
                    info: "The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.",
                    required: true
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
                    type: "String",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "encodingType",
                    type: "Select",
                    options: ["NONE", "UTF8", "UTF16", "UTF32"],
                    info: "The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`",
                    required: false
                },
                {
                    name: "documentType",
                    type: "Select",
                    options: ["TYPE_UNSPECIFIED", "PLAIN_TEXT", "HTML"],
                    info: "Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`",
                    required: true
                },
                {
                    name: "documentLanguage",
                    type: "Select",
                    options:["zh", "zh-Hant", "en", "fr", "de", "it", "ja", "ko", "pt", "es"],
                    info: "The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. nly English, Spanish, and Japanese textual content are supported.",
                    required: false
                },
                {
                    name: "documentContent",
                    type: "String",
                    info: "The content of the input in string format.",
                    required: true
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        },
        {
            "name":"analyzeSyntaxByUri",
            "description": "Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.",
            "args":[
                {
                    name: "accessToken",
                    type: "String",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "encodingType",
                    type: "Select",
                    options: ["NONE", "UTF8", "UTF16", "UTF32"],
                    info: "The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`",
                    required: false
                },
                {
                    name: "documentType",
                    type: "Select",
                    options: ["TYPE_UNSPECIFIED", "PLAIN_TEXT", "HTML"],
                    info: "Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`",
                    required: true
                },
                {
                    name: "documentLanguage",
                    type: "Select",
                    options:["zh", "zh-Hant", "en", "fr", "de", "it", "ja", "ko", "pt", "es"],
                    info: "The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. nly English, Spanish, and Japanese textual content are supported.",
                    required: false
                },

                {
                    name: "documentGcsContentUri",
                    type: "String",
                    info: "The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.",
                    required: true
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
                    type: "String",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "encodingType",
                    type: "Select",
                    options: ["NONE", "UTF8", "UTF16", "UTF32"],
                    info: "The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`",
                    required: false
                },
                {
                    name: "documentType",
                    type: "Select",
                    options: ["TYPE_UNSPECIFIED", "PLAIN_TEXT", "HTML"],
                    info: "Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`",
                    required: true
                },
                {
                    name: "documentLanguage",
                    type: "Select",
                    options:["zh", "zh-Hant", "en", "fr", "de", "it", "ja", "ko", "pt", "es"],
                    info: "The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. nly English, Spanish, and Japanese textual content are supported.",
                    required: false
                },
                {
                    name: "documentContent",
                    type: "String",
                    info: "The content of the input in string format.",
                    required: true
                },

                {
                    name: "extractSyntax",
                    type: "Select",
                    options:["true", "false"],
                    info: "Extract syntax information. Provides a powerful set of tools for analyzing and parsing text through syntactic analysis.",
                    required: false
                },
                {
                    name: "extractEntities",
                    type: "Select",
                    options:["true", "false"],
                    info: "Extract entities. Entity Analysis provides information about entities in the text, which generally refer to named 'things' such as famous individuals, landmarks, common objects, etc.",
                    required: false
                },
                {
                    name: "extractDocumentSentiment",
                    type: "Select",
                    options:["true", "false"],
                    info: "Extract document-level sentiment. Sentiment analysis attempts to determine the overall attitude (positive or negative) expressed within the text. Sentiment is represented by numerical score and magnitude values.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        },
        {
            "name":"annotateTextByUri",
            "description": "A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.",
            "args":[
                {
                    name: "accessToken",
                    type: "String",
                    info: "Google Cloud Access Token",
                    required: true
                },
                {
                    name: "encodingType",
                    type: "Select",
                    options: ["NONE", "UTF8", "UTF16", "UTF32"],
                    info: "The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`",
                    required: false
                },
                {
                    name: "documentType",
                    type: "Select",
                    options: ["TYPE_UNSPECIFIED", "PLAIN_TEXT", "HTML"],
                    info: "Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`",
                    required: true
                },
                {
                    name: "documentLanguage",
                    type: "Select",
                    options:["zh", "zh-Hant", "en", "fr", "de", "it", "ja", "ko", "pt", "es"],
                    info: "The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. nly English, Spanish, and Japanese textual content are supported.",
                    required: false
                },

                {
                    name: "documentGcsContentUri",
                    type: "String",
                    info: "The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.",
                    required: true
                },
                {
                    name: "extractSyntax",
                    type: "Select",
                    options:["true", "false"],
                    info: "Extract syntax information. Provides a powerful set of tools for analyzing and parsing text through syntactic analysis.",
                    required: false
                },
                {
                    name: "extractEntities",
                    type: "Select",
                    options:["true", "false"],
                    info: "Extract entities. Entity Analysis provides information about entities in the text, which generally refer to named 'things' such as famous individuals, landmarks, common objects, etc.",
                    required: false
                },
                {
                    name: "extractDocumentSentiment",
                    type: "Select",
                    options:["true", "false"],
                    info: "Extract document-level sentiment. Sentiment analysis attempts to determine the overall attitude (positive or negative) expressed within the text. Sentiment is represented by numerical score and magnitude values.",
                    required: false
                }
            ],
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }]
    })
};
