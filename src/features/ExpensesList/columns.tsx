import { ColumnDef, FilterFn } from '@tanstack/react-table';
import { Expense } from '@/types/Expense.types';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import { categories } from '@/data/categories';
import { formatCurrency } from '@/lib/expenses';

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
          <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Montant (€)
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = formatCurrency(amount);
      return <div className="font-medium ml-4">{formatted}</div>
    },
  },
  {
    accessorKey: 'note',
    header: 'Note',
  },
  {
    accessorKey: 'category',
    header: 'Catégorie',
    cell: ({ row }) => {
      const category = categories.find(
          (category) => category.value === row.getValue("category")
      )

      if (!category) {
        return null
      }

      return (
          <div className="flex w-[100px] items-center">
            <span>{category.label}</span>
          </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'createdAt',
    header: "Date d'ajout",
    cell: ({ row }) => {
      return (row.getValue('createdAt') as Date).toLocaleString('fr')
    },
  },
]