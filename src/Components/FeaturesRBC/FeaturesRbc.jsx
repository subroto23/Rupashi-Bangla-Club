import { BsMortarboardFill } from "react-icons/bs";
import { MdOutlineSmokeFree } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
const FeaturesRbc = () => {
  return (
    <div className=" md:my-8">
      <section className="grid grid-cols-1 gap-20 px-4 py-24 mx-auto max-w-7xl lg:px-16 xl:px-24 md:grid-cols-2 lg:grid-cols-3 ">
        <div data-aos="flip-left">
          <BsMortarboardFill className="w-12 h-12 mb-4 text-purple-700" />
          <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
            শিক্ষা সহয়তা প্রদান
          </h3>
          <p className="text-base leading-relaxed text-justify text-gray-600">
            আমরা সমাজের অসচ্ছল মেধাবী শিক্ষার্থীদের শিক্ষা প্রদান করি এবং তাদের
            প্রতিবছর শিক্ষার বিভিন্ন উপকরন সামগ্রী প্রদান করি।আমাদের লক্ষ্য আমরা
            সমাজের প্রতিটা মানুষের মধ্যে শিক্ষার আলো ছড়িয়ে দেওয়া।
          </p>
        </div>
        <div data-aos="flip-left">
          <MdOutlineSmokeFree className="w-12 h-12 mb-4 text-purple-700" />
          <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
            মাদকমুক্ত সমাজ গড়ার অঙ্গীকার
          </h3>
          <p className="text-base leading-relaxed text-gray-600">
            আমরা সুস্থ সুন্দর এবং আলোকিত মানুষ তৈরির জন্য মাদকমুক্ত সমজা গড়ার
            লক্ষ্য নিয়ে এগিয়ে চলেছি।আমরা সমাজের শিশু,কিশোর,তরুনদের মাদকের ভয়বহতা
            সম্পর্কে পরামর্শ দিয়ে থাকি।
          </p>
        </div>
        <div data-aos="flip-left">
          <GiHealthNormal className="w-12 h-12 mb-4 text-purple-700" />
          <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
            ফ্রী চিকিৎসা সেবা
          </h3>
          <p className="text-base leading-relaxed text-gray-600">
            ফ্রী মেডিকেল ক্যাম্পের মাধ্যমে আমরা চিকিৎসা সেবা প্রদান করে
            থাকি।আমরা বিনামূল্য রক্তদান কর্মসূচির মাধ্যমে রক্তদান করে সমাজের
            অসুস্থ রক্ত প্রয়োজনীয় রোগীর রক্ত দান করি।
          </p>
        </div>
      </section>
    </div>
  );
};

export default FeaturesRbc;
