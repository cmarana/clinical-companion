import { useTheme } from "@/contexts/ThemeContext";
import { Type } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FontSizeSelector() {
  const { fontSize, setFontSize, fontSizeOptions } = useTheme();

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Type size={16} className="text-muted-foreground" />
        <span className="text-xs font-semibold">Tamanho da fonte</span>
      </div>
      <div className="flex gap-1.5">
        {fontSizeOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFontSize(opt.value)}
            className={cn(
              "flex-1 py-2 rounded-xl text-xs font-medium transition-colors",
              fontSize === opt.value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            )}
          >
            <span style={{ fontSize: opt.value === "small" ? 11 : opt.value === "normal" ? 13 : opt.value === "large" ? 15 : 17 }}>
              A
            </span>
            <span className="block text-[9px] mt-0.5 opacity-70">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
