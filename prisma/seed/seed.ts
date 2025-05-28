import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UsersCreateInput[] = [
  {
    userName: "admin",
    email: "admin@gmail.com",
    fullName: "Quản trị hệ thống",
    password: "admin",
    role: "admin",
  },
  {
    userName: "client",
    email: "client@gmail.com",
    fullName: "Người dùng",
    password: "client",
    role: "client",
  },
  {
    userName: "client2",
    email: "client@gmail.com",
    fullName: "Người dùng",
    password: "client",
    role: "client",
  },
];

const categoryData: Prisma.CategoriesCreateInput[] = [
  {
    name: "Tin tức dự án",
    description:""
  },
  {
    name: "Tin tức khác",
    description:""
  }
]

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.users.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  for (const c of categoryData) {
    const category = await prisma.categories.create({
      data: c,
    });
    console.log(`Created user with id: ${category.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
