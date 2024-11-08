import { useMutation } from '@tanstack/react-query';

export type UpdateSampleRequestArgs = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export async function updateSampleRequest(args: UpdateSampleRequestArgs) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'PUT',
    body: JSON.stringify(args),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return await response.json();
}

export type UseSampleUpdateMutationArgs = {
  onSuccess?: () => void;
  onError?: () => void;
};

export function useSampleUpdateMutation(props: UseSampleUpdateMutationArgs = {}) {
  return useMutation({
    mutationFn: updateSampleRequest,
    onSuccess: props.onSuccess,
    onError: props.onSuccess,
  });
}
