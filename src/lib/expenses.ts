import { Expense } from '@/types/Expense.types'

export const sumExpensesTotal = ({ expenses }: { expenses: Expense[] }) => {
  return expenses.reduce((acc, curr) => acc + curr.amount, 0)
}

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)
}
