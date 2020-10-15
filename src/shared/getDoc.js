import fs from 'fs';
import path from 'path';

export const getDoc = (fileName) => {
  const fullPath = path.join(process.cwd(), fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return fileContents;
};

export default getDoc;
