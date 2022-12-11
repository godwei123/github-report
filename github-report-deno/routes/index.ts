import { Router } from "https://github-report-deno.land/x/oak/mod.ts";
import {getGitHubReportInfo} from "../controllers/index.ts";


const router = new Router()

router.get("/github-report/info",getGitHubReportInfo)

export default router
