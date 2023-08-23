import { Expense } from '@/types/Expense.types'
import { generateFakeUUID } from '@/lib/utils'

export const initialExpenses: Expense[] = [
  {
    id: generateFakeUUID(),
    amount: 50,
    category: 'subscriptions',
    note: 'Facture fibre optique',
    createdAt: new Date('August 21, 2023, 20:11:56'),
  },
  {
    id: generateFakeUUID(),
    amount: 92,
    category: 'transport',
    note: 'Essence',
    createdAt: new Date('August 18, 2023, 13:43:14'),
  },
  {
    id: generateFakeUUID(),
    amount: 2.99,
    category: 'subscriptions',
    note: 'Google Cloud',
    createdAt: new Date('August 14, 2023, 00:00:00'),
  },
  {
    id: generateFakeUUID(),
    amount: 700,
    category: 'taxes',
    note: 'Loyer',
    createdAt: new Date('August 12, 2023, 11:54:32'),
  },
]
