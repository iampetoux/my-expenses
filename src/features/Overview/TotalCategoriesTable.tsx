import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { categories } from '@/data/categories'
import { Expense } from '@/types/Expense.types'
import { formatCurrency } from '@/lib/expenses'

const TotalCategoriesTable = ({ expenses }: { expenses: Expense[] }) => {
  return (
    <Table>
      <TableCaption>Votre montant total de dépenses trié par catégories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Catégorie</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.value}>
            <TableCell className="font-medium">{category.label}</TableCell>
            <TableCell className="text-right font-medium">
              {formatCurrency(
                expenses.reduce((acc, curr) => {
                  return acc + (curr.category === category.value ? curr.amount : 0)
                }, 0)
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TotalCategoriesTable
