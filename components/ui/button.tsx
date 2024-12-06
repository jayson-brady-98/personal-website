import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 active:translate-y-0.5",
  {
    variants: {
      variant: {
        default:
          "bg-[#f69369] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_0_0_#d47455] hover:bg-[#f7a485] active:shadow-[inset_0_3px_6px_0_rgba(0,0,0,0.4)] active:translate-y-[4px]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-destructive/90 active:shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.2)]",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.1)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-secondary/80 active:shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.2)]",
        ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/70",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
