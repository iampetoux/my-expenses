'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Plus as PlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ExpenseForm from '@/features/AddExpense/ExpenseForm'
import useExpenseStore from '@/hooks/useExpenseStore'

const AddExpense = () => {
  const { isModalOpened, setModalOpened } = useExpenseStore()
  return (
    <Dialog open={isModalOpened} onOpenChange={setModalOpened}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Nouvelle dépense
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajouter une dépense</DialogTitle>
          <DialogDescription>Ajoutez une nouvelle dépense à votre liste.</DialogDescription>
        </DialogHeader>
        <ExpenseForm />
      </DialogContent>
    </Dialog>
  )
}

export default AddExpense
