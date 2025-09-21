
const Hero = () => {
    return (
            <section className="">
	<div className={`container mx-auto flex flex-col items-center px-2 sm:px-4 py-8 text-center border-2 border-gray-200 my-3 rounded-xl `}>
		<div className="md:w-[85%] mx-auto space-y-8 sm:space-y-6 p-1 sm:p-3">
            <h1 className="text-3xl/normal w-full md:w-10/12 mx-auto font-bold leading-none sm:text-5xl/snug">
            Dependable Care, Backed by Trusted Professionals.
        </h1>
		<p className="sm:px-10 mb-3 md:w-10/12 mx-auto">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
		<div className="flex flex-row gap-2 lg:w-[75%] mx-auto my-6">
			<input type="text" placeholder="Search any doctor..." className="w-3/5 p-3 sm:w-2/3 border border-gray-400 rounded-full px-5" />
			<button type="button" className="w-2/5 p-2 rounded-full sm:w-1/4 bg-[#16da16da] font-bold text-lg">Search Now</button>
		</div>
        {/* image */}
        <div className="flex flex-col md:flex-row gap-5 justify-center my-5 md:my-10">

               <img className="w-full  rounded-xl object-cover h-100" src="/images/bannerImg-1.png" alt="" /> 
               <img className="w-full rounded-xl object-cover h-100" src="/images/bannerImg-2.png" alt="" /> 

        </div>
        </div>
	</div>
</section>

    );
};

export default Hero;