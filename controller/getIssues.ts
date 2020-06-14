import client from '../db/MySqlClient.ts';
import { search } from '../repository/issue.ts';

export async function getAllIssues ({ response }: { response: any }) { 
  const result = await search();
  response.body = result.rows;
}