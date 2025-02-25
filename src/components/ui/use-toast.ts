import { toast as sonnerToast } from "sonner";

export const useToast = () => {
  return {
    toast: (
      message: string,
      options?: { description?: string; variant?: "default" | "destructive" }
    ) => {
      sonnerToast(message, {
        description: options?.description,
        className:
          options?.variant === "destructive" ? "bg-red-500 text-white" : "",
      });
    },
  };
};
