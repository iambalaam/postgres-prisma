import prisma from '../lib/prisma'

async function main() {
  const response = await Promise.all([
    prisma.surveys.upsert({
      where: { id: 1 },
      update: {
        id: 1,
        content: [
          { type: 'checkbox', prompt: 'yes or no?' },
          { type: 'checkbox', prompt: 'and again?' },
        ]
      },
      create: {
        id: 1,
        content: [
          { type: 'checkbox', prompt: 'yes or no?' },
          { type: 'checkbox', prompt: 'and again?' },
        ]
      }
    }),

    prisma.answers.upsert({
      where: { id: 1 },
      update: {
        id: 1,
        survey_id: 1,
        content: [true, true]
      },
      create: {
        id: 1,
        survey_id: 1,
        content: [true, true]
      }
    }),
    prisma.answers.upsert({
      where: { id: 2 },
      update: {
        id: 2,
        survey_id: 1,
        content: [true, true]
      },
      create: {
        id: 2,
        survey_id: 1,
        content: [true, true]
      }
    }),
    prisma.answers.upsert({
      where: { id: 3 },
      update: {
        id: 3,
        survey_id: 1,
        content: [false, true]
      },
      create: {
        id: 3,
        survey_id: 1,
        content: [false, true]
      }
    }),

  ])
  console.log(response)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
