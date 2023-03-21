function getFullName(userEntity: {
  firstName: string;
  surname: string;
}): string {
  return `${userEntity.firstName} ${userEntity.surname}`;
}

const user = {
  firstName: "Anton",
  surname: "Ivanov",
  city: "Minsk",
  age: 30,
  skills: {
    dev: true,
    devops: true,
  },
};
console.log(getFullName(user));
