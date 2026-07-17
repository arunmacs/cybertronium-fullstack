import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import fs from "fs";
import path from "path";

async function main() {
  console.log("Starting backup...");
  
  const users = await prisma.user.findMany();
  const posts = await prisma.post.findMany();
  const tags = await prisma.tag.findMany();
  const postTags = await prisma.$queryRaw`SELECT * FROM "_PostToTag"`;
  const comments = await prisma.comment.findMany();

  const backupData = {
    users,
    posts,
    tags,
    postTags,
    comments,
    timestamp: new Date().toISOString()
  };

  const backupPath = path.join(__dirname, `backup-${Date.now()}.json`);
  fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2));
  
  console.log(`Backup saved to ${backupPath}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
