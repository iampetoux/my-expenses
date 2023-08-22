import { Expense } from '@/types/Expense.types'
import { generateFakeUUID } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';

export const initialExpenses: Expense[] = [
  {
    id: generateFakeUUID(),
    amount: 100,
    category: 'subscriptions',
    note: 'Facture fibre optique',
    createdAt: new Date('August 21, 2023, 20:11:56'),
  },
  {
    id: generateFakeUUID(),
    amount: 100,
    category: 'taxes',
    createdAt: new Date('August 18, 2023, 13:43:14'),
  },
]
