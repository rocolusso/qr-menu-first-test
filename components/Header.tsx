import React from 'react';
import Image from "next/image";
import logo from "@/public/img/logo.png";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {CiMenuFries} from "react-icons/ci";
import {useRouter} from "next/router";

import supeImg from "@/public/img/categories/index_supe.jpg";
import zavtrakImg from "@/public/img/categor/zavtrak/1.png";
import brusketyImg from "@/public/img/categor/bruschette/sandwich-with-salted-salmon-cream-cheese.jpg";
import blinyImg from "@/public/img/categor/bliny/Clatite-cu-sunca-si-cascaval.png";
import salateImg from "@/public/img/categor/salate/2024-04-13-843q7p-teplyij-salat-s-telyatinoj-i-kunzhutom_1712996930.jpg";
import pastaImg from "@/public/img/categor/Pasta/Creamy-Salmon-Pasta-main-2.jpg";
import goryachieBlyuda from "@/public/img/categor/goryacheye/ANOR3495.jpg";
import myasoNaGrile from "@/public/img/categor/myaso na grile/marinad_3.jpg";
import garniry from "@/public/img/categor/garnir/myasnoe-assorti-s-kartofelem-paj.jpg";
import sousyImg from "@/public/img/categor/sousy/set-of-different-sau.jpg";
import platoImg from "@/public/img/categor/plato/IMG_20200921_133111-scaled.jpg";
import Link from "next/link";

const Header = () => {
    // const {locale,locales} = useRouter();

    const router = useRouter();


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
        <div className={'header  bg-[#171717] max-w-[600px] mx-auto  fixed top-0 left-0 right-0 z-10 '}>
            <div className={'bg-[#171717]   mx-auto flex justify-between '}>
                <div className={'rounded-xl'}>
                    <Link href="/">
                        <Image
                            className={' p-3 rounded-xl'}
                            src={logo}
                            alt={'logo'}
                            width={150}
                            height={150}
                            priority
                        />
                    </Link>
                </div>
                <div className={'flex gap-10'}>
                    <div className={'locale flex justify-center items-center'}>
                        <Button
                            onClick={() => {
                               router.push(`/${router.locales?.filter(loc=>loc !== router.locale)}`)
                            }}
                            className={'uppercase'}
                            variant={'secondary'}
                        >{router.locales?.filter(loc=>loc !== router.locale)}</Button>
                    </div>
                    <div className={'menu flex justify-center items-center pr-3'}>
                        <Popover>
                            <PopoverTrigger asChild>
                                <button className={'border p-3 rounded-xl'}>
                                    <CiMenuFries color="#ffffff" size={40}/>
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-96">
                                <div className={' grid grid-cols-2 gap-1'}>
                                    {categories.map((item, index) => (
                                        <Link
                                            href={item.url}
                                            key={index + Math.random()}
                                            className={'p-5'}
                                        >
                                            <div
                                                 >
                                                <h4 className={'uppercase text-xl '}>{router.locale === "ru" ? item.title_ru : item.title_ro}</h4>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;