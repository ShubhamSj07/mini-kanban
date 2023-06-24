import { Button } from "../Button";

export const AdWidget = ({ open }) => {
  return (
    <div
      className={`${
        !open ? "bg-transparent" : "bg-secondary"
      } p-4 mt-9 mx-4 text-center rounded-2xl relative`}
    >
      <img
        src={require("../../assets/sidebar/ad.svg").default}
        alt="Thoughts Time"
        width={75}
        height={75}
        className={`origin-left duration-200 cursor-pointer absolute -top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-0`}
      />
      <div className={`flex flex-col gap-[5px] mt-2 ${!open ? "hidden" : ""}`}>
        <h5 className="text-black text-sm font-medium">Thoughts Time</h5>
        <p className="text-accent text-[11px]">
          We don`t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <Button
          text="Write a message"
          className="border-none bg-white !text-black rounded-md font-medium text-center"
        />
      </div>
    </div>
  );
};
