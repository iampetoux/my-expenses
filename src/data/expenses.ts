import { Expense } from '@/types/Expense.types'
import { generateFakeUUID } from '@/lib/utils';

export const initialExpenses: Expense[] = [
  { id: generateFakeUUID(), amount: 100, category: '16f8647e', note: 'caca', createdAt: new Date('August 21, 2023, 20:11:56') },
  { id: generateFakeUUID(), amount: 100, category: '16f869d8', createdAt: new Date('August 18, 2023, 13:43:14') },
]
