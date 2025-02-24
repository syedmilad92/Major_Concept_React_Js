export const getAllUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()
      return [true, data];
  } catch (error) {
    return [false, error];
  }
};
