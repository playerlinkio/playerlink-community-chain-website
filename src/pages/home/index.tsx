import { Fragment ,useRef} from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const navigation = [
    { name: 'Docs', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Tokens', href: '#' },
    { name: 'About', href: '#' },
]
const twotext=[
    {
        img:"https://darwinia.network/static/media/interoperability.cba25090.svg",
        h1:"Cross-chain Composability",
        h2:"PlayerLink Network is a trust-free service function Network developed based on Subtrate.",


    },
    {
        img:"https://darwinia.network/static/media/smart-contract.6d26a651.svg",
        h1:"No Smart Contract Scheme",
        h2:"PlayerLink can easily interact with the blockchain without writing any smart contracts.",

    },
    {
        img:"https://darwinia.network/static/media/smart-contract.6d26a651.svg",
        h1:"Offline validation",
        h2:"By integrating aggregation and threshold signatures with zk-SNARKs, PlayerLink enables thousands of services to run and use simultaneously.",

    },





]
const partners=[
    {
        id:"1",
        hef:"",
        img:"https://moonbeam.network/wp-content/uploads/2021/01/ocean-protocol-500.png",
    },
    {
        id:"2",
        hef:"",
        img:"https://moonbeam.network/wp-content/uploads/2020/12/human-protocol-500.png",
    },
    {
        id:"3",
        hef:"",
        img:"https://moonbeam.network/wp-content/uploads/2021/06/sushiswap-new-500.png",
    },
    {
        id:"4",
        hef:"",
        img:"https://moonbeam.network/wp-content/uploads/2020/10/Chainlink-500.png",
    },
    {
        id:"5",
        hef:"",
        img:"https://moonbeam.network/wp-content/uploads/2021/09/cream-finance-500.png",
    },
    {
        id:"6",
        hef:"",
        img:"https://moonbeam.network/wp-content/uploads/2021/10/biconomy-new-500.png",
    },

]
const toend=[
    {
        title:"GENERAL",
        h1:"WIKI",
        h1url:"#",
        h2:"Roadmap",
        h2url:"#",
        h3:"Careers",
        h3url:"#",
        h4:"Cooperation",
        h4url:"#",
        h5:"Brand",
        h5url:"#",
        h6:"",
        h6url:"#"
    },
    {
        title:"PLAYERLINK ",
        h1:"Platform",
        h1url:"https://playerlink-platform.vercel.app/",
        h2:"Community",
        h2url:"https://www.playerlink.io/",
        h3:"Technology",
        h3url:"",
        h4:"Foundation",
        h4url:"https://playerlink-foundation.vercel.app/",
        h5:"Ventures",
        h5url:"https://playerlink-ventures.vercel.app/",
        h6:"Capital",
        h6url:"https://playerlink-capital.vercel.app/",
        h7:"",
        h7url:"#"
    },{
        title:"USE PLAYERLINK",
        h1:"Apps",
        h1url:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftestnet.playerlink.io#/settings",
        h2:"Wormhole",
        h2url:"#",
        h3:"Smart Module",
        h3url:"#",
        h4:'Crab Network',
        h4url:""
    },

]
export default function Home() {

    return (
        <div className="min-h-screen ">
            <header>
                <Popover className="relative ">
                    <div className="flex  fixed z-20 inset-x-0 bg-black mb-10  justify-between  items-center p-3 md:p-3 sm:px-6 lg:justify-start md:space-x-10 2xl:pl-32">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="home">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="/pllogo.svg"
                                    alt=""
                                />
                            </a>
                        </div>

                        <div className="flex -mr-2 -my-2 lg:hidden">
                            <Popover.Button className="bg-white rounded-md p-2  inline-flex items-center  justify-center text-black text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>

                        </div>
                        <Popover.Group as="nav" className="hidden lg:flex space-x-10  ">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-xl rounded-lg p-2 font-medium text-gray-50 active:bg-red-50 hover:bg-blue-500">
                                    {item.name}
                                </a>
                            ))}

                        </Popover.Group>
                        <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                                href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftestnet.playerlink.io#/settings"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Launch App
                            </a>

                        </div>
                        <div className="hidden lg:flex text-gray-50 items-center justify-end lg:flex-1 lg:w-0 text-xl ">
                            <a  className="mr-5 hover:text-blue-400" href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a className="mr-5 hover:text-blue-400" href=""><i className="fa fa-telegram" aria-hidden="true"></i></a>
                            <a className="mr-5 hover:text-blue-400" href=""><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5 ">
                                    <div className="flex items-center justify-between ">
                                        <div>
                                            <Link href="/home">
                                            <a>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://cdn.discordapp.com/attachments/897398778166906911/918367515242029106/viewfile.png"
                                                    alt="Workflow"
                                                /></a>
                                            </Link>
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 px-5 ">
                                    {navigation.map((item) => (
                                        <div   key={item.name} className="m-1   text-center ">
                                            <a
                                                href={item.href}
                                                className="p-0.5  text-2xl rounded-lg bg-indigo-300 font-medium text-gray-50  "
                                            >
                                                {item.name}
                                            </a>  </div>
                                    ))}

                                    <div className="mt-6">
                                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                                            <a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftestnet.playerlink.io#/settings" className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                            >
                                                Launch App
                                            </a>
                                        </p>
                                        <p className="mt-6 text-center text-xl font-medium text-gray-500">
                                            <a  className="m-5 hover:text-blue-400" href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            <a className="m-5 hover:text-blue-400" href=""><i className="fa fa-telegram" aria-hidden="true"></i></a>
                                            <a className="m-5 hover:text-blue-400" href=""><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>
            <main>
                <div>
                    {/* Hero card */}
                    <div className="relative"  >
                        <div className="relative  bg-cover  md:bg-center sm:overflow-hidden"
                             style={{backgroundImage:"url('https://img.tukuppt.com/bg_grid/00/03/39/trTD0kQKQJ.jpg!/fh/350') "}}>
                            <div className=" px-8 py-32 md:py-56 md:px-32">
                                <div className="p-5">
                                    <div className=" text-lg block text-indigo-600 font-extrabold tracking-tight sm:text-4xl ">
                                        <div className="mb-3">
                                            PlayerLink Network</div>
                                        <div className="text-2xl sm:text-4xl xl:w-7/12">
                                            Is a trust free service link to the grassroots network
                                        </div>
                                    </div>
                                    <div className="pt-10 space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">
                                        <a
                                            href="#"
                                            className="flex  items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-300 bg-white  sm:px-8 transform duration-500 hover:shadow-2xl hover:-translate-y-1"
                                        >
                                            <i className="" ></i>
                                            Get Started
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/*  TWO  */}
                        <div className="shadow-xl  bg-white sm:overflow-hidden" >
                            <div className=" px-8 py-10  md:px-20 ">
                                <div className="md:pl-20 md:pr-20">
                                    <div className="flex flex-wrap justify-between ">
                                        {twotext.map((item)=>(
                                        <div key={item.h1} className=" flex-col  m-5 w-72 ">
                                            <img className="w-40 mx-auto"
                                                 src={item.img} />
                                            <h1 className="m-5 text-blue-500 text-center text-lg">{item.h1}</h1>
                                            <h2 className="text-sm">{item.h2}</h2>
                                        </div >
                                        ))}
                                    </div>
                                    <div className="mt-10 max-w-sm mx-auto  text-center sm:max-w-none  sm:justify-center">
                                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">
                                            <a
                                                href="#"
                                                className="flex  items-center justify-center px-4 py-3 border border-transparent text-sm md:text-base font-medium rounded-md shadow-sm text-white bg-indigo-500  sm:px-8 transform duration-500 hover:shadow-2xl hover:-translate-y-1"
                                            >
                                                <i className="" ></i>
                                                Learn more about PlayerLink Technology
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TWO   */}
                        {/*<div className="shadow-xl  bg-gray-800 sm:overflow-hidden" >*/}
                        {/*    <div className=" px-8 py-16 text-white md:p-16">*/}
                        {/*        <div className="md:pl-20  md:pr-20">*/}
                        {/*            <h1 className="text-center text-2xl tracking-tight sm:text-4xl mb-10 ">*/}
                        {/*                <span className="block font-extrabold  mb-5 md:mb-10">Powering the PlayerLink Serve</span>*/}
                        {/*            </h1>*/}
                        {/*            <h2 className="text-center">PlayerLink native token is PL.</h2>*/}
                        {/*            <div className="flex mt-10 flex-wrap justify-center ">*/}
                        {/*                <div className="flex max-w-xl mb-5 md:mx-5  bg-blue-300 p-5 rounded-lg">*/}
                        {/*                    <div className="p-2">*/}
                        {/*                        <img className="w-72" src="https://darwinia.network/static/media/token-ring.a11e2478.svg" alt=""/>*/}
                        {/*                        <div className="text-center mt-5">*/}
                        {/*                        RING</div>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="ml-8">*/}
                        {/*                        <h1 className=" mb-3 text-lg md:text-2xl">Title</h1>*/}
                        {/*                        <h2 className="mb-2">The native tokens for Darwinia Network is RING, RING can be used as gas for transactions. Gas include transaction fees, contract execution fees, network bandwidth charges, storage fees, and more.</h2>*/}
                        {/*                        </div>*/}
                        {/*                </div >*/}
                        {/*                <div className="flex  md:max-w-xl  mb-5 md:mx-5    bg-blue-300 p-5 rounded-lg">*/}
                        {/*                    <div className="p-2">*/}
                        {/*                        <img className="w-72" src="https://darwinia.network/static/media/token-kton.74d46974.svg" alt=""/>*/}
                        {/*                        <div className="text-center mt-5">*/}
                        {/*                            KTON*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="ml-8">*/}
                        {/*                        <h1 className=" mb-3 text-lg md:text-2xl">Title</h1>*/}
                        {/*                        <h2 className="mb-2">*/}
                        {/*                            To encourage users to make long term commitments and pledge, users can choose to lock RING for 3 - 36 months in the process of Staking, and the system will offer a KTON token as reward for users participating in Staking.*/}
                        {/*                        </h2>*/}

                        {/*                    </div>*/}

                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className="flex justify-center">*/}
                        {/*            <div className="pt-10 space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">*/}
                        {/*                <a*/}
                        {/*                    href="#"*/}
                        {/*                    className="flex  items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black  sm:px-8 transform duration-500 hover:shadow-2xl hover:-translate-y-1"*/}
                        {/*                >*/}
                        {/*                    <i className="" ></i>*/}
                        {/*                    Learn more*/}
                        {/*                </a>*/}
                        {/*            </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*three*/}
                        <div className="shadow-xl  bg-white sm:overflow-hidden" >
                            <div className=" px-8 py-16 text-black md:p-16">
                                <div className="md:pl-20  md:pr-20">
                                    <h1 className="text-center text-2xl tracking-tight sm:text-4xl mb-10 ">
                                        <span className="block  mb-5 md:mb-10">Join the Projects Already Building on PlayerLink</span>
                                    </h1>
                                    <h2 className="text-center text-lg">More Integrations. More Builders. More Deployments.
                                       </h2>
                                </div>
                                <div className="flex mt-2 flex-wrap md:px-18 lg:px-32">
                                    {partners.map((item)=>(
                                        <a  key={item.id} href={item.hef}>
                                    <img  className="w-36 m-1 xl:m-4 md:w-48" src={item.img} alt=""/>
                                        </a>
                                    ))}

                                </div>

                                <div className="flex justify-center">
                                    <div className="pt-10 space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5 ">
                                        <a
                                            href="#"
                                            className="flex  items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black  sm:px-8 transform duration-500 hover:shadow-2xl hover:-translate-y-1 hover:text-blue-400"
                                        >

                                            See More PlayerLinker
                                            <i className="fa fa-arrow-right pl-2" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*  Four  */}

                        <div className="shadow-xl  bg-black sm:overflow-hidden" >
                            <div className=" px-8 py-16 text-white bg-cover  md:bg-center md:p-16"
                                 style={{backgroundImage:"url('https://img.zcool.cn/community/015b1456cd26db32f875520f3f7a84.jpg@1280w_1l_2o_100sh.jpg')"}}>
                                <div className="md:pl-20  md:pr-20">
                                    <h1 className="flex justify-center text-3xl tracking-tight sm:text-4xl mb-10 md:mb-20">
                                        <span className="block font-normal  ">Community  Team</span>
                                    </h1>
                                    <div className="   -mt-8  ">
                                        <div className="   mb-5  md:mb-16  ">
                                            <div className="flex justify-center">
                                                <h1 className="mb-3  text-center ">
                                                   PlayerLink is a network of untrusted blockchain services built and driven by the community.</h1>
                                            </div>
                                        </div >
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="pt-10 space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5 ">
                                            <a
                                                href="https://playerlink.org/careers"
                                                className="flex  items-center justify-center px-10 py-3 border border-transparent text-base rounded-md shadow-sm text-black bg-white   md:px-16 transform duration-500 hover:shadow-2xl hover:-translate-y-1 hover:text-blue-400"
                                            >

                                                Join us

                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Five*/}
                        <div className="shadow-xl  bg-black sm:overflow-hidden" >
                            <div className=" px-8 py-16 text-white bg-gray-800  md:bg-center md:p-16">
                                <div className="md:pl-20  md:pr-20">
                                    <div className="flex flex-wrap justify-center -mt-8 md:justify-start ">
                                        <div>
                                            <div className="flex justify-center md:block">
                                            <div className="max-w-lg py-5">
                                                <a href="home">
                                                    <img
                                                        className="h-16 w-auto"
                                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                        alt="Workflow"
                                                    /></a>
                                            </div>
                                            </div>
                                            <div className="flex  w-auto mb-2 mr-5   md:mr-16  ">
                                                <div className="text-black">



                                                    <form action="" method="post" className="flex">
                                                        <input className="w-44  p-1 md:w-56 rounded-lg " type="text" placeholder="  Email Address" />
                                                        <input type="submit" value="Submit"
                                                               className="ml-1 px-4  border border-transparent text-base
                                                font-medium rounded-md shadow-sm text-white bg-indigo-500 cursor-pointer
                                                 "/>
                                                    </form>
                                                    <div className="mt-2 text-gray-400">
                                                        This field is required.
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="md:flex md:justify-between border-b-2 border-gray-400">
                                            {toend.map((ends)=>(
                                                <div key={ends.title} className="">
                                                    <div className="mb-6">
                                                        <h1 className="flex justify-center text-xl font-bold text-gray-200 mb-4">
                                                            {ends.title}
                                                        </h1>
                                                        <h2 className="">
                                                            <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                                <a href={ends.h1url}>{ends.h1}</a></p>
                                                            <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                                <a href={ends.h2url}>{ends.h2}</a></p>
                                                            <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                                <a href={ends.h3url}>{ends.h3}</a></p>
                                                            <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                                <a href={ends.h4url}>{ends.h4}</a></p>
                                                            <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                                <a href={ends.h5url}>{ends.h5}</a></p>
                                                            <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                                <a href={ends.h6url}>{ends.h6}</a></p>
                                                            <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                                <a href={ends.h7url}>{ends.h7}</a></p>
                                                        </h2>
                                                    </div>
                                                </div>))}
                                            <div>
                                                <h1 className="flex justify-center text-xl font-bold text-gray-200 mb-4">
                                                    CONTACT</h1>
                                                <div className="text-center grid text-2xl  grid-cols-4">
                                                <a  className="mx-3 mb-2 hover:text-blue-400"
                                                    href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>

                                                <a className="mx-3 mb-2  hover:text-blue-400"
                                                   href=""><i className="fa fa-telegram" aria-hidden="true"></i></a>

                                                <a className="mx-3 mb-2  hover:text-blue-400"
                                                   href=""><i className="fa fa-envelope-o" aria-hidden="true"></i></a>

                                                <a className="mx-3 mb-2  hover:text-blue-400"
                                                   href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>


                                                </div>


                                            </div>

                                        </div>


                                    </div>
                                </div>
                                <div className="md:flex text-center text-gray-400 justify-between px-8 md:px-20  ">
                                    <div className="my-4">Granted by Web3 Foundation</div>
                                    <div  className="my-4">Copyright@2021 PLAYERLINK</div>
                                    <div  className="my-4">Substrate Builder Program</div>
                                </div>
                            </div>

                        </div>
                        {/*  end  */}

                    </div >
                </div>
            </main>

        </div>
    )
}
