import client from '../db/MySqlClient.ts';
import { search } from '../models/issue.ts';

export async function getAllIssues ({ response }: { response: any }) { 
  const result = await search();
  response.body = result.rows;
}