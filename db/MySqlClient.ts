import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "172.22.0.5",
  username: "root",
  db: "ernest_issues",
  password: "kickstart",
});

export default client