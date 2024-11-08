import { useMutation } from '@tanstack/react-query';

export type DeleteSampleRequestArgs = {
  id: number;
};

export async function deleteSampleRequest(args: DeleteSampleRequestArgs) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${args.id}`, {
    method: 'DELETE',
  });
  return await response.json();
}

export type UseSampleDeleteMutationArgs = {
  onSuccess?: () => void;
  onError?: () => void;
};

export function useSampleDeleteMutation(props: UseSampleDeleteMutationArgs = {}) {
  return useMutation({
    mutationFn: deleteSampleRequest,
    onSuccess: props.onSuccess,
    onError: props.onSuccess,
  });
}
