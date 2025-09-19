import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { LuMousePointerClick } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";
import { MdContentPasteSearch } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaGear } from "react-icons/fa6";
import { CiMemoPad } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsPersonArmsUp } from "react-icons/bs";
import { motion } from "framer-motion";

const Offer = () => {
  const divClassname =
    "flex flex-col  m-3 rounded-xl shadow-lg bg-gray-200 p-2";
  const pClassname = "text-gray-600 font-sm mt-2 text-xl text-justify pr-3";
  const hClassname =
    " text-gray-900 text-xl font-medium flex items-center gap-2 underline";

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-white to-gray-100 justify-between p-5">
      <h2 className="text-gray-900 text-3xl font-bold text-center p-6">
        WE OFFER - COMPREHENSIVE DIGITAL MARKETING SOLUTION
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  ">
        <motion.div
          className={`${divClassname}  `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0 * 0.3 }}
        >
          <h2 className={`${hClassname} justify-center items-baseline`}>
            <span>
              <MdOutlineScreenSearchDesktop className=" inline-block" />
            </span>
            Search Engine Optimization (SEO) Services
          </h2>
          <p className={`${pClassname}`}>
            Improve your{" "}
            <Link to="https://en.wikipedia.org/wiki/Website">
              <strong className="italic">website’s</strong>{" "}
            </Link>
            footprint on search engines through white hat SEO techniques
            provided by our expert SEO team.
          </p>
        </motion.div>
        <motion.div
          className={`${divClassname}  `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1 * 0.3 }}
        >
          <h2 className={`${hClassname} md:pb-6`}>
            <span>
              <LuMousePointerClick />
            </span>
            Pay-Per-Click (PPC) Advertising
          </h2>
          <p className={`${pClassname} md:-translate-y-4`}>
            Aim to drive targeted traffic with maximum ROI to your website with
            our well researched PPC campaigns on platforms like Google Ads, Bing
            Ads etc.
          </p>
        </motion.div>
        <motion.div
          className={`${divClassname}  `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 2 * 0.3 }}
        >
          <h2 className={`${hClassname}`}>
            <span>
              <IoPeople />
            </span>
            Social Media Marketing
          </h2>
          <p className={`${pClassname}`}>
            Engage, grow and retain your audience on social media platforms such
            as Facebook, Instagram, Twitter, and LinkedIn with our targeted
            social media marketing strategies..
          </p>
        </motion.div>
        <motion.div
          className={`${divClassname}  `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 3 * 0.3 }}
        >
          <h2 className={`${hClassname}`}>
            <span>
              <MdContentPasteSearch />
            </span>
            Content Marketing
          </h2>
          <p className={`${pClassname}`}>
            Attract and retain customers by creating valuable, relevant, and
            consistent content tailored to your audience. Our services include
            blog writing, video production, and infographics.
          </p>
        </motion.div>
        <motion.div
          className={`${divClassname}  `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 4 * 0.3 }}
        >
          <h2 className={`${hClassname} sm:pb-[50px] md:pb-20 lg:pt-3`}>
            <span>
              <AiOutlineMail />
            </span>
            Email Marketing
          </h2>
          <p className={`${pClassname} md:-translate-y-20`}>
            Give a personal touch to your customers with a personalized email
            campaigns that drive engagement and conversions.
          </p>
        </motion.div>
        <motion.div
          className={`${divClassname}  `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 5 * 0.3 }}
        >
          <h2 className={`${hClassname}`}>
            <span>
              <FaGear />
            </span>
            Web Design & Development
          </h2>
          <p className={`${pClassname}`}>
            Improve your coustomer experience throgh our professional web design
            and development services, which ensures excellent user experince and
            help you to properly maintain and analyse your customer data.
          </p>
        </motion.div>
        <motion.div
          className={`${divClassname}  `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 6 * 0.3 }}
        >
          <h2 className={`${hClassname} sm:pb-[50px]`}>
            <span>
              <CiMemoPad />
            </span>
            Analytics & Reporting
          </h2>
          <p className={`${pClassname} md:-translate-y-10`}>
            Track effectiveness of your all digital marketing campaigns and
            efforts with our elaborated and researced reporting services. With
            this we provide a continuos data driven inputs to our online
            marketing efforts.
          </p>
        </motion.div>
        <motion.div
          className={`${divClassname}  `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 7 * 0.3 }}
        >
          <h2 className={`${hClassname}`}>
            <span>
              <BsPersonArmsUp />
            </span>
            Influencer Marketing
          </h2>
          <p className={`${pClassname}`}>
            Why to promote through Bollywood stars, take the advantage of your
            local socila media influencers to promote your brand and products to
            a larger audience in a budget friendly way. We identify and
            collaborate with relevant influencers for your products and brands.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;
