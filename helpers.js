

function successfullMessage(msg) {
    return "β *X-Troid*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *X-Troid*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *X-Troid*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
