import InvoicesOverview from "@/components/InvoicesOverview";
import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";

export default function InvoicePage() {
  return (
    <div className="bg-gray-800 min-h-screen text-gray-100">
      <Navbar />
      <main className="px-5">
        <h1 className="mt-4 text-xl text-gray-300 mb-4">Invoices</h1>
        <InvoicesOverview />
      </main>
    </div>
  );
}
