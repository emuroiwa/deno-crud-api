import client from '../db/MySqlClient.ts';
import { insert } from '../repository/issue.ts';
import { issueInterface } from '../contract/issueInterface.ts';
  
export async function addIssue ({ request, response }: { request: any; response: any }) {
    const body = await request.body();
    const issueInfo: issueInterface = body.value;
    let status = 200;

    if (issueInfo.hasOwnProperty('microservice') && issueInfo.hasOwnProperty('issue') && issueInfo.hasOwnProperty('solution')) {
      response.body = await insert(issueInfo);
    } else {
      response.body = { "error": "Invalid request!" };
      status = 400;
    }
    
    response.status = status;
}