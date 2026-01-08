import { PAGE_NAME_MAP } from '@/constans/page-name'

export const getPageName = (path: string | null) => {
  if (!path) return 'Dashboard'
  return PAGE_NAME_MAP[path] ?? 'Dashboard'
}
