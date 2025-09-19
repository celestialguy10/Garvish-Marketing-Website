import { Helmet } from "react-helmet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="w-full pt-24 pb-10">
      <Helmet>
        <link rel="canonical" href="https://garvishmarketing.com/about" />
      </Helmet>
      <div className="w-full flex flex-col lg:flex-row px-6">
        <div className=" flex md:w-[40%] flex-col gap-12 px-8    lg:py-5 lg:pb-10  rounded-xl">
          <div>
            <h2 className="text-2xl md:text-4xl font-[400] pb-3 text-blue-900 ">
              Garvish Marketing Pvt Ltd - Confluence of AI & Innovation
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-[300] text-justify">
              At Garvish Marketing, we empower our client business with the
              power of AI and Digital Marketing tools to drive the growth and
              transformation of market into potential clients. Our team
              comprises of young innovative minds whose passion for creativity
              and a commitment to excellence is unmatched in the market. We
              specialize in providing comprehensive digital marketing solutions
              that help businesses achieve their goals and thrive in today’s
              competitive landscape.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-[400] pb-3 text-blue-900 ">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-[300] text-justify">
              Our mission is to innovate new customised solution in the field of
              digital marketing by leveraging latest advancement of technology
              and strategies and technologies each product to gain desired
              output. We aim to build trust and continuous relationship with our
              clients to provide them better experience than any other agency
              can.
            </p>
          </div>
        </div>
        <div className="py-5 mx-8 md:w-[55%]">
          <div className="flex flex-col">
            <h2 className="text-3xl mb-4 md:text-4xl font-[400] pb-2 text-blue-900 ">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-[400] px-2">
                    Ashish Pal (Digital Marketing Specialist)
                  </h3>
                </div>
                <p className="text-justify font-sm">
                  Passionate computer science student enthusiastic about
                  technology have a experience of 1 year in back end development
                  and production control unit. Explorer of new technologies and
                  finding the best solution for mankind.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-[400] px-2">
                    Aryan Pal ( Full Stack - Web Developer)
                  </h3>
                </div>
                <p className="text-justify font-sm">
                  Passionate computer science student enthusiastic about
                  technology have a experience of 1 year in back end development
                  and production control unit. Explorer of new technologies and
                  finding the best solution for mankind.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-[400] px-2">
                    Lakshaydeep ( Full Stack - Web Developer)
                  </h3>
                </div>
                <p className="text-justify font-sm">
                  Passionate computer science student enthusiastic about
                  technology have a experience of 1 year in back end development
                  and production control unit. Explorer of new technologies and
                  finding the best solution for mankind.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-[400] px-2">
                    Gaurav Dhiman (Mobile App Developer)
                  </h3>
                </div>
                <p className="text-justify font-sm">
                  Passionate computer science student enthusiastic about
                  technology have a experience of 1 year in back end development
                  and production control unit. Explorer of new technologies and
                  finding the best solution for mankind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
