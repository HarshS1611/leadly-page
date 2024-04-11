import React, { useState } from 'react';

export default function Brands() {
    const [showIcon1, setShowIcon1] = useState(false);
    const [showIcon2, setShowIcon2] = useState(false);
    const [showIcon3, setShowIcon3] = useState(false);
    const [showIcon4, setShowIcon4] = useState(false);
    const [showIcon5, setShowIcon5] = useState(false);
    const [showIcon6, setShowIcon6] = useState(false);
    const [showIcon7, setShowIcon7] = useState(false);


    return (
        <div className="bg-[#f9f9f9] lg:ml-10 lg:rounded-tl-[100px]">
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center xl:gap-10 pb-10 w-full mx-auto p-2 sm:px-6 xl:px-60">
                <div className="hidden lg:flex gap-5 mt-5 xl:mt-10">                    <div className="flex flex-col gap-4 mt-16">
                    <a href='https://shop.amul.com/en/' target='blank' className="cursor-pointer flex flex-col relative justify-center py-10 xl:py-12 w-max px-6 bg-white rounded-xl shadow-lg"
                        onMouseEnter={() => setShowIcon1(true)}
                        onMouseLeave={() => setShowIcon1(false)}>
                        <img className="w-24 h-10" src="https://shop.amul.com/s/62fa94df8c13af2e242eba16/632c0a030a4b84e22b4994cc/asset-1-480x480.png" />
                        {showIcon1 && <img className='absolute bottom-0 mb-5 ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                    </a>
                    <a href='https://www.syngenta.com/en' target='blank' className=" cursor-pointer flex flex-col relative  justify-center py-10 xl:py-12 w-max px-6 bg-white rounded-xl shadow-lg"
                        onMouseEnter={() => setShowIcon2(true)}
                        onMouseLeave={() => setShowIcon2(false)}>
                        <img className="w-24 h-10" src="https://www.syngenta.com/sites/syngenta/files/syngenta-logo.png" />
                        {showIcon2 && <img className='absolute bottom-0 mb-5 ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                    </a>
                </div>
                    <div className="flex flex-col gap-4">
                        <a href='https://shop.bergerpaints.com/' target='blank' className=" cursor-pointer flex flex-col relative  justify-center py-10 xl:py-10 w-max px-6 bg-white rounded-xl shadow-lg"
                            onMouseEnter={() => setShowIcon3(true)}
                            onMouseLeave={() => setShowIcon3(false)}>
                            <img className="w-24 h-16" src="https://cdn.storehippo.com/s/5ebbeb40984bf5412014650d/ms.settings/5256837ccc4abf1d39000001/5ec7811e47a129b9c8a9eaeb-480x480.png" />
                            {showIcon3 && <img className='absolute bottom-0 mb-5 ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                        </a>
                        <a href='https://www.masterconnect.in/' target='blank' className=" cursor-pointer flex flex-col relative  justify-center py-10 xl:py-10 w-max px-6 bg-white rounded-xl shadow-lg"
                            onMouseEnter={() => setShowIcon4(true)}
                            onMouseLeave={() => setShowIcon4(false)}>
                            <img className="w-24 h-10" src="https://www.masterconnect.in/s/61a87fd8f7e0908ed655d7a9/627124963e134a14a9212bec/resize_logo-240x240.png" />
                            {showIcon4 && <img className='absolute bottom-0 mb-5 ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                        </a>
                        <a href='https://www.whites.net/en/' target='blank' className=" cursor-pointer flex flex-col relative  justify-center py-10 xl:py-10 w-max px-6 bg-white rounded-xl shadow-lg"
                            onMouseEnter={() => setShowIcon5(true)}
                            onMouseLeave={() => setShowIcon5(false)}>
                            <img className="w-24 h-8" src="https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/636c8d9521cd491a8c9a4723/mystore-logo-blue-200x80.png" />
                            {showIcon5 && <img className='absolute bottom-0 mb-5 ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                        </a>

                    </div>
                    <div className="flex flex-col gap-4 mt-16">
                        <a href='https://www.momeaze.com/en/' target='blank' className=" cursor-pointer flex flex-col relative  justify-center py-10 xl:py-12 w-max px-6 bg-white rounded-xl shadow-lg"
                            onMouseEnter={() => setShowIcon6(true)}
                            onMouseLeave={() => setShowIcon6(false)}>
                            <img className="w-24 h-10" src="https://www.momeaze.com/s/62960a9d8f900ec4105c601b/62a2de90cbdfc8655f9466a8/mome-logo-480x480.png" />
                            {showIcon6 && <img className='absolute bottom-0 mb-5 ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                        </a>
                        <a href='https://shop.bergerpaints.com/' target='blank' className=" cursor-pointer flex flex-col relative  justify-center py-10 xl:py-12 w-max px-6 bg-white rounded-xl shadow-lg"
                            onMouseEnter={() => setShowIcon7(true)}
                            onMouseLeave={() => setShowIcon7(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="28.532" viewBox="0 0 130 28.532">
                                <path id="Path_348" data-name="Path 348" d="M138.075,192.587a9.919,9.919,0,0,1,0-1.017l-7.573,4.372v18.48c.145,4.179,3.166,5.678,5.975,5.678,3.02,0,5.1-1.043,6.441-3.261a3.264,3.264,0,0,1-1.82.507c-2.049,0-3-1.423-3-4.478l-.017-12.96h4.842a8.519,8.519,0,0,1-4.842-7.321M157.839,214.7c-4.012-.111-8.157-3.018-8.157-8.8a7.943,7.943,0,0,1,.222-1.705,9.424,9.424,0,0,1,.5-1.581,4.737,4.737,0,0,1,3.438-2.911c-.671.027-1.963.2-1.963.2a9.579,9.579,0,0,0-3.477,1.253.087.087,0,0,0-.031.02,9.787,9.787,0,0,0-1.233.874.2.2,0,0,1-.031.027,10.251,10.251,0,0,0-3.618,7.864,9.992,9.992,0,0,0,9.831,10.151,9.876,9.876,0,0,0,9.366-7.064,7.54,7.54,0,0,1-4.847,1.666m-41.627-10.532a2.68,2.68,0,0,1,1.565,2.439l-.016,13.289h7.575V198.91l-9.125,5.257Zm67.993,9.312c-.211-2.97-1.968-4.117-7.633-6.64-3.327-1.481-4.621-2.808-4.621-4.547,0-2.132,2.758-2.548,3.606-2.58h-.007c-1.372-.061-8.659-.067-8.659,6.391,0,4.19,2.411,6.245,7.431,7.985,2.688.949,4.269,1.3,4.269,3.123,0,1.557-1.761,2.841-3.474,2.88v.006c5.924,0,9.378-2.516,9.086-6.617m-15.754.558v4.876A22.117,22.117,0,0,0,173.1,220.1a9.247,9.247,0,0,1-4.649-6.059m-60.93-14.327c-1.335-.054-4.757.187-6.1,2.708l0,0a2.465,2.465,0,0,1,.7-.1,2.685,2.685,0,0,1,2.685,2.685V219.9H112.4V205.627c-.031-4.375-2.759-5.827-4.882-5.913m-38.047,7.7a2.9,2.9,0,0,1-.269.145,2.68,2.68,0,0,1-3.567-1.3l-3.06-6.553H54.222L63.733,220.1l6-12.867a2.861,2.861,0,0,1-.25.176s-.008,0-.012.008m88.454-4.491a4.541,4.541,0,0,1-1.153,3.334,7.767,7.767,0,0,1-4.422,2.094v.006h10.225a8.316,8.316,0,0,0-1.892-5.885,8.574,8.574,0,0,0-4.787-2.751l-.075-.016a4.207,4.207,0,0,1,2.1,3.218m24.233,2.884v-4.876a21.488,21.488,0,0,0-4.594-1.174,9.173,9.173,0,0,1,4.594,6.051M91.861,219.9h7.574V191.575l-7.574,4.366Zm-8.11-12.482a2.931,2.931,0,0,1-.269.145,2.68,2.68,0,0,1-3.567-1.3l-3.06-6.553H68.5L78.011,220.1l6-12.867a2.878,2.878,0,0,1-.25.176s-.008,0-.012.008m-.968-7.708,2,4.285a2.7,2.7,0,0,1,.25,1.062l2.474-5.347Z" transform="translate(-54.222 -191.57)" fill="#231f20"></path>
                            </svg>
                            {showIcon7 && <img className='absolute bottom-0 mb-5 ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                        </a>
                    </div>
                </div>
                <div className="lg:flex items-center hidden"><img className="h-40 w-80 xl:h-40 xl:w-80" src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/brand-after.png" /> </div>
                <div className='lg:hidden flex gap-2 md:gap-5'>
                    <a href='https://www.masterconnect.in/' target='blank' className=" cursor-pointer flex flex-col relative  justify-center py-5 md:py-10 xl:py-10 w-max px-4 md:px-6 bg-white rounded-xl shadow-lg"
                        onMouseEnter={() => setShowIcon4(true)}
                        onMouseLeave={() => setShowIcon4(false)}>
                        <img className="w-10 h-5 md:w-24 md:h-10" src="https://www.masterconnect.in/s/61a87fd8f7e0908ed655d7a9/627124963e134a14a9212bec/resize_logo-240x240.png" />
                        {showIcon4 && <img className='absolute bottom-0 mb-1 md:mb-5 ml-2 md:ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                    </a>
                    <a href='https://www.mystore.in/en/' target='blank' className=" cursor-pointer flex flex-col relative  justify-center py-5 md:py-10 xl:py-10 w-max px-4 md:px-6 bg-white rounded-xl shadow-lg"
                        onMouseEnter={() => setShowIcon5(true)}
                        onMouseLeave={() => setShowIcon5(false)}>
                        <img className="w-10 h-5 md:w-24 md:h-8" src="https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/636c8d9521cd491a8c9a4723/mystore-logo-blue-200x80.png" />
                        {showIcon5 && <img className='absolute bottom-0 mb-1 md:mb-5 ml-2 md:ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                    </a>
                    <a href='https://www.whites.net/en/' target='blank' className=" cursor-pointer flex flex-col relative  justify-center py-5 md:py-10 xl:py-12 w-max px-4 md:px-6 bg-white rounded-xl shadow-lg"
                        onMouseEnter={() => setShowIcon7(true)}
                        onMouseLeave={() => setShowIcon7(false)}>
                        <svg className='w-10 h-5 md:w-24 md:h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 28.532">
                            <path id="Path_348" data-name="Path 348" d="M138.075,192.587a9.919,9.919,0,0,1,0-1.017l-7.573,4.372v18.48c.145,4.179,3.166,5.678,5.975,5.678,3.02,0,5.1-1.043,6.441-3.261a3.264,3.264,0,0,1-1.82.507c-2.049,0-3-1.423-3-4.478l-.017-12.96h4.842a8.519,8.519,0,0,1-4.842-7.321M157.839,214.7c-4.012-.111-8.157-3.018-8.157-8.8a7.943,7.943,0,0,1,.222-1.705,9.424,9.424,0,0,1,.5-1.581,4.737,4.737,0,0,1,3.438-2.911c-.671.027-1.963.2-1.963.2a9.579,9.579,0,0,0-3.477,1.253.087.087,0,0,0-.031.02,9.787,9.787,0,0,0-1.233.874.2.2,0,0,1-.031.027,10.251,10.251,0,0,0-3.618,7.864,9.992,9.992,0,0,0,9.831,10.151,9.876,9.876,0,0,0,9.366-7.064,7.54,7.54,0,0,1-4.847,1.666m-41.627-10.532a2.68,2.68,0,0,1,1.565,2.439l-.016,13.289h7.575V198.91l-9.125,5.257Zm67.993,9.312c-.211-2.97-1.968-4.117-7.633-6.64-3.327-1.481-4.621-2.808-4.621-4.547,0-2.132,2.758-2.548,3.606-2.58h-.007c-1.372-.061-8.659-.067-8.659,6.391,0,4.19,2.411,6.245,7.431,7.985,2.688.949,4.269,1.3,4.269,3.123,0,1.557-1.761,2.841-3.474,2.88v.006c5.924,0,9.378-2.516,9.086-6.617m-15.754.558v4.876A22.117,22.117,0,0,0,173.1,220.1a9.247,9.247,0,0,1-4.649-6.059m-60.93-14.327c-1.335-.054-4.757.187-6.1,2.708l0,0a2.465,2.465,0,0,1,.7-.1,2.685,2.685,0,0,1,2.685,2.685V219.9H112.4V205.627c-.031-4.375-2.759-5.827-4.882-5.913m-38.047,7.7a2.9,2.9,0,0,1-.269.145,2.68,2.68,0,0,1-3.567-1.3l-3.06-6.553H54.222L63.733,220.1l6-12.867a2.861,2.861,0,0,1-.25.176s-.008,0-.012.008m88.454-4.491a4.541,4.541,0,0,1-1.153,3.334,7.767,7.767,0,0,1-4.422,2.094v.006h10.225a8.316,8.316,0,0,0-1.892-5.885,8.574,8.574,0,0,0-4.787-2.751l-.075-.016a4.207,4.207,0,0,1,2.1,3.218m24.233,2.884v-4.876a21.488,21.488,0,0,0-4.594-1.174,9.173,9.173,0,0,1,4.594,6.051M91.861,219.9h7.574V191.575l-7.574,4.366Zm-8.11-12.482a2.931,2.931,0,0,1-.269.145,2.68,2.68,0,0,1-3.567-1.3l-3.06-6.553H68.5L78.011,220.1l6-12.867a2.878,2.878,0,0,1-.25.176s-.008,0-.012.008m-.968-7.708,2,4.285a2.7,2.7,0,0,1,.25,1.062l2.474-5.347Z" transform="translate(-54.222 -191.57)" fill="#231f20"></path>
                        </svg>
                        {showIcon7 && <img className='absolute bottom-0 mb-1 md:mb-5 ml-2 md:ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                    </a>

                </div>
                <div className='lg:hidden flex gap-2 md:gap-5 my-5'>
                    <a href='https://shop.amul.com/en/' target='blank' className="cursor-pointer flex flex-col relative justify-center md:py-10 xl:py-12 w-max px-4 md:px-6 bg-white rounded-xl shadow-lg"
                        onMouseEnter={() => setShowIcon1(true)}
                        onMouseLeave={() => setShowIcon1(false)}>
                        <img className="w-8 h-5 md:w-24 md:h-10" src="https://shop.amul.com/s/62fa94df8c13af2e242eba16/632c0a030a4b84e22b4994cc/asset-1-480x480.png" />
                        {showIcon1 && <img className='absolute bottom-0 mb-1 md:mb-5 ml-2 md:ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                    </a>
                    <a href='https://shop.bergerpaints.com/' target='blank' className=" cursor-pointer flex flex-col relative  justify-center md:py-10 xl:py-10 w-max px-4 md:px-6 bg-white rounded-xl shadow-lg"
                        onMouseEnter={() => setShowIcon3(true)}
                        onMouseLeave={() => setShowIcon3(false)}>
                        <img className="w--8 h-5 md:w-24 md:h-16" src="https://cdn.storehippo.com/s/5ebbeb40984bf5412014650d/ms.settings/5256837ccc4abf1d39000001/5ec7811e47a129b9c8a9eaeb-480x480.png" />
                        {showIcon3 && <img className='absolute bottom-0 mb-1 md:mb-5 ml-2 md:ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                    </a>
                    <a href='https://www.momeaze.com/en/' target='blank' className=" cursor-pointer flex flex-col relative  justify-center md:py-10 xl:py-12 w-max px-4 md:px-6 bg-white rounded-xl shadow-lg"
                        onMouseEnter={() => setShowIcon6(true)}
                        onMouseLeave={() => setShowIcon6(false)}>
                        <img className="w-8 h-5 md:w-24 md:h-10" src="https://www.momeaze.com/s/62960a9d8f900ec4105c601b/62a2de90cbdfc8655f9466a8/mome-logo-480x480.png" />
                        {showIcon6 && <img className='absolute bottom-0 mb-1 md:mb-5 ml-2 md:ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                    </a>
                    <a href='https://www.syngenta.com/en' target='blank' className=" cursor-pointer flex flex-col relative  justify-center py-10 xl:py-12 w-max px-4 md:px-6 bg-white rounded-xl shadow-lg"
                        onMouseEnter={() => setShowIcon2(true)}
                        onMouseLeave={() => setShowIcon2(false)}>
                        <img className="w-8 h-5 md:w-24 md:h-10" src="https://www.syngenta.com/sites/syngenta/files/syngenta-logo.png" />
                        {showIcon2 && <img className='absolute bottom-0 mb-1 md:mb-5 ml-2 md:ml-10' src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg" alt="view-arrow" />}

                    </a>
                </div>
               

                <div className="flex flex-col items-center mt-10 lg:mt-0 xl:w-[25%] justify-start">
                    <div className="text-xl md:text-3xl xl:text-4xl font-extrabold">
                        <span className=""><img className="ml-5 md:-ml-10 lg:ml-6 h-6 md:h-10 w-6 md:w-10" src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/heading-before.png" /> </span>
                        <p className="-mt-5 text-right w-60 md:w-full"> Empowering Brands Across the Globe</p>
                    </div>
                    <div className="text-center lg:text-right font-bold text-sm xl:text-lg mt-5">
                        StoreHippo ecommerce platform builds extraordinary solutions to power brands across 15 countries and 30+ industries. Add your brand to the long list of brands that trust StoreHippo.

                    </div>
                </div>
            </div>
        </div>
    )
}