class CustomMatch {
  constructor(number) {
    this.Number = number;
  }
  plus = function (number) {
    this.Number += number;
    return this;
  };
  minus = function (number) {
    this.Number -= number;
    return this;
  };
  multiply = function (number) {
    this.Number *= number;
    return this;
  };
  divide = function (number) {
    this.Number /= number;
    return this;
  };
}

class User {
  constructor(username, pw) {
    this.username = username;
    this.pw = pw;
  }
}

class Admin extends User {
  constructor(username, pw, section, isModerator) {
    super(username, pw);
    this.section = section;
    this.isModerator = isModerator;
  }
  CheckPassword = function () {
    let hasDigit = false;
    let hasUpper = false;
    let countDigit = 0;
    for (let i = 0; i < this.pw.length; i++) {
      const char = this.pw[i];
      if (isNaN(char)) {
        if (char == char.toUpperCase() && !hasUpper) {
          hasUpper = true;
        }
      } else {
        countDigit++;
      }
    }
    if (countDigit >= 2) {
      hasDigit = true;
    }
    let result = hasDigit && hasUpper;
    return { result, countDigit };
  };
}

let admin = new Admin("javid", "Javid12", "Products", true);

console.log(admin.CheckPassword().countDigit);
