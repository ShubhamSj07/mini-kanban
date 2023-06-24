import CommentIcon from "../../assets/comment.svg";
import FileIcon from "../../assets/file.svg";

export const Card = ({
  priority,
  title,
  desc,
  images = null,
  comments = 0,
  files = 0,
  avatars,
  isCardDragged,
  onDragStart,
  onDragEnd,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 p-4 rounded-2xl bg-white mb-4 cursor-pointer ${
        isCardDragged
          ? `tilt-right-animation border border-dotted border-blue`
          : ""
      }`}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <div className="flex items-center justify-between">
        <div>
          <span
            className={`${
              priority === "High"
                ? "bg-[#FBF1F2] text-[#D8727D]"
                : priority === "Low"
                ? "bg-[#F9EEE3] text-[#D58D49]"
                : "bg-[#E6F3EB] text-[#68B266]"
            } py-1 px-2 rounded-md text-xs font-medium`}
          >
            {priority}
          </span>
        </div>
        <div>
          <span>...</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="text-xs text-accent">{desc}</p>
      <div className="flex justify-around items-center gap-2">
        {images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Card Asset"
            className="mb-2 max-w-[120px] lg:max-w-full"
          />
        ))}
      </div>
      <div className="flex md:flex-col md:gap-4 justify-between md:items-start lg:flex-row lg:items-center">
        <div className="flex">
          {avatars?.map((avatar, index) => (
            <img
              key={avatar}
              src={avatar}
              alt={avatar}
              width={28}
              height={28}
              className={`${index === 0 ? "" : "-ml-2"} cursor-pointer`}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="inline-flex gap-2">
            <img
              src={CommentIcon}
              alt="Comments"
              className="cursor-pointer w-3 h-3 lg:w-4 lg:h-4"
            />
            <span className="text-accent text-xs lg:text-sm font-medium md:whitespace-nowrap">
              {comments} comments
            </span>
          </div>
          <div className="inline-flex gap-2">
            <img
              src={FileIcon}
              alt="Files"
              className="cursor-pointer w-3 h-3 lg:w-4 lg:h-4"
            />
            <span className="text-accent text-xs lg:text-sm font-medium md:whitespace-nowrap">
              {files} files
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
