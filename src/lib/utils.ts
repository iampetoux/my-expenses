import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateFakeUUID(): string {
  const hexDigits = '0123456789abcdef'
  let fakeUUID = ''

  for (let i = 0; i < 32; i++) {
    fakeUUID += hexDigits[Math.floor(Math.random() * 16)]
  }

  // Ajouter des tirets pour simuler le format UUID standard (8-4-4-4-12)
  fakeUUID = [
    fakeUUID.substring(0, 8),
    fakeUUID.substring(8, 4),
    fakeUUID.substring(12, 4),
    fakeUUID.substring(16, 4),
    fakeUUID.substring(20),
  ].join('-')

  return fakeUUID
}
