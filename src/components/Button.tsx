interface ButtonProps {
  title: string;
  icon?: string;
}

export default function Button({ title, icon }: ButtonProps) {
  return (
    <button className="flex items-center justify-center px-4 py-2 text-white bg-dark-20 rounded-md">
      {title}
      {icon && <img src={icon} alt={title} className="w-4 h-4 ml-2" />}
    </button>
  );
}
