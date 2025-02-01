import { useCart } from "@/lib/hooks/useCart"
import Link from "next/link"

export function CartSummary() {
    const { totalItems, totalPrice } = useCart()

    return (
        <div className="text-sm">
            <Link href="/cart">
                Cart: {totalItems} item{totalItems !== 1 ? "s" : ""} (${totalPrice.toFixed(2)})
            </Link>
        </div>
    )
}

