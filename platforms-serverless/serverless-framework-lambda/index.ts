import { PrismaClient, Prisma } from '@prisma/client'

const client = new PrismaClient()

export async function handler() {
  await client.user.deleteMany({})

  const id = '12345'

  const createUser = await client.user.create({
    data: {
      id,
      email: 'alice@prisma.io',
      name: 'Alice',
    },
  })

  const updateUser = await client.user.update({
    where: {
      id: createUser.id,
    },
    data: {
      email: 'bob@prisma.io',
      name: 'Bob',
    },
  })

  const users = await client.user.findUnique({
    where: {
      id: createUser.id,
    },
  })

  const deleteManyUsers = await client.user.deleteMany({})

  /*
  // list all files deployed in Lambda to debug when tests are failing
  const dirTree = require("directory-tree");
  const tree = dirTree(process.env.LAMBDA_TASK_ROOT);
  console.dir(tree, { depth: null });
  */
 
  // list all files in node_modules/.prisma/client
  const fs = require('fs')
  const files = fs.readdirSync(process.env.LAMBDA_TASK_ROOT + "/node_modules/.prisma/client")

  return {
    version: Prisma.prismaVersion.client,
    createUser,
    updateUser,
    users,
    deleteManyUsers,
    files,
  }
}
