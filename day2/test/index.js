
const getResponse = async () => {
  const response = await fetch('https://example.com');
  return response;
}

console.log(getResponse());