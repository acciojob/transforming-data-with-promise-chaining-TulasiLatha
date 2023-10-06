const input = document.getElementById("ip");
const output = document.getElementById("output");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(parseInt(input.value));
    }, 2000);
  });

  promise1
    .then((result) => {
      output.textContent = `Result: ${result}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result);
        }, 2000);
      });
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result * 2);
        }, 1000);
      });
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result - 3);
        }, 1000);
      });
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result / 2);
        }, 1000);
      });
    })
    .then((result) => {
      output.textContent = `Result: ${result}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result + 10);
        }, 1000);
      });
    })
    .then((result) => {
      output.textContent = `Final Result: ${result}`;
    });
});
