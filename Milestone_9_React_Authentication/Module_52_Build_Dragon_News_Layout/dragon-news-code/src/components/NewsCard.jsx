import { FiShare2 } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
    const {
        title,
        author: { name, published_date, img },
        image_url,
        details,
        rating: { number },
        total_view,
    } = news;

    return (
        <div className="card bg-base-100 shadow-xl w-full max-w-xl mx-auto rounded-lg">
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 p-4 bg-base-200 rounded-lg">
                <div className="flex items-center gap-2">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-sm">{name}</p>
                        <p className="text-xs text-gray-500">{published_date}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <CiBookmark className="text-gray-500 text-xl cursor-pointer" />
                    <FiShare2 className="text-gray-500 text-xl cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <div className="px-4 py-2 my-2">
                <h2 className="font-bold text-lg leading-snug">{title}</h2>
            </div>

            {/* Image */}
            <figure className="px-4">
                <img src={image_url} alt="News" className="rounded-lg" />
            </figure>

            {/* Details */}
            <div className="px-4 pt-2 mt-3">
                <p className="text-sm text-gray-400">
                    {details.slice(0, 120)}...
                    <span className="text-blue-600 font-medium ml-1 cursor-pointer">Read More</span>
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-4 border-t border-gray-600 mt-4">
                <div className="flex items-center gap-1 text-orange-500">
                    {Array.from({ length: 5 }, (_, i) => (
                        <>
                            <AiFillStar key={i} />
                        </>
                    ))}
                    <span className="ml-2 text-gray-800 font-medium">{number}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm gap-1">
                    <BsEye className="text-lg" />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
