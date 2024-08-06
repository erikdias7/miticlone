'use server'

import MercadoPagoConfig, { Preference } from 'mercadopago'
import { notFound } from 'next/navigation'
import { products } from '@/lib/constants'

const URL = 'http://localhost.com.br'

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
  options: { timeout: 5000, idempotencyKey: 'abc' },
})

const preferences = new Preference(client)

export const GenerateLink = async (productId: string) => {
  const product = products.find((p) => p.id === productId)
  if (!product) {
    notFound()
  }

  const response = await preferences.create({
    body: {
      items: [
        {
          id: productId,
          title: product.name,
          quantity: 1,
          unit_price: product.price,
        },
      ],
      auto_return: 'approved',
      back_urls: {
        success: `${URL}/success`,
        failure: `${URL}/failure`,
        pending: `${URL}/pending`,
      },
    },
  })
  return response.init_point
}
