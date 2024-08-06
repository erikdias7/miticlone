'use server'

import { ID } from 'node-appwrite'
import { createAdminClient, createSessionClient } from '@/lib/appwrite'
import { cookies } from 'next/headers'
import { parseStringify } from '@/lib/utils'
import prisma from '@/lib/db'

export const getUserInfo = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } })

    return user
  } catch (error) {
    console.error(error)
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    const { account } = await createAdminClient()
    const session = await account.createEmailPasswordSession(email, password)

    cookies().set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    })

    const user = await getUserInfo(session.userId)
    return parseStringify(user)
  } catch (error) {
    console.error('Error', error)
  }
}

export const signUp = async ({ ...userData }: UserRequest) => {
  const { email, firstName, lastName, password } = userData

  let newUserAccount

  try {
    const { account } = await createAdminClient()

    newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`,
    )

    if (!newUserAccount) throw new Error('Error creating user')

    const newUser = await prisma.user.create({
      data: { ...userData, id: newUserAccount.$id },
    })
    const session = await account.createEmailPasswordSession(email, password)

    cookies().set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    })

    return parseStringify(newUser)
  } catch (error) {
    console.error('Error', error)
  }
}

export const getLoggedInUser = async () => {
  try {
    const { account } = await createSessionClient()
    const result = await account.get()

    const user = await getUserInfo(result.$id)

    return parseStringify(user)
  } catch (error) {
    console.error('Not logged in')
  }
}

export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient()

    cookies().delete('appwrite-session')

    await account.deleteSession('current')
  } catch (error) {
    console.error('Logout failed')
    return null
  }
}
