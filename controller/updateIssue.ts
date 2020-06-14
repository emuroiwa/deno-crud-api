import client from '../db/MySqlClient.ts';
import * as doesIssueExist from '../specification/doesIssueExist.ts';
import { issueInterface } from '../contract/issueInterface.ts';
import { update } from '../repository/issue.ts';

export async function updateIssue ({ request, response, params }: { request: any; response: any; params: any }) {
    const body = await request.body()
    const issueInfo: issueInterface = body.value 
    const hasRecord = await doesIssueExist.isSatisfiedBy(params.id);
    let responseMessage = {};
    let status = 200;

    if (hasRecord) {
      responseMessage = await update(issueInfo.microservice, issueInfo.issue, issueInfo.solution, params.id);
    } else {
      responseMessage = { "error": "Issue not found!" };
      status = 400;
    }

    response.body = responseMessage;
    response.status = status;
}