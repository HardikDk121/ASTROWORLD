import fs from 'fs';
export const JSONPath = fs.readFileSync('./routes/json/data.json', 'utf8');
