const printString = (string) => {
    setTimeout(() => console.log(string), Math.floor(Math.random() * 100) + 1); // random number of miliseconds from 1-100
};

const main = () => {
    printString("A");
    printString("B");
    printString("C");
};

main();
