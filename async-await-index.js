console.log("Person1 : Shows Ticket");
console.log("Person2 : Shows Ticket");

const preMovieStuff = async () => {
  const promiseWifeBriningTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ticket"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Popcorn`), 5000);
  });

  const getButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Butter`), 7000);
  });

  const ticket = await promiseWifeBriningTickets;

  console.log(`Wife : Brings the ${ticket}.`);
  console.log("Husband : Let go in.");
  console.log("Wife : No, I'm hungry. I need popcorn.");

  const popcorn = await getPopcorn;

  console.log(`Husband : Here, I have baught the ${popcorn}. Lets go in.`);
  console.log("Wife : No, I want some butter too.");

  const butter = await getButter;
  console.log(`Husband : Here, I have baught the ${butter}. Lets go in.`);

  return ticket;
};

preMovieStuff().then((ticket) => {
  console.log(`Person3 : Shows ${ticket}`);
});

console.log("Person4 : Shows Ticket");
console.log("Person5 : Shows Ticket");
