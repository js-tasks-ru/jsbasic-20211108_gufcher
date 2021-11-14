function print(text) {
  console.log(text);
}

function isValid(name) {
  if (name.length < 4) {
    return false;
  } else if(name.indexOf(' ') !== -1) {
    return false;
  } else if(name == null) {
    return false;
  } else {
    return true;
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
