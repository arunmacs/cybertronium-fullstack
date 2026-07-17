import { prisma } from "../src/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  console.log("Starting data seed...");

  // 2. Hash a secure password
  const email = process.env.ADMIN_SEED_EMAIL || "admin@cms-cybertronium.com";
  const password = process.env.ADMIN_SEED_PASSWORD;

  if (!password) {
    throw new Error("Missing ADMIN_SEED_PASSWORD environment variable! You must set this to run the seed script securely.");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  // 3. Create the Main Admin Account
  const admin = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      name: "System Admin",
      role: "ADMIN",
      passwordHash,
    },
  });

  console.log("=========================================");
  console.log("✅ Seed Complete! You can now log in.");
  console.log("=========================================");
  console.log(`Login URL : http://localhost:3000/cms-admin/login`);
  console.log(`Email     : ${admin.email}`);
  console.log(`Password  : <hidden for security>`);
  console.log("=========================================");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
