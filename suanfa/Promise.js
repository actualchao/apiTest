const aa = new Promise((r, j) => {
  setTimeout(() => {
    Math.random() > 0.5 ? r('success') : j(new Error)
  }, 3000);
})


aa.then(() => {
  console.log('then')
}).catch(() => {
  console.log('catch');
}).then(() => {
  console.log('then2');
})