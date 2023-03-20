const SidePanelSubLink: React.FC<any> = (props) => {
  return (
    <div className={` flex justify-start items-center gap-2 `}>
      <div>{props.icon}</div>
      <div className="w-auto z-60" style={{ position: "relative" }}>
        {props.name}
      </div>{" "}
    </div>
  );
};

export default SidePanelSubLink;
