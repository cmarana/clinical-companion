import { ReactNode } from "react";
import { ChevronLeft, Search } from "lucide-react";

export default function BoothLayout({
  title,
  children,
  showSearch = false,
}: {
  title?: string;
  children: ReactNode;
  showSearch?: boolean;
}) {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: "#0A1224", color: "white" }}>
      {/* TopBar replicada */}
      <div
        className="flex items-center gap-3 px-5 py-3.5 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "#050B1A" }}
      >
        <ChevronLeft className="w-5 h-5 text-white/60" />
        <div className="flex items-center gap-2 flex-1">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm"
            style={{ background: "#0A6DD9", fontFamily: "Sora, system-ui" }}
          >
            P
          </div>
          <span className="font-semibold text-[15px]" style={{ fontFamily: "Sora, system-ui" }}>
            {title ?? "PULSO"}
          </span>
        </div>
        {showSearch && <Search className="w-5 h-5 text-white/60" />}
      </div>
      <div className="flex-1 overflow-hidden relative">{children}</div>
    </div>
  );
}
