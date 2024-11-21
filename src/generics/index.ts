const addId = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  const id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

const user = addId({
  name: "sulaiman",
  age: 25,
  country: "Bangladesh",
});

user.country;
