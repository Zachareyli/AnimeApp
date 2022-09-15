import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AnimeFinal from './Api'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      // refetchInterval: 2000,
    },
  },
});

export default function Anime() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnimeFinal />
    </QueryClientProvider>
  );
}
