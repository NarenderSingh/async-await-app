const preMovieStuff1 = async () => {
  const getTicket = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ticket"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Popcorn`), 3000);
  });

  const getButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Butter`), 3000);
  });

  const getCoke = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Coke`), 4000);
  });

  const ticket = await getTicket;
  const popcorn = await getPopcorn;
  const butter = await getButter;
  const coke = await getCoke;

  const result = await Promise.all([ticket, popcorn, butter, coke]);

  console.log(JSON.stringify(result));

  return result;
};

const preMovieStuff2 = async () => {
  const getTicket = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ticket"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Popcorn`), 3000);
  });

  const getButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Butter`), 3000);
  });

  const getCoke = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Coke`), 4000);
  });

  const result = await Promise.all([getTicket, getPopcorn, getButter, getCoke]);
  // or
  const [ticket, popcorn, butter, coke] = await Promise.all([
    getTicket,
    getPopcorn,
    getButter,
    getCoke,
  ]);

  console.log(JSON.stringify(result));

  return result;
};

preMovieStuff1().then((response) => {
  console.log(`Response : ${response}`);
});

preMovieStuff2().then((response) => {
  console.log(`Response : ${response}`);
});
