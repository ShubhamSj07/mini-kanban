export const Button = ({
  prefix = null,
  suffix = null,
  text = null,
  className,
}) => {
  let classes = ` w-fit text-sm py-2 px-4 border border-accent text-accent font-medium rounded-md flex gap-1 items-center`;

  return (
    <button className={className ? className + classes : classes}>
      {prefix && (
        <span>
          <img src={prefix} alt="Asset" width={16} height={16} />
        </span>
      )}
      <span>{text}</span>
      {suffix && (
        <span className="ml-1">
          <img src={suffix} alt="Asset" width={16} height={16} />
        </span>
      )}
    </button>
  );
};
