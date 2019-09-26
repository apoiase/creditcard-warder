var luhn = require('luhn');
var find = require('lodash.find');

var CredircardWarder = function (number) {
  this.number = number;
  this.rules = [
    {
      type: 'elo',
      pattern: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7]\d|9000)|50(9\d\d\d)|627780|63(6297|6368)|650(03([^4])|04(\d)|05(0|1)|05([7-9])|06(\d)|07(\d)|08(\d)|4([0-3]\d|8[5-9]|9\d)|5(\d\d|3[0-8])|9([0-6]\d|7[0-8])|7([0-2]\d)|541|700|720|727|901)|65165([2-9])|6516([6-7]\d)|65500(\d)|6550([0-5]\d)|655021|65505([6-7])|6516([8-9]\d)|65170([0-4]))/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'hipercard',
      pattern: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
      format: /\d/g,
      length: [13, 16, 19],
      cvcLength: [3]
    }, {
      type: 'aura',
      pattern: /^(50)/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'visaelectron',
      pattern: /^4(026|17500|405|508|844|91[37])/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'maestro',
      pattern: /^(5(018|0[23]|[68])|6(39|7))/,
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      cvcLength: [3]
    }, {
      type: 'forbrugsforeningen',
      pattern: /^600/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'dankort',
      pattern: /^5019/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'visa',
      pattern: /^4/,
      length: [13, 16],
      cvcLength: [3]
    }, {
      alias: 'master',
      type: 'mastercard',
      pattern: /(?:(?:5[1-5]\d{2}|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12})/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'amex',
      pattern: /^3[47]/,
      length: [15],
      cvcLength: [3, 4]
    }, {
      type: 'dinersclub',
      pattern: /^(?:3(?:0[0-5]|[68]\d)\d{11})$/,
      length: [14],
      cvcLength: [3]
    }, {
      type: 'discover',
      pattern: /^6([045]|22)/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'unionpay',
      pattern: /^(62|88)/,
      length: [16, 17, 18, 19],
      cvcLength: [3]
    }, {
      type: 'jcb',
      pattern: /^35/,
      length: [16],
      cvcLength: [3]
    }, {
      type: 'other',
      pattern: /\d/g,
      length: [20],
      cvcLength: [3]
    }
  ];
};

CredircardWarder.prototype.getRule = function () {
  var self = this;
  var other = find(self.rules, {type: 'other'});
  var rule = find(self.rules, function (rule) {
    return rule.pattern.test(self.number);
  });

  return rule ? rule : other;
};

CredircardWarder.prototype.getBrand = function () {
  return this.getRule().type;
};

CredircardWarder.prototype.validate = function () {
  return luhn.validate(this.number);
};

module.exports = function (number) {
  return new CredircardWarder(number);
};
