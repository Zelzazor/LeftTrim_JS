const LTrim = (str="") => {
    if(typeof str == 'number'|| typeof str == 'object'){
        throw new Error("Error: Not a valid string introduced.");
    }
    return str.replace(/^\s+/,"")
}
module.exports = LTrim;