import { type Sample } from '@/shared/types/sample';
import { useQuery } from '@tanstack/react-query';

export async function getSamplesRequest(): Promise<Array<Sample>> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json();
}

export function useSamplesQuery() {
  return useQuery({
    queryKey: ['/samples'],
    queryFn: getSamplesRequest,
  });
}
