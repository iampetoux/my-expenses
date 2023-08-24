'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import useExpenseStore from '@/hooks/useExpenseStore'

export const formSchema = z.object({
  amount: z.coerce.number({
    required_error: 'Veuillez renseigner le montant',
    invalid_type_error: 'Veuillez renseigner le montant',
  }),
  category: z.string({ required_error: 'Veuillez choisir une catégorie' }),
  note: z.string().optional(),
})

const useExpenseForm = () => {
  const { add, setModalOpened } = useExpenseStore()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    add(values)
    setModalOpened(false)
  }

  return { form, onSubmit }
}

export default useExpenseForm
