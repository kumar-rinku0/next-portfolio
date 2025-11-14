import ThemeSwitch from "./theme-switch";

const Footer = () => {
  return (
    <div className="dark:border-primary-dark-4 mx-auto mt-auto w-full max-w-(--breakpoint-sm) px-4 pt-20">
      <div className="py-6 flex justify-between items-center gap-2">
        <div className="text-xs text-slate-900 dark:text-slate-100">
          &copy; {new Date().getFullYear()} Rinku Kumar
        </div>
        <div className="ml-6">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Footer;
