import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const filePath = path.join(
    process.cwd(),
    'public',
    'static',
    'resources',
    'kasana_resume_sept_2024.pdf',
  );
  const fileBuffer = await fs.readFile(filePath);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="kasana_resume_sept_2024.pdf"');
  res.send(fileBuffer);
}
