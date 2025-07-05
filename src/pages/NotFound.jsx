import { X } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <X size={48} className="text-primary" />
      <h1 className="text-4xl font-bold"> Not Found!</h1>
    </div>
  );
};
