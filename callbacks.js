function callbackPrintString(string, callback){
  setTimeout(
    () => {
      console.log(string);
      callback();
    }, 
    Math.floor(Math.random() * 100) + 1
  );
}


function main(){
  // callbackPrintString("A", () => {callbackPrintString("B", () => {callbackPrintString("C", () => {})})});

  callbackPrintString("A", () => {
    callbackPrintString("B", () => {
      callbackPrintString("C", () => {})
    })
  })
}

main();