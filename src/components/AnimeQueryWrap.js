import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AnimeFinal from './Api'

const queryClient = new QueryClient();

export default function Anime() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnimeFinal />
    </QueryClientProvider>
  );
}
