import client from '../db/MySqlClient.ts';
import * as doesIssueExist from '../specification/doesIssueExist.ts';
import { remove } from '../repository/issue.ts';

export async function deleteIssue ({ params, response }: { params: any; response: any }) {
    const hasRecord = await doesIssueExist.isSatisfiedBy(params.id);
    let responseMessage = {};
    let status = 200;

    if (hasRecord) {
      responseMessage = await remove(params.id);
    } else {
      responseMessage = { "error": "Issue not found!" };
      status = 400;
    }
    
    response.body = responseMessage
    response.status = status
}