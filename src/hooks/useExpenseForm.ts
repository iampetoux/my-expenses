'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Expense, SetExpenseProps, SetModalOpenedProps } from '@/types/Expense.types'
import { generateFakeUUID } from '@/lib/utils'
import React, { SetStateAction, useState } from 'react'

const formSchema = z.object({
  amount: z.coerce.number({
    required_error: 'Veuillez renseigner le montant',
    invalid_type_error: 'Veuillez renseigner le montant',
  }),
  category: z.string({ required_error: 'Veuillez choisir une catégorie' }),
  note: z.nullable(z.string()),
})

const useExpenseForm = ({ setExpense, setModalOpened }: SetExpenseProps & SetModalOpenedProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setExpense((prevState) => [
      {
        id: generateFakeUUID(),
        amount: values.amount,
        category: values.category,
        note: values.note,
        createdAt: new Date(),
      },
      ...prevState,
    ])
    setModalOpened(false)
  }

  return { form, onSubmit }
}

export default useExpenseForm
