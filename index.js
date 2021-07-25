module.exports = Phrase;

// reverse()メソッドを追加してすべてのStringで使えるようにする
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

   // パリンドロームのテスト用に変換した訳文を返す
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // コンテンツの文字だけを返す
  // 利用例:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    const letterRegex = /[a-z]/gi;
    return (Array.from(this.content).filter(c => c.match(letterRegex)) || []).join("");
    // return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // パリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}