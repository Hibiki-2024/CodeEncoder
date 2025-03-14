'use strict';

// 入力フィールドとボタン、結果表示エリアの取得
const PlainTextEntry = document.getElementById('input');
const Convert = document.getElementById('ConvertRun');
const resultDivision = document.getElementById('result-area');

// Unicode エスケープ変換関数 ChatGPT製
function convertToUnicodeEscape(input) {
  // 入力文字列全体をループして文字コードを変換
  return input.split('').map(char => {
    const codePoint = char.codePointAt(0);
    return '\\u' + ('0000' + codePoint.toString(16)).slice(-4);
  }).join('');
}

// ボタンのクリックイベントリスナーを設定
Convert.addEventListener('click', () => {
  // 入力テキストの取得
  const inputText = PlainTextEntry.value;

  // 入力が空の場合はアラートを表示して処理を中断
  if (inputText.length === 0) {
    alert("入力してください");
    return;
  }

  // 結果表示エリアの初期化
  resultDivision.innerText = '';

  // headerDivision の作成
  const headerDivision = document.createElement('div');
  headerDivision.setAttribute('class', 'card-header text-bg-light');
  headerDivision.innerText = '結果';

  // bodyDivision の作成
  const bodyDivision = document.createElement('div');
  bodyDivision.setAttribute('class', 'card-body');

  // 結果表示用の段落を作成
  const paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'card-text');

  // 入力テキストを Unicode エスケープに変換
  const ConvertedUnicode = convertToUnicodeEscape(inputText);

    // 以下の部分はしっかりと暗号化する際に使用する
    const result = ConvertedUnicode;

    paragraph.innerText = result;
  bodyDivision.appendChild(paragraph);

  // resultDivision に Bootstrap のスタイルを適用
  resultDivision.setAttribute('class', 'card');

  // headerDivision と bodyDivision を resultDivision に追加
  resultDivision.appendChild(headerDivision);
  resultDivision.appendChild(bodyDivision);
});