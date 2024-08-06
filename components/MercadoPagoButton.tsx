'use client'

import React, { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import { Button } from './ui/button'
import { GenerateLink } from '@/lib/actions/mp.actions'

const MercadoPagoButton = ({ productId }: { productId: string }) => {
  const [url, setUrl] = useState<string | undefined>('')
  const [loading, setLoading] = useState<boolean>(true)

  const generateLink = async (productId: string) => {
    setLoading(true)
    const url = await GenerateLink(productId)
    setUrl(() => url)
    setLoading(false)
  }

  useEffect(() => {
    generateLink(productId)
  }, [productId])

  return (
    <Button type="submit" disabled={loading} className="form-btn">
      <a href={url}>
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" /> &nbsp;Carregando
          </>
        ) : (
          'Finalizar pagamento'
        )}
      </a>
    </Button>
  )
}

export default MercadoPagoButton
