import {Carousel} from "@/components/ui/carousel";

export default function ItemCarousel({slides}:{slides:{src:string}[]}) {
    return (
        <div className={'mx-auto bg-[#171717] '}>
            <div className="relative overflow-hidden w-full h-full py-20">
                <Carousel slides={slides}/>
            </div>
        </div>
    );
}
