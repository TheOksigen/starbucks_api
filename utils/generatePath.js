const generatePath = (str) => {
    return str.toLowerCase().split(" ").join("-")
}

module.exports = { generatePath }