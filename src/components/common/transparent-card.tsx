import { cn } from "@/utils/utils";
import { Card } from "@nextui-org/react";

const TransparentCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Card
      className={cn("bg-black/50 border-1 border-primary w-full", className)}
    >
      {children}
    </Card>
  );
};

export default TransparentCard;
