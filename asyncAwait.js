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

async function main() {
  try {
    await promisePrintString("A");
    await promisePrintString("B");
    await promisePrintString("C");
  } catch(err) {
    console.log(err.message);
  }

  console.log('Synchronous');
}

main();