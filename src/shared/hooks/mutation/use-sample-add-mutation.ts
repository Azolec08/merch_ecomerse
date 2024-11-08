import { useMutation } from '@tanstack/react-query';

export type AddSampleRequestArgs = {
  title: string;
  body: string;
  userId: number;
};

export async function addSampleRequest(args: AddSampleRequestArgs) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(args),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return await response.json();
}

export type UseSampleAddMutationArgs = {
  onSuccess?: () => void;
  onError?: () => void;
};

export function useSampleAddMutation(props: UseSampleAddMutationArgs = {}) {
  return useMutation({
    mutationFn: addSampleRequest,
    onSuccess: props.onSuccess,
    onError: props.onSuccess,
  });
}
