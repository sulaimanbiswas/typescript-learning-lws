interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response1: APIResponse<object> = {
  status: 200,
  type: "Good",
  data: {
    name: "Sulaiman",
    age: 25,
  },
};
