import { Application } from "https://github-report-deno.land/x/oak/mod.ts";

import router from './routes/index.ts';

const PORT = 3000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());


console.log("serve run port 3000")
await app.listen({port:3000})
