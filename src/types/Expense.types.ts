import React, { SetStateAction } from 'react'

export type Expense = {
  id: string
  amount: number
  category: string
  note?: string | null
  createdAt: Date
}

export type SetExpenseProps = {
  setExpense: React.Dispatch<SetStateAction<Expense[]>>
}

export type SetModalOpenedProps = {
  setModalOpened: React.Dispatch<SetStateAction<boolean>>
}
