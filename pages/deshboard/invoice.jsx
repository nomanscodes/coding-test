import React from "react";
import DeshboardLayout from "@/Layouts/DeshboardLayout";
import InvoiceTable from "@/components/Deshboard/InvoicePage/InvoiceTable";

const invoice = () => {
  return (
    <DeshboardLayout>
      <div className="mt-[66px] p-4">
        <InvoiceTable />
      </div>
    </DeshboardLayout>
  );
};

export default invoice;
