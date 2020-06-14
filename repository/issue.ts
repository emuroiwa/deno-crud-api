import client from '../db/MySqlClient.ts';

interface Key {
    id?: any
}

export async function search(params:Key = {}) { 
    const isSpecific = Object.keys(params).length !== 0;
    if (isSpecific) {
        return await client.execute(`SELECT * FROM myissues WHERE id = ?`, [params.id]);
    } else {
        return await client.execute(`SELECT * FROM myissues`);   
    }
}

export async function insert({ microservice, issue, solution }: { microservice: string; issue: string; solution: string }) {
    return await client.execute(`INSERT INTO myissues(microservice, issue, solution) values(?,?,?)`, [
        microservice, issue, solution
    ]);
}

export async function update(microservice: string, issue: string, solution: string, id: string) {
    return await client.execute(`UPDATE myissues SET microservice= ?, issue	= ?, solution	= ? WHERE id = ?`, [
        microservice, issue	, solution	, id
    ]);
}

export async function remove(id: string) {
    return await client.execute(`DELETE FROM myissues WHERE id = ?`, [id]); 
}