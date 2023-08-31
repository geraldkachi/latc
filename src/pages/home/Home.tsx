import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import StartSteps from "../../components/STartSteos";
import { MembershipData, startingFeatures } from "../../constants";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="relative bg-[url(/herobg.svg)] bg-cover bg-center bg-no-repeat">
        <div className="flex items-center">
          <div className=" max-w- mr-auto py-32 flex  ">
            <div className="max-w-3xl lg:mr-auto text-center text-white bg-[#001027CC]">
              <div className="text-left font-extrabold sm:text-6xl p-5 md:p-20">
                <h1 className='py-10 text-6xl font-normal capitalize '>Start your financial<br /> journey with LATC</h1>
              </div>
            </div>
            <div className=" bg-[#001027CC] ml-3 mr-auto w-6"></div>
            <div className=" bg-[#001027CC] ml-3 mr-auto w-6"></div>
            <div className=" bg-[#001027CC] ml-3 mr-auto w-6"></div>
          </div>
        </div>
      </section>

      <section className="mx-3">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-x-10 mt-52 mb-[92px]">
          <div className="">
            <h1 className="text-[52px] font-normal leading-normal text-[#001027]">We are in the business of impact.</h1>
            <p className="text-2xl text-[#959292] font-normal leading-normal mt-[30px[">For us, a promise made is a promise kept, so transparency is our watchword. This is evident in how we employ and collaborate with exceptional individuals who are enabled and encouraged to make the best decisions possible.</p>
            <div className="mt-[37px] text-[#9E7F56] flex items-center">
              <span className="text-2xl font-normal">Join now</span>
              <img src="/arrow-right.svg" alt="arrow" />
            </div>
          </div>

          <div className="relative">
            <img src="/impactbus.png" className="bg-[url(impactbus.png)] no-repeat w-full" />
            <img src="/impactbsu2.svg" className="-mt-32 -ml-20" />
          </div>
        </div>
      </section>


      <section className="relative">
        <div className=" max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 mt-52 mb-[92px]">
          <div className="">
            <img src="/handshakes.svg" className=" w-full md:pt-[77px]" />
          </div>

          <div className="">
            <h1 className="text-[52px] font-normal leading- text-[#001027]">What makes you<br /> eligible to be,<br /> a corporative member</h1>
            <p className="text-2xl text-[#959292] font-normal leading-normal mt-[30px[">
              <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
                {startingFeatures.map((feature, index) => (
                  <StartSteps
                    key={feature}
                    number={`${index < 10 ? '0' : ''} ${index + 1}`}
                    text={feature}
                  />
                ))}
              </div>
            </p>
            <div className="mt-[37px] text-[#9E7F56] flex items-center">

            </div>
          </div>

        </div>

        <div
          className="
          hidden
          md:block
          overflow-hidden
          bg-[#D7C9B6]
          rounded-r-[16px]
          absolute
          h-full
          w-2/6
          bottom-4
          left-0
          lg:-bottom-0
          lg:-right-36
          -z-10
          mb-24
          "
        ></div>
      </section>

      <section className="px-3 bg-[#090909] " >
        <div className="max-w-7xl mx-auto py-20">
          <h1 className="text-[45px] font-normal leading-normal">Membership benefits</h1>
          <div className="grid-cols-2 gap-20 md:grid lg:grid-cols-3 xl:grid-cols-4">
            {MembershipData.map((item) => (
              <div className="flex items-start gap-x-4">
                <img src={item.imgUrl} alt="svg" />
                <div className="text-white">
                  <h1 className="text-[32px] font-normal leading-normal">{item.title}</h1>
                  <p className="text-xl font-normal leading-normal">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h- my-auto ">
        {/* <div className="relative overflow-hidden h-full bg-gradient-to-r from-zinc-950 to-zinc-600" > */}
        <div className="relative overflow-hidden h-full bg-black" >
          {/* <div className="absolute h-full w-full bg-black opacity-40 woman1"></div> */}
          <div className="max-w-full mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* <!-- Content --> */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              {/* <h2 className="text-[#959292] text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo volutpat lacus, velit purus enim velit. Euismod ultrices faucibus leo urna arcu interdum sollicitudin. Amet nulla vestibulum sed pellentesque. Imperdiet nec ultrices id cras lorem sit convallis.
                        </h2> */}
              <div className="flex items-start gap-x[18px]">
                <div className="text-[100px] font-semibold text-white leading-normal -mt-14">“</div>
                <div>
                  <p className="text-[#959292] text-2xl text-start lg:text-left mb-6 md:mr-48">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo volutpat lacus, velit purus enim velit. Euismod ultrices faucibus leo urna arcu interdum sollicitudin. Amet nulla vestibulum sed pellentesque. Imperdiet nec ultrices id cras lorem sit convallis.


                    <div className="text-white mt-11">
                      <h1 className="text-xl font-semibold leading-normal">Mrs Olatunji D.A</h1>
                      <p className="text-base font-normal leading-normal mt-2">Customer Representative</p>
                    </div>
                  </p>
                </div>
              </div>

            </div>
            {/* <!-- Image --> */}
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 woman">
              <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full woman" src='woman.svg' alt="woman" />
            </div>
          </div>
          {/* <!-- Rounded Rectangle --> */}
          {/* <div
                    className="
          hidden
          md:block
          overflow-hidden
          bg-purple-600
          rounded-l-full
          absolute
          h-80
          w-2/4
          lg:top-80
          md:top-52
          top-32
          right-0
          lg:
          -bottom-28
          lg:-right-36
          "
                ></div> */}
        </div>
      </section>

      <section className="bg-[#9E7F56] mx-auto py-20">
        <div className="relative overflow-hidden h-full" >
        </div>
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* <!-- Content --> */}
          <div className="flex flex-1 flex-col items-center lg:items-start text-white">
            <h1 className="text-[40px] leading-[56px] font-normal">Sign up for our newsletter</h1>
            <p className="text-xl leading-[36px] font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit.</p>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="flex flex-1 items-center gap-x-[6px] w-full">
              <input type="email" placeholder="Enter email address" className="w rounded-[8px] border-[rgba(255, 255, 255, 0.50)] border-[1px] p-3 w-1/2 bg-transparent outline-none text-white placeholder:text-white" />
              <button type="submit" className="p-3 rounded-lg bg-[#001027] text-white">Notify me</button>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#] mx-auto py-20">
        <div className="relative overflow-hidden h-full" >
        </div>
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* <!-- Content --> */}
          <div className="flex flex-1 flex-col items-center lg:items-start text-[#001027]">
            <h1 className="text-[40px] leading-[56px] font-normal text-[#9E7F56]">001027</h1>
            <h1 className="text-[40px] leading-[56px] font-normal">LATC News</h1>
            <p className="text-xl leading-[36px] font-normal">Get exciting and jaw dropping updates from LATC.</p>
          </div>
        </div>
      </section>


      <section className="bg-[#] mx-auto py-20">
        <div className="relative overflow-hidden h-full" >
        </div>
        {/* <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12  border border-t pt-20"> */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 items-center gap-12 border-t py-20">
          {/* <!-- Content --> */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-[12px] leading-[21.6px] font-semibold text-[rgba(18, 17, 39, 0.48)]">Jun 27, 2020</h1>
            <h1 className="text-[20px] leading-[28px] font-bold text-[#121127]">Guide for designing better</h1>
            <h1 className="text-[14px] leading-[25.2px] font-normal text-[rgba(18, 17, 39, 0.56)] my-4">In this article, I won&apos;t talk about the general concepts of typography, which can be used both in print...</h1>
            <h1 className="text-[14px] leading-[24px] font-normal text-[#9E7F56]">Read full story</h1>
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-[12px] leading-[21.6px] font-semibold text-[rgba(18, 17, 39, 0.48)]">Jun 27, 2020</h1>
            <h1 className="text-[20px] leading-[28px] font-bold text-[#121127]">Guide for designing better</h1>
            <h1 className="text-[14px] leading-[25.2px] font-normal text-[rgba(18, 17, 39, 0.56)] my-4">In this article, I won&apos;t talk about the general concepts of typography, which can be used both in print...</h1>
            <h1 className="text-[14px] leading-[24px] font-normal text-[#9E7F56]">Read full story</h1>
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-[12px] leading-[21.6px] font-semibold text-[rgba(18, 17, 39, 0.48)]">Jun 27, 2020</h1>
            <h1 className="text-[20px] leading-[28px] font-bold text-[#121127]">Guide for designing better</h1>
            <h1 className="text-[14px] leading-[25.2px] font-normal text-[rgba(18, 17, 39, 0.56)] my-4">In this article, I won&apos;t talk about the general concepts of typography, which can be used both in print...</h1>
            <h1 className="text-[14px] leading-[24px] font-normal text-[#9E7F56]">Read full story</h1>
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-[12px] leading-[21.6px] font-semibold text-[rgba(18, 17, 39, 0.48)]">Jun 27, 2020</h1>
            <h1 className="text-[20px] leading-[28px] font-bold text-[#121127]">Guide for designing better</h1>
            <h1 className="text-[14px] leading-[25.2px] font-normal text-[rgba(18, 17, 39, 0.56)] my-4">In this article, I won&apos;t talk about the general concepts of typography, which can be used both in print...</h1>
            <h1 className="text-[14px] leading-[24px] font-normal text-[#9E7F56]">Read full story</h1>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;


