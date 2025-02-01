import { useCartStore } from "@/lib/store"

export const useCart = () => {
    const { items, addItem, removeItem, updateQuantity, clearCart } = useCartStore()

    return {
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems: items.reduce((acc, item) => acc + item.quantity, 0),
        totalPrice: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    }
}

