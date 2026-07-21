const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(process.cwd(), ".env") });

const { prisma } = require("../src/lib/prisma");

function safeDate(d: any) {
  if (!d) return null;
  const parsed = new Date(d);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

async function main() {
  const backupFiles = fs.readdirSync(__dirname).filter((f: string) => f.startsWith("backup-") && f.endsWith(".json"));
  if (backupFiles.length === 0) {
    console.error("No backup file found in prisma/");
    process.exit(1);
  }
  
  // Sort descending by name to get the latest backup
  backupFiles.sort((a: string, b: string) => b.localeCompare(a));
  const latestBackup = backupFiles[0];
  const backupPath = path.join(__dirname, latestBackup);
  
  console.log(`Restoring from backup: ${latestBackup}`);
  const data = JSON.parse(fs.readFileSync(backupPath, "utf-8"));
  
  // Clean up existing data just in case
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();
  
  // Restore Users
  if (data.users && data.users.length > 0) {
    for (const user of data.users) {
      await prisma.user.create({
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: safeDate(user.emailVerified),
          image: user.image,
          passwordHash: user.passwordHash,
          role: user.role,
          bio: user.bio,
          website: user.website,
          createdAt: safeDate(user.createdAt) || new Date(),
          updatedAt: safeDate(user.updatedAt) || new Date(),
          deletedAt: safeDate(user.deletedAt),
        }
      });
    }
    console.log(`Restored ${data.users.length} users.`);
  }

  // Restore Tags
  if (data.tags && data.tags.length > 0) {
    for (const tag of data.tags) {
      await prisma.tag.create({
        data: {
          id: tag.id,
          name: tag.name,
          slug: tag.slug,
        }
      });
    }
    console.log(`Restored ${data.tags.length} tags.`);
  }

  // Restore Posts
  if (data.posts && data.posts.length > 0) {
    for (const post of data.posts) {
      // Find the tags that belong to this post
      const postTags = data.postTags 
        ? data.postTags.filter((pt: any) => pt.A === post.id).map((pt: any) => ({ id: pt.B }))
        : [];
        
      await prisma.post.create({
        data: {
          id: post.id,
          title: post.title,
          slug: post.slug,
          content: post.content,
          excerpt: post.excerpt,
          coverImage: post.coverImage,
          status: post.status,
          publishedAt: safeDate(post.publishedAt),
          createdAt: safeDate(post.createdAt) || new Date(),
          updatedAt: safeDate(post.updatedAt) || new Date(),
          deletedAt: safeDate(post.deletedAt),
          authorId: post.authorId,
          tags: {
            connect: postTags
          }
        }
      });
    }
    console.log(`Restored ${data.posts.length} posts.`);
  }

  // Restore Comments
  if (data.comments && data.comments.length > 0) {
    for (const comment of data.comments) {
      await prisma.comment.create({
        data: {
          id: comment.id,
          content: comment.content,
          status: comment.status,
          guestName: comment.guestName,
          createdAt: safeDate(comment.createdAt) || new Date(),
          updatedAt: safeDate(comment.updatedAt) || new Date(),
          deletedAt: safeDate(comment.deletedAt),
          authorId: comment.authorId,
          postId: comment.postId,
        }
      });
    }
    console.log(`Restored ${data.comments.length} comments.`);
  }

  console.log("Restore complete!");
}

main()
  .catch((e) => {
    console.error("MAIN ERROR:", e.message || e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
