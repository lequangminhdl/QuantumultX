//@supported 7FD801C2983A
var obj = JSON.parse($response.body);

obj["user"]["is_ios_licensed"]= true;

$done({body: JSON.stringify(obj)});

// Descriptions