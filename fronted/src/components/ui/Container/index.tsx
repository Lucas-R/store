import { tv, type VariantProps } from "tailwind-variants";

const container = tv({
    base: "mx-auto",
    variants: {
        size: {
            full: "w-full",
            default: "container"
        },
        px: {
            none: "px-0",
            default: "px-4"
        }
    },
    defaultVariants: {
        size: "default",
        px: "default"
    }
});

interface ContainerProps extends VariantProps<typeof container>, React.HTMLAttributes<typeof HTMLDivElement> { }

export default function Container({ children, className, size, px }: ContainerProps) {
    return (
        <div className={container({ size, px, class: className })}>
            {children}
        </div>
    )
}