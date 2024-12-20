// Unicode エスケープ変換関数
function toUnicodeEscape(input) {
  return input.replace(/[\x00-\xff]/g, function(char) {
    return '\\u' + ('0000' + char.charCodeAt(0).toString(16)).slice(-4);
  });
}

// 非ASCII文字をUnicodeエスケープに変換する関数
function convertToUnicodeEscape(str) {
  return str.replace(/[^\x00-\x7F]/g, function(char) {
    return '\\u' + ('0000' + char.charCodeAt(0).toString(16)).slice(-4);
  });
}