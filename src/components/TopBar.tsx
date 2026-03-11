import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  className?: string;
  rightContent?: React.ReactNode;
}

export default function TopBar({ title, showBack, className, rightContent }: TopBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const canGoBack = showBack ?? location.pathname !== "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex items-center h-12 px-3 border-b border-border bg-card/95 backdrop-blur-md gap-2",
        className
      )}
    >
      {canGoBack && (
        <button onClick={() => navigate(-1)} className="p-1.5 -ml-1 rounded-md hover:bg-accent transition-colors text-foreground">
          <ArrowLeft size={20} />
        </button>
      )}
      {title && (
        <h1 className="font-heading font-semibold text-sm truncate flex-1">{title}</h1>
      )}
      {!title && <div className="flex-1" />}
      {rightContent}
      <button onClick={toggleTheme} className="p-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground">
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
}
