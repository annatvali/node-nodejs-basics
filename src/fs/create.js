import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const newFile = path.join(__dirname, 'files', 'fresh.txt');
  try {
    await fs.access(newFile);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(newFile, 'I am fresh and young');
      console.log('File successfully created and written to');
    } else {
      throw err;
    }
  }
};

await create().catch((error) => console.error(error));
