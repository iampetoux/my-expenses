'use client'
import { create } from 'zustand'
import { initialExpenses } from '@/data/expenses'
import * as z from 'zod'
import { formSchema } from '@/hooks/useExpenseForm'
import { Expense } from '@/types/Expense.types'
import { generateFakeUUID } from '@/lib/utils'

type ExpenseStore = {
  expenses: Expense[]
  isModalOpened: boolean
  add: (values: z.infer<typeof formSchema>) => void
  setModalOpened: (toggle: boolean) => void
}

const useExpenseStore = create<ExpenseStore>()((set) => ({
  expenses: initialExpenses,
  isModalOpened: false,
  add: (values) =>
    set((state) => ({
      expenses: [
        {
          id: generateFakeUUID(),
          amount: values.amount,
          category: values.category,
          note: values.note,
          createdAt: new Date(),
        },
        ...state.expenses,
      ],
    })),
  setModalOpened: (toggle) =>
    set({
      isModalOpened: toggle,
    }),
}))

export default useExpenseStore
