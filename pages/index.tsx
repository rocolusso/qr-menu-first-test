
import zavtrakImg from './../public/img/categor/zavtrak/1.png'
import brusketyImg from './../public/img/categor/bruschette/sandwich-with-salted-salmon-cream-cheese.jpg'
import blinyImg from "./../public/img/categor/bliny/Clatite-cu-sunca-si-cascaval.jpg"
import salateImg from './../public/img/categor/salate/2024-04-13-843q7p-teplyij-salat-s-telyatinoj-i-kunzhutom_1712996930.jpg'

import supeImg from './../public/img/categor/supy/Kuriniy-sup-za-15-minut-500x350-1200x840.jpg'
import pastaImg from './../public/img/categor/Pasta/Creamy-Salmon-Pasta-main-2.jpg'
import goryachieBlyuda from './../public/img/categor/goryacheye/ANOR3495.jpg'
import myasoNaGrile from './../public/img/categor/myaso na grile/marinad_3.jpg'
import garniry from './../public/img/categor/garnir/myasnoe-assorti-s-kartofelem-paj.jpg'
import sousyImg from './../public/img/categor/sousy/set-of-different-sau.jpg'
import platoImg from './../public/img/categor/plato/IMG_20200921_133111-scaled.jpg'


import Image from "next/image";
import Header from "@/components/Header";
import {useRouter} from "next/router";
import Link from "next/link";
import {useCart} from "@/lib/hooks/useCart";

export default function Home() {

    const {locale} = useRouter();

    const { items } = useCart()

    const categories= [
        {
            title_ru: "Завтрак",
            title_ro:'Mic de jun',
            image:zavtrakImg.src,
            url:"/meal/zavtraki"
        },
        {
            title_ru:'Брускеты',
            title_ro: "Bruschette",
            image:brusketyImg.src,
            url:"/meal/bruschette"
        },
        {
            title_ru: "Блины",
            title_ro: "Clătite",
            image:blinyImg.src,
            url:"/meal/bliny"
        },
        {
            title_ru: "Салаты",
            title_ro: "Salate",
            image:salateImg.src,
            url:"/meal/salate"
        },
        {
            title_ru: "Супы",
            title_ro: "Supe",
            image:supeImg.src,
            url:"/meal/supe"
        },
        {
            title_ru: "Паста",
            title_ro: "Pasta",
            image:pastaImg.src,
            url:"/meal/pasta"
        },
        {
            title_ru: "Горячие блюда",
            title_ro: "Mâncare caldă",
            image:goryachieBlyuda.src,
            url:"/meal/goryachie"
        },
        {
            title_ru: "Мясо на гриле",
            title_ro: "Carne la grătar",
            image:myasoNaGrile.src,
            url:"/meal/na-grile"
        },
        {
            title_ru: "Гарниры",
            title_ro: "Garnituri",
            image:garniry.src,
            url:"/meal/garniry"
        },
        {
            title_ru: "Соусы",
            title_ro: "Sosuri",
            image:sousyImg.src,
            url:"/meal/sousy"
        },
        {
            title_ru: "Плато",
            title_ro: "Platouri",
            image:platoImg.src,
            url:"/meal/plato"
        }
    ]






  return (
    <div>

        <Header/>


        <div className={`pt-24 flex justify-center max-w-[600px] mx-auto ${items?.length > 0 && 'pb-20'} `}>
            <div className={'categories grid grid-cols-2 gap-2 m-2'}>
                {
                    categories.map((cat) => (
                        <Link href={cat.url} key={Math.random()}>
                            <div className={'relative'}>
                                <Image
                                    className={'rounded-xl'}
                                    src={cat.image}
                                    alt={''}
                                    width={600}
                                    height={600}
                                    priority
                                />
                                <div className={'absolute bottom-2 left-3 uppercase bg-black p-4 rounded'}>
                                    <h1 className={'text-white'}>{locale === "ru" ? cat.title_ru : cat.title_ro}</h1>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>


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
  );
}


export async function getStaticProps() {

    // const token = process.env.API_TOKEN;


    ////////// worked

    // const res = await fetch('http://localhost:1337/api/zavtraks?pagination[start]=0&pagination[limit]=200&populate=*',{
    //     headers:{
    //         Authorization:`Bearer ${token}`
    //     }
    // })
    //
    // const req = await res.json()


    return {
        props: {
            users: []
        },
        revalidate: 5
    }
}
