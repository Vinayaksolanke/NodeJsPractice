const Eventemitter = require("events");
const eventemitter = new Eventemitter();
// custom event created
eventemitter.on("welcomeMessage", (name) => {
  console.log(
    `hellow iam  ${name} and create event here fisst i save event in the Eventemitter then i call it on the eventemitter with the new referance then soing "on" method and passing the event name and call back function`
  );
});
//UserMessage ==> is event name and second argument is call back function
eventemitter.on("UserMessage", () => {
  console.log(`User created successfully`);
});
// custom event called
eventemitter.emit("welcomeMessage", "Vinayak");
eventemitter.emit("UserMessage");



const event = () =>
  console.log("this is test furnction pass as a referance to the test event");
eventemitter.on("test", event);
eventemitter.emit("test");
eventemitter.emit("test");
eventemitter.removeListener("test", event)
eventemitter.emit("test");
