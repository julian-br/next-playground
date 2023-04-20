import { useQuery } from "@tanstack/react-query";

type Invoice = {
  id: string;
  from: string;
  date: string;
  amount: string;
};

export function useInvoicesQuery() {
  const invoiceQuery = useQuery({
    queryKey: ["invoices"],
    queryFn: async (): Promise<Invoice[]> =>
      (await fetch("http://localhost:3000/api/invoice")).json(),
  });

  return invoiceQuery;
}
