import {
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { useGetContactsQuery } from "../../Redux/ApiCalls/contactSlice";
import SkeletonSocial from "../Skeletons/SkeletonSocial";

const SocialMedia = () => {
  const { data, isLoading } = useGetContactsQuery();
  return (
    <div className="bg-white p-5 rounded">
      <h1 className="uppercase font-bold text-xl mb-5">social media</h1>

      {isLoading && (
        <div>
          <SkeletonSocial />
        </div>
      )}

      <div className="social grid grid-cols-2 gap-3">
        {data?.data?.map((social, index) => {
          return (
            <a
              key={index}
              href={social?.attributes?.link}
              className={`bg-gradient-to-r ${
                social?.attributes?.name === "Facebook"
                  ? "from-[#00c6ff] to-[#0072ff]"
                  : social?.attributes?.name === "Youtube"
                  ? "from-[#e52d27] to-[#b31217]"
                  : social?.attributes?.name === "LinkedIn"
                  ? "from-[#000C40] to-[#607D8B]"
                  : social?.attributes?.name === "Whatsapp"
                  ? "from-[#1D976C] to-[#93F9B9]"
                  : null
              } rounded text-white flex items-center justify-center gap-1.5 p-2`}
            >
              {social?.attributes?.name === "Facebook" ? (
                <FaFacebook />
              ) : social?.attributes?.name === "Youtube" ? (
                <FaYoutube />
              ) : social?.attributes?.name === "LinkedIn" ? (
                <FaLinkedinIn />
              ) : social?.attributes?.name === "Whatsapp" ? (
                <FaWhatsapp />
              ) : null}
              {social?.attributes?.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
