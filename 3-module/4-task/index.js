function showSalary(users, age) {
  let usersList = '';
  for (let user of users) {
    if (user.age <= age) {
      usersList += `${user.name}, ${user.balance}\n`;
    }
  }
  return usersList.slice(0, usersList.length - 1);
}
