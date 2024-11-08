import { type Sample } from '@/shared/types/sample';
import { useQuery } from '@tanstack/react-query';

export type GetSampleRequestArgs = {
  id: number;
};

export async function getSampleRequest({ id }: GetSampleRequestArgs): Promise<Sample> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await response.json();
}

export type UseSampleQueryArgs = GetSampleRequestArgs & {
  enabled?: boolean;
};

export function useSampleQuery(args: UseSampleQueryArgs) {
  return useQuery({
    queryKey: ['/samples', args.id],
    queryFn: () => getSampleRequest({ id: args.id }),
    enabled: args.enabled ?? !!args.id,
  });
}
