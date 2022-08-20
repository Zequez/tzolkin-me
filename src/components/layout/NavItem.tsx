import cx from "classnames";

const NavItem: React.FC<{
  to: string;
  current: string;
  children: React.ReactNode;
}> = ({ to, current, children }) => {
  const active = current === to;

  return (
    <a
      href={to}
      className={cx(
        "hover:bg-green-500 px-4 flex items-center justify-center",
        {
          "bg-green-500": active,
        }
      )}
    >
      {children}
    </a>
  );
};

export default NavItem;
