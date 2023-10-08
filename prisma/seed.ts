import { PrismaClient } from '@prisma/client';
import { seedQuestions, seedQuizzes } from './seed-data';
const prisma = new PrismaClient();
async function main() {
  await prisma.quiz.createMany({ data: seedQuizzes });
  await prisma.question.createMany({ data: seedQuestions });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
