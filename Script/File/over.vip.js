//@supported 7F47528C4665
var body = $response.body;
let obj = JSON.parse(body);
obj.user.subscription["isSubscriptionActive"] = true;
obj.user.subscription["entitlement"] = ["OVER_PRO"];
$done({body:JSON.stringify(obj)});

