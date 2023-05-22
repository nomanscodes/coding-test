import React from "react";

const InvoiceTable = () => {
    return (

        <div className="bg-white" >
            <div className="py-5 px-2">
                <h1 className="text-[#2d6d6f] font-bold text-2xl">Invoice</h1>
                <p className="font-medium opacity-70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ab inventore iste voluptatem eius, velit iusto, qui reiciendis possimus praesentium, consectetur omnis totam. Odit nulla vel accusantium illum sint. Mollitia?</p>
            </div>
            <table className="w-full">
                <thead className="bg-[#2d6d6f] text-white">
                    <tr className="text-left">
                        <th className="p-3">Invoice #</th>
                        <th className="p-3">Client</th>
                        <th className="p-3">Issued</th>
                        <th className="p-3">Due</th>
                        <th className="p-3 text-right">Amount</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-opacity-20  ">
                        <td className="p-3">
                            <p>97412378923</p>
                        </td>
                        <td className="p-3">
                            <p>Microsoft Corporation</p>
                        </td>
                        <td className="p-3">
                            <p>14 Jan 2022</p>
                            <p className="">Friday</p>
                        </td>
                        <td className="p-3">
                            <p>01 Feb 2022</p>
                            <p className="">Tuesday</p>
                        </td>
                        <td className="p-3 text-right">
                            <p>$15,792</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-3 py-2 text-white font-semibold rounded-md bg-[#2d6d6f]">
                                <span>Pending</span>
                            </span>
                        </td>
                    </tr>
                    <tr className="border-b border-opacity-20 ">
                        <td className="p-3">
                            <p>97412378923</p>
                        </td>
                        <td className="p-3">
                            <p>Tesla Inc.</p>
                        </td>
                        <td className="p-3">
                            <p>14 Jan 2022</p>
                            <p className="">Friday</p>
                        </td>
                        <td className="p-3">
                            <p>01 Feb 2022</p>
                            <p className="">Tuesday</p>
                        </td>
                        <td className="p-3 text-right">
                            <p>$275</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-3 py-2 text-white font-semibold rounded-md bg-[#2d6d6f]">
                                <span>Pending</span>
                            </span>
                        </td>
                    </tr>
                    <tr className="border-b border-opacity-20">
                        <td className="p-3">
                            <p>97412378923</p>
                        </td>
                        <td className="p-3">
                            <p>Coca Cola co.</p>
                        </td>
                        <td className="p-3">
                            <p>14 Jan 2022</p>
                            <p className="">Friday</p>
                        </td>
                        <td className="p-3">
                            <p>01 Feb 2022</p>
                            <p className="">Tuesday</p>
                        </td>
                        <td className="p-3 text-right">
                            <p>$8,950,500</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-3 py-2 text-white font-semibold rounded-md bg-[#2d6d6f]">
                                <span>Pending</span>
                            </span>
                        </td>
                    </tr>
                    <tr className="border-b border-opacity-20 ">
                        <td className="p-3">
                            <p>97412378923</p>
                        </td>
                        <td className="p-3">
                            <p>Nvidia Corporation</p>
                        </td>
                        <td className="p-3">
                            <p>14 Jan 2022</p>
                            <p className="">Friday</p>
                        </td>
                        <td className="p-3">
                            <p>01 Feb 2022</p>
                            <p className="">Tuesday</p>
                        </td>
                        <td className="p-3 text-right">
                            <p>$98,218</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-3 py-2 text-white font-semibold rounded-md bg-[#2d6d6f]">
                                <span>Pending</span>
                            </span>
                        </td>
                    </tr>
                    <tr className="border-b border-opacity-20 ">
                        <td className="p-3">
                            <p>97412378923</p>
                        </td>
                        <td className="p-3">
                            <p>Nvidia Corporation</p>
                        </td>
                        <td className="p-3">
                            <p>14 Jan 2022</p>
                            <p className="">Friday</p>
                        </td>
                        <td className="p-3">
                            <p>01 Feb 2022</p>
                            <p className="">Tuesday</p>
                        </td>
                        <td className="p-3 text-right">
                            <p>$98,218</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-3 py-2 text-white font-semibold rounded-md bg-[#2d6d6f]">
                                <span>Pending</span>
                            </span>
                        </td>
                    </tr>
                    <tr className="border-b border-opacity-20 ">
                        <td className="p-3">
                            <p>97412378923</p>
                        </td>
                        <td className="p-3">
                            <p>Nvidia Corporation</p>
                        </td>
                        <td className="p-3">
                            <p>14 Jan 2022</p>
                            <p className="">Friday</p>
                        </td>
                        <td className="p-3">
                            <p>01 Feb 2022</p>
                            <p className="">Tuesday</p>
                        </td>
                        <td className="p-3 text-right">
                            <p>$98,218</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-3 py-2 text-white font-semibold rounded-md bg-[#2d6d6f]">
                                <span>Pending</span>
                            </span>
                        </td>
                    </tr>
                    <tr className="border-b border-opacity-20 ">
                        <td className="p-3">
                            <p>97412378923</p>
                        </td>
                        <td className="p-3">
                            <p>Nvidia Corporation</p>
                        </td>
                        <td className="p-3">
                            <p>14 Jan 2022</p>
                            <p className="">Friday</p>
                        </td>
                        <td className="p-3">
                            <p>01 Feb 2022</p>
                            <p className="">Tuesday</p>
                        </td>
                        <td className="p-3 text-right">
                            <p>$98,218</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-3 py-2 text-white font-semibold rounded-md bg-[#2d6d6f]">
                                <span>Pending</span>
                            </span>
                        </td>
                    </tr>
                    <tr className="border-b border-opacity-20 ">
                        <td className="p-3">
                            <p>97412378923</p>
                        </td>
                        <td className="p-3">
                            <p>Nvidia Corporation</p>
                        </td>
                        <td className="p-3">
                            <p>14 Jan 2022</p>
                            <p className="">Friday</p>
                        </td>
                        <td className="p-3">
                            <p>01 Feb 2022</p>
                            <p className="">Tuesday</p>
                        </td>
                        <td className="p-3 text-right">
                            <p>$98,218</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-3 py-2 text-white font-semibold rounded-md bg-[#2d6d6f]">
                                <span>Pending</span>
                            </span>
                        </td>
                    </tr>
                    <tr className="border-b border-opacity-20 ">
                        <td className="p-3">
                            <p>97412378923</p>
                        </td>
                        <td className="p-3">
                            <p>Nvidia Corporation</p>
                        </td>
                        <td className="p-3">
                            <p>14 Jan 2022</p>
                            <p className="">Friday</p>
                        </td>
                        <td className="p-3">
                            <p>01 Feb 2022</p>
                            <p className="">Tuesday</p>
                        </td>
                        <td className="p-3 text-right">
                            <p>$98,218</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-3 py-2 text-white font-semibold rounded-md bg-[#2d6d6f]">
                                <span>Pending</span>
                            </span>
                        </td>
                    </tr>
                    <tr className="border-b border-opacity-20 ">
                        <td className="p-3">
                            <p>97412378923</p>
                        </td>
                        <td className="p-3">
                            <p>Nvidia Corporation</p>
                        </td>
                        <td className="p-3">
                            <p>14 Jan 2022</p>
                            <p className="">Friday</p>
                        </td>
                        <td className="p-3">
                            <p>01 Feb 2022</p>
                            <p className="">Tuesday</p>
                        </td>
                        <td className="p-3 text-right">
                            <p>$98,218</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-3 py-2 text-white font-semibold rounded-md bg-[#2d6d6f]">
                                <span>Pending</span>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default InvoiceTable;
