function promisePrintString(string) {
  const success = true;
  
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (success) {
          console.log(string);
          resolve();
        } else {
          reject(new Error('An Error Occurred!'));
          // throw new Error('An Error Occurred!');
        }
      }, 
      Math.floor(Math.random() * 100) + 1
    );
  })
}

function main() {
  promisePrintString("A")
    .then(() => promisePrintString("B"))
    .then(() => promisePrintString("C"));
    
    
    // .catch((err) => console.log(err.message))
    // .finally(() => console.log('Cleanup!'));

    // console.log('Synchronous');
}

main();