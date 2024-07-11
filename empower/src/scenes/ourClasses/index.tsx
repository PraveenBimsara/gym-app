import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name:"Weight Training Classes",
        description:"Empower's weight training classes are designed to build strength, enhance muscle tone, and boost overall fitness through expert-guided routines.",
        image:image1,
    },
    {
        name:"Yoga Classes",
        description:"Empower's yoga classes offer a serene and rejuvenating experience, promoting flexibility, balance, and mental clarity through expertly guided practices.",
        image:image2,
    },
    {
        name:"Ab Core Classes",
        description:"Empower's ab core classes focus on strengthening your core muscles, improving stability, and enhancing overall fitness with targeted exercises and expert guidance.",
        image:image3,
    },
    {
        name:"Adventure Classes",
        description:"Empower's adventure classes provide thrilling and dynamic workouts that challenge your limits and keep your fitness routine exciting.",
        image:image4,
    },
    {
        name:"Fitness Classes",
        description:"Empower's fitness classes offer a diverse range of options to keep you motivated and energized, ensuring there's a perfect fit for everyone's workout preferences.",
        image:image5,
    },
    {
        name:"Training Classes",
        description:"Empower's training classes cater to all fitness levels, providing expert instruction and dynamic workouts to help you achieve your fitness goals.",
        image:image6,
    },

];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden overflow-hidden-scrollable">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;