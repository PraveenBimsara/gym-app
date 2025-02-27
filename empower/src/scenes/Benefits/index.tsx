import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphic from "@/assets/benefit.jpg";

const benefits:Array<BenefitType> = [
    {
        icon:<HomeModernIcon className="h-6 w-6"/>,
        title:"State of the Art Facilities",
        description:"Our state-of-the-art facilities provide the perfect environment for you to achieve your fitness goals with the latest equipment and cutting-edge amenities.",
    },
    {
        icon:<UserGroupIcon className="h-6 w-6"/>,
        title:"100's of Diverse Classes",
        description:"With 100's of diverse classes available, Empower offers something for everyone, from high-intensity workouts to relaxing yoga sessions.",
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6"/>,
        title:"Expert and Pro Trainers",
        description:"Our expert and pro trainers are dedicated to helping you reach your fitness goals with personalized guidance and professional support.",
    }
];

const container = {
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}

type Props = {
    setSelectedPage:(value:SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div 
        onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div
             className="md:my-5 md:w-3/5"
             initial = "hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{delay:0.2,duration:0.5}}
                variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0},
                }}
             >
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                At Empower, we believe fitness is about more than just exercise—it's about building a community, embracing a healthier lifestyle, and achieving personal growth. Our comprehensive approach includes personalized training programs, wellness workshops, and supportive coaching, all designed to empower you to reach your fullest potential. Join us and discover a place where your fitness goals become a transformative journey.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            variants={container}
            >
                {benefits.map((benefit:BenefitType)=>(
                    <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHICS */}
                    <img className="mx-auto mb-10" alt="" src={BenefitPageGraphic}/>

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                className="md:my-5 md:w-3/5"
                                initial = "hidden"
                                   whileInView="visible"
                                   viewport={{once:true, amount:0.5}}
                                   transition={{duration:0.5}}
                                   variants={{
                                       hidden:{opacity:0,x:-50},
                                       visible:{opacity:1,x:0},
                                   }}
                                >
                                    <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span>.
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <motion.div
                        className="md:my-5 md:w-3/5"
                        initial = "hidden"
                           whileInView="visible"
                           viewport={{once:true, amount:0.5}}
                           transition={{delay:0.2,duration:0.5}}
                           variants={{
                               hidden:{opacity:0,x:50},
                               visible:{opacity:1,x:0},
                           }}
                        >
                            <p className="my-5">At Empower, our community speaks for itself. With millions of happy members, we've helped countless individuals transform their lives and achieve their fitness goals. Join us and become part of a supportive, motivating environment where your success is our priority.</p>
                            <p className="my-5">Join a community of millions who have found their path to fitness with Empower. Our members are a testament to the effectiveness of our programs and the supportive atmosphere we foster. Experience the difference and see why so many have chosen Empower to help them get fit and stay healthy.</p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
        </motion.div>
    </section>
  )
}

export default Benefits