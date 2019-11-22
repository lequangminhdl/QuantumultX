//@supported 7F47528C4665
let obj = JSON.parse($response.body);
obj.data.attributes["is-paid"] = true;
$done({body: JSON.stringify(obj)});
//bynubyta