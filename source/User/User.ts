import fs from 'fs';
import path from 'path';

const REL_PATH = '/source/User/user.json';

function getFilePath(): string {
  const currentDir = process.cwd();
  return path.join(currentDir, REL_PATH);
}

export function saveUserData(data: object): void {
  const filePath = getFilePath();
  const jsonString = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, jsonString, 'utf-8');
}

export function getUserdata(): any {
  const filePath = getFilePath();

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContents);
}


