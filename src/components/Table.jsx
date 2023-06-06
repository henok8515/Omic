export default function BasicTable() {
  return (
    <div
      className="flex w-full  h-full
    "
    >
      <table className=" w-full border h-full border-gray-500">
        <tr className="  flex p-3 items-center border-gray-500">
          {" "}
          <span className="rounded-full   text-start py-1 px-3 text-white bg-blue-500">
            view
          </span>{" "}
          <th className=" p-3 text-start ">dataform_demo.data.set</th>
        </tr>
        <tr className=" bordr border-gray-500">
          <th className=" p-3 text-start border p-3 border-gray-500">Field</th>
          <th className=" p-3 text-start border p-3 border-gray-500">Type</th>
        </tr>
        <tr>
          <td className="border p-3 border-gray-500">lorem</td>

          <td className="border p-3 border-gray-500">ipsum</td>
        </tr>{" "}
        <tr>
          <td className="border p-3 border-gray-500">lorem</td>

          <td className="border p-3 border-gray-500">ipsum</td>
        </tr>{" "}
        <tr>
          <td className="border p-3 border-gray-500">lorem</td>

          <td className="border p-3 border-gray-500">ipsum</td>
        </tr>{" "}
        <tr>
          <td className="border p-3 border-gray-500">lorem</td>

          <td className="border p-3 border-gray-500">ipsum</td>
        </tr>
      </table>
    </div>
  );
}
