'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'
import { signIn, signUp } from '@/lib/actions/user.actions'
import StatesDropdown from './StatesDropdown'
import MercadoPagoButton from './MercadoPagoButton'

const AuthForm = ({ type, userType }: AuthFormParams) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [productId, setProductId] = useState<string>('')
  useEffect(() => {
    if (searchParams !== null) {
      const productId = searchParams.get('productId')
      setProductId(productId || '97879')
      if (!productId) {
        console.error('Product ID is missing in query parameters.')
      }
    }
  }, [searchParams])

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const formSchema = authFormSchema(type)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true)

    try {
      // Cadastro with Appwrite & create plaid token

      if (type === 'sign-up') {
        const userData: UserRequest = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address: data.address1!,
          phone: data.phone!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          cpf: data.cpf!,
          sellerId: data.referralUserId!,
          userTypeId: userType!,
          email: data.email,
          password: data.password,
        }

        const newUser = await signUp(userData)
        setUser(newUser)
      }

      if (type === 'sign-in') {
        const response = await signIn(data.email, data.password)

        if (response) router.push('/home')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1">
          <Image
            src="/assets/images/logo/logo.png"
            width={160}
            height={160}
            alt="Miticard logo"
          />
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-blue-500">
            {user ? 'Link Account' : type === 'sign-in' ? 'Acesso' : 'Cadastro'}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? 'Bem vindo ao Miticard'
                : 'Por favor, preencha com seus dados'}
            </p>
          </h1>
        </div>
      </header>
      {user && type === 'sign-up' ? (
        <div className="flex flex-col gap-4">
          <MercadoPagoButton productId={productId} />
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="Nome"
                      placeholder="Digite seu Nome"
                      autocomplete="given-name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Sobrenome"
                      placeholder="Digite seu Sobrenome"
                      autocomplete="family-name"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="address1"
                    label="Endereço"
                    placeholder="Digite seu Endereço"
                    autocomplete="street-address"
                  />
                  <div className="flex gap-4">
                    <StatesDropdown control={form.control} />
                    <CustomInput
                      control={form.control}
                      name="city"
                      label="Cidade"
                      placeholder="Digite sua Cidade"
                      autocomplete="address-level2"
                    />
                  </div>

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      label="CEP"
                      placeholder="12345-000"
                      autocomplete="postal-code"
                    />
                    <CustomInput
                      control={form.control}
                      name="phone"
                      label="Telefone/Celular"
                      placeholder="(00) 98765-4321"
                      autocomplete="false"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      label="Data de Nascimento"
                      placeholder="DD/MM/AAAA"
                      autocomplete="false"
                    />
                    <CustomInput
                      control={form.control}
                      name="cpf"
                      label="CPF"
                      placeholder="123.456.789-00"
                      autocomplete="ssn"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="referralUserId"
                    label="E-mail do indicador"
                    placeholder="E-mail do indicador"
                    autocomplete="false"
                  />
                </>
              )}

              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Digite seu email"
                autocomplete="email"
              />

              <CustomInput
                control={form.control}
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                autocomplete="new-password"
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Carregando
                    </>
                  ) : type === 'sign-in' ? (
                    'Entrar'
                  ) : (
                    'Cadastrar'
                  )}
                </Button>
              </div>
            </form>
          </Form>
          {!userType && (
            <footer className="flex justify-center gap-1">
              <p className="text-14 font-normal text-gray-600">
                {type === 'sign-in'
                  ? 'Não tem uma conta?'
                  : 'Já possuí uma conta?'}
              </p>
              <Link
                href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
                className="form-link"
              >
                {type === 'sign-in' ? 'Cadastro' : 'Entrar'}
              </Link>
            </footer>
          )}
        </>
      )}
    </section>
  )
}

export default AuthForm
