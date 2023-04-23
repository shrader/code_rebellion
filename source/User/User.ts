import fs from 'fs';
import path from 'path';

const REL_PATH = '/source/User/user.json';

// TODO: Create function for setting user data

export function getUserdata(): any {
  const currentDir = process.cwd();
  const filePath = path.join(currentDir, REL_PATH);

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContents);
}


