import cover from "../../assets/images/cover.svg";
import profile_image from "../../assets/images/profile.svg";

const Details = () => {
  return (
    <div className="w-full max-w-[346px] rounded-xl bg-white overflow-hidden ">
     
      <div className="h-[120px] w-full">
        <img
          src={cover}
          loading="lazy"
          alt="cover"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex justify-center -mt-8">
        <img
          src={profile_image}
          loading="lazy"
          alt="profile"
          className="w-20 h-20 rounded-full"
        />
      </div>

     
      <div className="text-center px-4 py-4">
        <h2 className="text-lg font-bold text-black">Albert Flores</h2>
        <p className="text-sm text-textPrimary mt-1 leading-tight">
          Senior Product Designer | UI/UX 
          <br/>
          Designer | Graphic Designer | Web...
        </p>
        <p className="text-sm text-textSecondary mt-1">Clinton, Maryland</p>
      </div>
    </div>
  );
};

export default Details;
