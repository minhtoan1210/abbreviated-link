import demoApiRequest from '@/apiRequests/demo'
import { useQuery } from '@tanstack/react-query'
export const useDemo = () => {
  return useQuery({
    queryKey: ['demo'],
    queryFn: demoApiRequest.demo
  })
}