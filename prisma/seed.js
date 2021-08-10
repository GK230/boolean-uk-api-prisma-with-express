const { PrismaClient } = require("@prisma/client");
const dbClient = new PrismaClient();

async function main() {
  let twilightPub = new Date('2005/10/05').toISOString();
  const twilight = await dbClient.book.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Twilight",
      type: "Fiction",
      author: "Stephanie Meyer",
      topic: "teen",
      publicationDate: twilightPub,
    },
  });

  let playerPub = new Date('1988/08/01').toISOString();
  const player = await dbClient.book.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "The Player of Games",
      type: "Fiction",
      author: "Iain M Banks",
      topic: "Sci-Fi",
      publicationDate: playerPub,
    },
  });
  console.log({ twilight, player });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
