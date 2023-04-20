import { useInvoicesQuery } from "@/queries/invoicesQuery";
import { useQuery } from "@tanstack/react-query";

export default function InvoicesOverview() {
  const invoicesQuery = useInvoicesQuery();

  return (
    <div>
      {invoicesQuery.isSuccess && (
        <div className="flex-col flex gap-2">
          {invoicesQuery.data.map((invoice) => (
            <InvoiceCard
              key={invoice.id}
              from={invoice.from}
              date={invoice.date}
              amount={invoice.amount}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface InvoiceCardProps {
  from: string;
  amount: string;
  date: string;
}

function InvoiceCard({ from, amount, date }: InvoiceCardProps) {
  return (
    <div className="bg-gray-900 w-96 rounded-lg flex items-center">
      <div className="py-4 pl-4">
        <div className="font-medium">{from}</div>
        <div className="text-sm font-light">{date}</div>
      </div>
      <div className="ml-auto mr-4 text-xl text-green-300">{amount}€</div>
    </div>
  );
}
