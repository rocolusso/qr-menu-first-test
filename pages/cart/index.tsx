import { useCart } from "@/lib/hooks/useCart"
import { Button } from "@/components/ui/button"
import Header from './../../components/Header'
import Link from "next/link";
import {useEffect} from "react";
export default function CartPage() {
    const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart()


    useEffect(() => {
       if(!items.length){
           window.location.href="/";
       }
    },[items])



    return (
        <div>


            <Header/>


            <div className={''}>
                <div className="max-w-[600px] mx-auto py-8 px-6">
                    <h1 className="text-3xl font-bold mb-6">Ваш Заказ</h1>
                    {items.length === 0 ? (
                        <p>Сделайте заказ в меню</p>
                    ) : (
                        <>
                            {items.map((item) => (
                                <div key={item.id} className="flex items-center justify-between border-b py-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        {/*<p className="text-gray-600">${item.price.toFixed(2)} each</p>*/}
                                        <p className="text-gray-600">MDL {item.price} </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button
                                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                            variant="outline"
                                            size="sm"
                                        >
                                            -
                                        </Button>
                                        <span>{item.quantity}</span>
                                        <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                variant="outline"
                                                size="sm">
                                            +
                                        </Button>
                                        <Button onClick={() => removeItem(item.id)} variant="destructive" size="sm">
                                            Удалить
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-6 flex justify-between items-center">
                                <p className="text-xl font-bold">Итого: MDL {totalPrice.toFixed(2)}</p>
                                <Button onClick={clearCart} variant="outline">
                                    Очистить Заказ
                                </Button>
                            </div>
                        </>
                    )}

                    <div className={' mx-auto py-8 px-8'}>
                        <div className={'goToCart  z-50 text-center fixed bottom-0 left-0 right-0   mx-auto py-4 px-8 rounded'}>
                            <Link
                                href={'/'}
                                className={'rounded w-full max-w-[600px] mx-auto flex items-center justify-center text-center uppercase font-bold text-white bg-green-700 p-5 '}>
                                <p>Вернуться в меню</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

