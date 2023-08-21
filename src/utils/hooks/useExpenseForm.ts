'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  amount: z.coerce.number({
    required_error: 'Veuillez renseigner le montant',
    invalid_type_error: 'Veuillez renseigner le montant',
  }),
  category: z.string({ required_error: 'Veuillez choisir une catégorie' }),
  note: z.nullable(z.string()),
})

const useExpenseForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return { form, onSubmit }
}

export default useExpenseForm
