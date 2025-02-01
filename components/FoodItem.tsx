import { useState } from "react"
import { useCart } from "@/lib/hooks/useCart"
import { Button } from "@/components/ui/button"
import ItemCarousel from "@/components/ItemCarousel";

type FoodItemProps = {
    id: string
    name: string
    price: number
    gramash:string
    itemphotos:{url:string}[]
}

export function FoodItem({ id, name, price, gramash, itemphotos }: FoodItemProps) {
    const apiUrl = process.env.API_URL;
    const { addItem, items } = useCart()
    const [isAdded, setIsAdded] = useState(false)

    const handleAddToCart = () => {
        addItem({ id, name, price })
        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 2000)
    }

    const itemInCart = items.find((item) => item.id === id)




    return (

        <>
            {
                !itemphotos?.length  &&

                <div className="border p-4 rounded-lg shadow-sm ">
                    <div className={'relative bg-[#171717] flex flex-col  p-5 rounded'}>
                        <div className={'flex justify-between'}>
                            <div className={'text-white  max-w-[220px] uppercase text-2xl top-5 left-5'}>
                                {name}
                            </div>
                            <div className={''}>
                                <div className={'text-white   uppercase text-2xl top-5 right-5'}>
                                    <p>{price} MDL</p>
                                </div>
                                <div className={'text-white  top-12 right-5'}>
                                    {gramash}
                                </div>
                            </div>
                        </div>


                    </div>
                    <Button onClick={handleAddToCart} className="mt-2 p-5 w-full bg-green-700 uppercase font-bold"
                            variant={isAdded ? "outline" : "default"}
                            size={'lg'}>
                        {isAdded ? "Добавлено!" : itemInCart ? `Заказать еще (${itemInCart.quantity})` : "Заказать"}
                    </Button>
                </div>
            }


            {
                itemphotos?.length > 0 &&


                <div className="border p-4 rounded-lg shadow-sm">
                    <div
                        className={'relative bg-[#171717] '}
                    >
                        <div className={'text-white absolute max-w-[250px] uppercase text-2xl top-5 left-5'}>
                            {name}
                        </div>
                        <div className={'text-white absolute  uppercase text-2xl top-5 right-5'}>
                            <p>{price} MDL</p>
                        </div>
                        <div className={'text-white absolute    top-12 right-5'}>
                            {gramash}
                        </div>

                        {
                            itemphotos?.length > 0 && itemphotos.map((itt) =>
                                ({
                                    src: `${apiUrl}${itt.url}`
                                })).length > 0 &&
                            <div className={'photos mx-auto'}>
                                <div>
                                    <ItemCarousel slides={
                                        itemphotos.map((itt) =>
                                            ({
                                                src: `${apiUrl}${itt.url}`
                                            }))
                                    }
                                    />
                                </div>
                            </div>
                        }


                    </div>
                    <Button onClick={handleAddToCart} className="mt-2 p-5 w-full bg-green-700 uppercase font-bold"
                            variant={isAdded ? "outline" : "default"}
                            size={'lg'}>
                        {isAdded ? "Добавлено!" : itemInCart ? `Заказать еще (${itemInCart.quantity})` : "Заказать"}
                    </Button>
                </div>

            }


        </>


    )
}

