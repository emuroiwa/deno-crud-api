import client from '../db/MySqlClient.ts';
import * as doesIssueExist from '../specification/doesIssueExist.ts';
import { search } from '../models/issue.ts';

export async function getIssue({ params, response }: { params: any; response: any }) {
    const hasRecord = await doesIssueExist.isSatisfiedBy(params.id);
    let status = 200;
    
    if (hasRecord) {
      const result = await search(params);
      response.body = result.rows;
    } else {
      response.body = { "error": "Issue not found!" };
      status = 400;
    }
    
    response.status = status;
};