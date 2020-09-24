const callbackPrintString = (string, callback) => {
    setTimeout(() => {
        console.log(string);
        callback();
    }, Math.floor(Math.random() * 100) + 1);
};

const main = () => {
    callbackPrintString("A", () => {
        callbackPrintString("B", () => {
            callbackPrintString("C", () => {});
        });
    });
};

main();
