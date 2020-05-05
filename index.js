console.log("Person1 : Shows Ticket");
console.log("Person2 : Shows Ticket");

const promiseWifeBriningTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ticket");
  }, 3000);
});

const getPopcorn = promiseWifeBriningTickets.then((ticket) => {
  console.log("Wife : Brings the tickets.");
  console.log("Husband : Let go in.");
  console.log("Wife : No, I'm hungry. I need popcorn.");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${ticket} & Popcorn`);
    }, 3000);
  });
});

const getButter = getPopcorn.then((popcorn) => {
  console.log("Husband : Here, I have baught the popcorn. Lets go in.");
  console.log("Wife : No, I want some butter too.");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${popcorn} & butter`);
    }, 3000);
  });
});

getButter.then((ticket) => {
  console.log(`Person3 : Shows ${ticket}`);
});

console.log("Person4 : Shows Ticket");
console.log("Person5 : Shows Ticket");
