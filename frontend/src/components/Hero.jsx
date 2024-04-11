export default function Hero() {
    return (
        <div className="slider-main ">
            <div className=" flex  justify-center lg:px-20 xl:pr-20 lg:pl-20 xl:pl-80 mx-auto w-full">
                <div className="bg-img mt-28 mx-2 lg:mt-40">
                    <div className="flex text-center md:text-left justify-center text-2xl lg:text-3xl xl:text-5xl font-extrabold lg:w-[70%] w-full">
                        Leading Enterprise Ecommerce Platform in India
                    </div>
                    <div className="font-bold text-center md:text-left my-5 text-xl xl:text-2xl">
                        Build whitelabelled

                    </div>
                    <div className="text-lg text-center md:text-left xl:text-2xl">
                        Designed for diverse B2B and B2C business models

                    </div>
                    <div className="w-full mt-5 text-center md:text-left">
                        <button className="bg-[#7db434] text-white text-lg w-max py-2 rounded-full px-6 hover:bg-white hover:border-[1px] hover:border-[#7db434] hover:text-gray-400 ">SCHEDULE DEMO</button>
                    </div>
                </div>
                <div className="hidden mt-24 lg:flex justify-start z-10">
                    <img className="h-[550px] w-[550px] -ml-44" src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657809dbbcebf27febe432cc/ecommerce-banner.png" />
                </div>
            </div>
        </div>
    )
}