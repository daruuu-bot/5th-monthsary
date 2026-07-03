"use client";

import {motion} from "framer-motion";

interface Props{

onOpen:()=>void;

}

export default function Envelope({onOpen}:Props){

return(

<div className="absolute inset-0 bg-pink-100 flex items-center justify-center">

<motion.div

initial={{

y:-600

}}

animate={{

y:0

}}

transition={

{

type:"spring",

stiffness:120,

damping:10

}

}

>

<button

onClick={onOpen}

className="text-9xl"

>

💌

</button>

<p className="text-center mt-4 text-pink-600 font-bold text-2xl">

Click Me

</p>

</motion.div>

</div>

)

}