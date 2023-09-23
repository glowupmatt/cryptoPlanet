import DeskTopDataTable from "@/components/hompageComps/DesktopComps/DeskTopDataTable";
import { MobileDataTable } from "@/components/hompageComps/mobileComops/MobileDataTable";
import { MobileColumns } from "@/components/hompageComps/mobileComops/MobileColumns";
import { DesktopColumns } from "@/components/hompageComps/DesktopComps/DesktopColumns";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="hidden lg:block">
        <DeskTopDataTable DesktopColumns={DesktopColumns} />
      </div>
      <div className="block lg:hidden">
        <MobileDataTable MobileColumns={MobileColumns} />
      </div>
    </div>
  );
}
