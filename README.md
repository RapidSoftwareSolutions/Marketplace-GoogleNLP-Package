[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/GoogleNLP/functions?utm_source=RapidAPIGitHub_GoogleNLPFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# GoogleNLP Package
Derive insights from unstructured text using Google machine learning
* Domain: cloud.google.com
* Credentials: accessToken

## How to get credentials:
0. Install [gcloud SDK for your system](https://cloud.google.com/sdk/)
1. Go to [google developer console](https://console.developers.google.com)
2. Create new project, enable NL API and billing for your project
3. Go to credentials section > Service account key
4. Select 'App Engine default ...' as Service Account, click `create` and save it
5. Run `gcloud auth activate-service-account --key-file=/path/to/key/file.json`
6. Run `gcloud auth print-access-token`
7. Copy and save your `access token`

Read more: [https://cloud.google.com/natural-language/docs/getting-started](https://cloud.google.com/natural-language/docs/getting-started)

## Custom datatypes:
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]```
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```



Example:
```bash
$ gcloud auth activate-service-account --key-file=key.json
Activated service account credentials for: [rapidapi-prod@appspot.gserviceaccount.com]
$ gcloud auth print-access-token
yaXY.El-1A2CjCHxn76BW04Lc0StD03kvzqJCenfeFTs6Z-wxNhqJ0pkLaHWbGwlr_cFiBgxhLvhMsVF4xclOa_44t2qnyA1AlOkEjwcb..... - your accessToken
```

## GoogleNLP.analyzeEntities
Finds named entities (currently finds proper names) in the text, entity types, salience, mentions for each entity, and other properties.

| Field                | Type       | Description
|----------------------|------------|----------
| accessToken          | credentials| Google Cloud Access Token
| encodingType         | Select     | The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`
| documentType         | Select     | Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`
| documentLanguage     | String     | The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. Only English, Spanish, and Japanese textual content are supported.
| documentContent      | String     | The content of the input in string format.
| documentGcsContentUri| String     | The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.

## GoogleNLP.analyzeSentiment
Analyzes the sentiment of the provided text.

| Field                | Type       | Description
|----------------------|------------|----------
| accessToken          | credentials| Google Cloud Access Token
| encodingType         | Select     | The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`
| documentType         | Select     | Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`
| documentLanguage     | String     | The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. Only English, Spanish, and Japanese textual content are supported.
| documentContent      | String     | The content of the input in string format.
| documentGcsContentUri| String     | The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.

## GoogleNLP.analyzeSyntax
Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.

| Field                | Type       | Description
|----------------------|------------|----------
| accessToken          | credentials| Google Cloud Access Token
| encodingType         | Select     | The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`
| documentType         | Select     | Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`
| documentLanguage     | String     | The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. Only English, Spanish, and Japanese textual content are supported.
| documentContent      | String     | The content of the input in string format.
| documentGcsContentUri| String     | The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.

## GoogleNLP.annotateText
A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.

| Field                   | Type       | Description
|-------------------------|------------|----------
| accessToken             | credentials| Google Cloud Access Token
| encodingType            | Select     | The encoding type used by the API to calculate offsets. Valid values: `NONE`, `UTF8`, `UTF16`, `UTF32`
| documentType            | Select     | Required. If the type is not set or is TYPE_UNSPECIFIED, returns an INVALID_ARGUMENT error. Valid values: `TYPE_UNSPECIFIED`, `PLAIN_TEXT`, `HTML`
| documentLanguage        | String     | The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. Only English, Spanish, and Japanese textual content are supported.
| documentContent         | String     | The content of the input in string format.
| documentGcsContentUri   | String     | The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.
| extractSyntax           | Boolean    | Extract syntax information. Provides a powerful set of tools for analyzing and parsing text through syntactic analysis.
| extractEntities         | Boolean    | Extract entities. Entity Analysis provides information about entities in the text, which generally refer to named 'things' such as famous individuals, landmarks, common objects, etc.
| extractDocumentSentiment| Boolean    | Extract document-level sentiment. Sentiment analysis attempts to determine the overall attitude (positive or negative) expressed within the text. Sentiment is represented by numerical score and magnitude values.
