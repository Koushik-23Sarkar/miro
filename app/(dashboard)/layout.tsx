import { ClerkProvider, SignedIn, SignIn, UserButton } from "@clerk/nextjs";
import { Navbar } from "./_components/Navbar";
import { OrgSidebar } from "./_components/OrgSidebar";
import { Sidebar } from "./_components/Sidebar";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import { ModalProvider } from "@/components/providers/modal-provider";

interface DashboardayoutPage {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardayoutPage) => {
  return (
    <ClerkProvider>
      <main className="h-full">
        <Sidebar />
        <div className="pl-[60px] h-full">
          <div className="flex gap-x-3 h-full">
            <OrgSidebar />
            <div className="h-full flex-1">
              <Navbar /> {/** Add Navbar */}
              <ConvexClientProvider>
                <ModalProvider/>
                {children}  
              </ConvexClientProvider>
            </div>
          </div>
        </div>
      </main>
    </ClerkProvider>
  );
};

export default DashboardLayout;
