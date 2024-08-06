import React from 'react'
import { FormField, FormLabel } from './ui/form'
import { Control } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { states } from '@/lib/constants'

const formSchema = authFormSchema('sign-up')

interface StatesDropdownProps {
  control: Control<z.infer<typeof formSchema>>
}

const StatesDropdown = ({ control }: StatesDropdownProps) => {
  return (
    <FormField
      control={control}
      name="state"
      render={({ field }) => (
        <div className="form-item w-full">
          <FormLabel className="form-label">Estado</FormLabel>
          <div className="flex w-full flex-col md:w-[200px]">
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              autoComplete="address-level-1"
            >
              <SelectTrigger className="input-class">
                <SelectValue placeholder="Escolher estado" />
              </SelectTrigger>
              <SelectContent className="w-full bg-white" align="end">
                <SelectGroup>
                  <SelectLabel className="py-2 font-normal text-gray-500">
                    Estados
                  </SelectLabel>
                  {states.map((state: string) => (
                    <SelectItem
                      key={state}
                      value={state}
                      className="cursor-pointer border-t"
                    >
                      {state}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    />
  )
}

export default StatesDropdown
