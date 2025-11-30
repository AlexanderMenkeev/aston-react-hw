const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
      <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Домашнее задание 2. Александр Менкеев
      </div>
    </footer>
  );
};
export default Footer;
