import mongoose from "mongoose";
import config from "./app/config";
import app from "./app/app";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Forum fixer app is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
