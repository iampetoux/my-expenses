'use client'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { categories } from '@/data/categories'
import { Textarea } from '@/components/ui/textarea'
import useExpenseForm from '@/hooks/useExpenseForm'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { DialogFooter } from '@/components/ui/dialog'
import { SetExpenseProps, SetModalOpenedProps } from '@/types/Expense.types'

const ExpenseForm = ({ setExpense, setModalOpened }: SetExpenseProps & SetModalOpenedProps) => {
  const { form, onSubmit } = useExpenseForm({ setExpense, setModalOpened })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-4 items-center gap-4 relative">
                  <FormLabel className="text-right">Montant (€) <abbr className="text-red-500">*</abbr></FormLabel>
                  <FormControl>
                    <Input placeholder="9,99" type="number" className="col-span-3" {...field} />
                  </FormControl>
                </div>
                <FormMessage className="text-right font-normal" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Catégorie <abbr className="text-red-500">*</abbr></FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} name={field.name}>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Sélectionnez une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {categories.map((category, categoryKey) => (
                            <SelectItem key={categoryKey} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </div>
                <FormMessage className="text-right font-normal" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-4 items-center gap-4 relative">
                  <FormLabel className="text-right">Note</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Netflix, essence, Navigo..."
                      className="col-span-3"
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-right font-normal" />
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button type="submit">Sauvegarder</Button>
          </DialogFooter>
        </div>
      </form>
    </Form>
  )
}

export default ExpenseForm
