import { useNavigate, useSearchParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { protocols, protocolCategories } from "@/data/protocols";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Protocols() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";
  const [activeCat, setActiveCat] = useState(initialCat);

  const filtered = activeCat === "all" ? protocols : protocols.filter((p) => p.categoryId === activeCat);

  return (
    <>
      <TopBar title="Protocolos" />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4">
        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button
            onClick={() => setActiveCat("all")}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-full text-xs font-heading font-medium transition-colors",
              activeCat === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
            )}
          >
            Todos
          </button>
          {protocolCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={cn(
                "shrink-0 px-3 py-1.5 rounded-full text-xs font-heading font-medium transition-colors",
                activeCat === cat.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-2">
          {filtered.map((p) => (
            <Card
              key={p.id}
              onClick={() => navigate(`/protocols/${p.id}`)}
              className="cursor-pointer hover:shadow-sm active:scale-[0.99] transition-all"
            >
              <CardContent className="flex items-center justify-between p-3.5">
                <div>
                  <p className="font-heading font-semibold text-sm">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                </div>
                <ChevronRight size={16} className="text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
