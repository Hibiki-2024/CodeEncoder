'use strict';
const PlainTextEntry = document.getElementById('input');
const Convert = document.getElementById('ConvertRun');

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

//テスト用コード
//document.writre(convertToUnicodeEscape(toUnicodeEscape(こんにちは☺️hello)));

Convert.addEventListener('click',() => {
    const inputText = PlainTextEntry.value;
    if (inputText.length === 0) {

      alert("入力してください");
      return;
    }

    // 診断結果表示エリアの作成
    resultDivision.innerText = '';
    
    // headerDivision の作成
    const headerDivision = document.createElement('div');
    headerDivision.setAttribute('class', 'card-header text-bg-light');
    headerDivision.innerText = '結果';

    // bodyDivision の作成
    const bodyDivision = document.createElement('div');
    bodyDivision.setAttribute('class', 'card-body');

    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'card-text');

    const ConvertedASCII = toUnicodeEscape(inputText);
    const ConvertedUnicode = convertToUnicodeEscape(ConvertedASCII);
   
    // 以下の部分はしっかりと暗号化する際に使用する
    const result = ConvertedUnicode;

    paragraph.innerText = result;
    bodyDivision.appendChild(paragraph);

    // resultDivision に Bootstrap のスタイルを適用する
    resultDivision.setAttribute('class', 'card');

    // headerDivision と bodyDivision を resultDivision に差し込む
    resultDivision.appendChild(headerDivision);
    resultDivision.appendChild(bodyDivision);
  }


