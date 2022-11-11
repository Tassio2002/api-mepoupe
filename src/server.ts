import { app } from "./app";

const port = process.env.PORT ||3333;

const server = app.listen(port, () => console.log(`app is running on port ${port}`));

process.on('SIGINT', () => {
  server.close();
  console.log('app closed');
})