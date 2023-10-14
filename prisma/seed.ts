import { PrismaClient } from '@prisma/client';
import { SeedQuizDTO, seedQuizzes } from './seed-data';
const prisma = new PrismaClient();

async function createQuiz(data: SeedQuizDTO) {
  const { questions, ...quizData } = data;
  await prisma.quiz.create({
    data: { ...quizData, questions: { create: questions } },
  });
}

async function main() {
  Promise.all(seedQuizzes.map(async (item) => await createQuiz(item)));
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
