function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const value = { position: position, delay: delay };

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
}

const submitButton = document.querySelector('.form button[type="submit"]');
submitButton.addEventListener('click', event => {
  event.preventDefault();

  const delay = parseInt(
    document.querySelector('.form input[name=delay]').value
  );
  const amount = parseInt(
    document.querySelector('.form input[name=amount]').value
  );
  const step = parseInt(document.querySelector('.form input[name=step').value);

  for (let i = 0; i < amount; i++) {
    createPromise(i, delay + step * i)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
