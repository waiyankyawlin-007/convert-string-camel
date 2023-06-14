function toCamelCase(str) {
    if (str.length === 0) {
      return "";
    }
  
    var words = str.split(/[-_]/);
    var camelCase = words[0];
  
    for (var i = 1; i < words.length; i++) {
      var capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      camelCase += capitalizedWord;
    }
  
    return camelCase;
  }

  module.exports = toCamelCase
  