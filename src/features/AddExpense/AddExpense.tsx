'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Plus as PlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ExpenseForm from '@/features/AddExpense/ExpenseForm'
import { SetExpenseProps } from '@/types/Expense.types';
import { useState } from 'react';

const AddExpense = ({ setExpense }: SetExpenseProps) => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Nouvelle dépense
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter une dépense</DialogTitle>
          <DialogDescription>Ajoutez une nouvelle dépense à votre liste.</DialogDescription>
        </DialogHeader>
        <ExpenseForm setExpense={setExpense} setModalOpened={setOpen} />
      </DialogContent>
    </Dialog>
  )
}

export default AddExpense
