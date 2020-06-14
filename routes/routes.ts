import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getAllIssues } from '../controller/getIssues.ts';
import { getIssue } from '../controller/getIssue.ts';
import { addIssue } from '../controller/addIssue.ts';
import { updateIssue } from '../controller/updateIssue.ts';
import { deleteIssue } from '../controller/deleteIssue.ts';

const router = new Router()

router.get("/issues", getAllIssues)
.get("/issue/:id", getIssue)
.post("/issue", addIssue)
.put("/issue/:id", updateIssue)
.delete("/issue/:id", deleteIssue)

export default router