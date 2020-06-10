process.on("exit", () => console.log("Exit"));

process.on("beforeExit", () => console.log("Before Exit"));

process.on('uncaughtException', () => {
  console.log('Exception');
  process.exit();
});

throw new Error('Test Error');

/*
  Exception
  Exit
 */