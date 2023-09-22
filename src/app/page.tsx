import { MobileDataTable } from "@/components/hompageComps/MobileDataTable";
import { columns } from "@/components/hompageComps/columns";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4">
      <MobileDataTable columns={columns} />
    </div>
  );
}
