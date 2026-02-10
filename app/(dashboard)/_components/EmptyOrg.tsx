import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <Image src="/elements.svg" alt="Empty" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to Board</h2>
      <p className="text-muted-foreground text-sm mt-2">Create an Organization to get started</p>
        <div className="mt-6">
             <Dialog>
                <DialogTrigger asChild>
                    <Button size="lg">Create Organization</Button>
                </DialogTrigger>
                <DialogContent>
                    <CreateOrganization/>
                </DialogContent>
             </Dialog>
        </div>
    </div>
  );
};
