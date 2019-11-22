//@supported 7F47528C4665
var obj = JSON.parse($response.body);

obj["user"]["is_ios_licensed"]= true;

$done({body: JSON.stringify(obj)});

// Descriptions