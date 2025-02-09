
import Header from "@/components/Header";
import {useRouter} from "next/router";
import {FoodItem} from "@/components/FoodItem";
import {useCart} from "@/lib/hooks/useCart";
import Link from "next/link";

interface Item  {
    documentId:string,
    title_ru:string,
    title_ro:string,
    description_ru:string,
    description_ro:string,
    price:string,
    gramash:string,
    itemphotos:{url:string}[]
}



export default function Zavtraki({productItems}:{productItems:Item[]}) {
    const { locale } = useRouter();
    const { items } = useCart()




    // title_ru
    // title_ru

    //     description_ru: null,
    //     description_ro: null,
    //     gramash: '200 gr.',
    //     price: '60 lei',
    //  itemphotos:[]

    //  itemphotos:[0] url

    // url

    // console.log(items[0])
    // documentId

    return (
        <div className={'relative'}>

            <Header/>


            <div className={'pt-24 mx-auto flex justify-center items-center max-w-[600px]'}>

                <div className={`grid grid-cols-1 gap-3 p-2 ${items?.length > 0 ? 'pb-20':''}`}>
                    {
                        productItems?.length > 0 && productItems.map((item) => {

                            return (

                                <FoodItem
                                    key={Math.random() + item.documentId}
                                    id={item.documentId}
                                    name={locale === 'ru' ? item.title_ru : item.title_ro}
                                    price={+item.price}
                                    gramash={item.gramash}
                                    itemphotos={item.itemphotos}
                                />


                            )


                        })
                    }

                    {
                        items?.length > 0 &&
                        <div className={'relative max-w-[600px] mx-auto'}>

                            <div className={'goToCart z-50  text-center fixed bottom-0 left-0 right-0   mx-auto py-4 px-8 rounded'}>
                                <Link href={'/cart'}  className={'mx-auto rounded w-full max-w-[600px] flex items-center justify-center text-center uppercase font-bold text-white shadow-xl bg-orange-500 p-5 '}>
                                    <p>Перейти к Заказу</p>
                                </Link>
                            </div>


                        </div>
                    }


                </div>
            </div>


        </div>
    );
}


export async function getStaticProps() {
    const apiUrl = process.env.API_URL;
    const token = process.env.API_TOKEN;

    const res = await fetch(`${apiUrl}/api/zavtraks?pagination[start]=0&pagination[limit]=200&populate=*`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const req = await res.json()

    return {
        props: {
            productItems: req.data || []
        },
        revalidate:5
    }
}