"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
    StatusCode[StatusCode["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    StatusCode[StatusCode["FAILED"] = 2] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "Payment  success",
    statusCode: StatusCode.SUCCESS,
};
function compute() {
    return 3;
}
const res2 = 1 /* Roles.ADMIN */;
