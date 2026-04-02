import { useState, useEffect, useRef, useCallback } from "react";
import { Clock, Play, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { safeLocalStorage } from "@/lib/safeStorage";

export default function DutyShiftTimer() {
  const [shiftStart, setShiftStart] = useState<number | null>(() => {
    const saved = safeLocalStorage.getItem("shift_start");
    return saved ? Number(saved) : null;
  });
  const [shiftElapsed, setShiftElapsed] = useState(0);
  const shiftInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const startShift = useCallback(() => {
    const now = Date.now();
    setShiftStart(now);
    safeLocalStorage.setItem("shift_start", String(now));
  }, []);

  const endShift = useCallback(() => {
    setShiftStart(null);
    setShiftElapsed(0);
    safeLocalStorage.removeItem("shift_start");
  }, []);

  useEffect(() => {
    if (shiftStart) {
      const tick = () => setShiftElapsed(Math.floor((Date.now() - shiftStart) / 1000));
      tick();
      shiftInterval.current = setInterval(tick, 1000);
      return () => { if (shiftInterval.current) clearInterval(shiftInterval.current); };
    }
  }, [shiftStart]);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="rounded-2xl border bg-card p-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Clock size={20} className="text-primary" />
      </div>
      <div className="flex-1">
        <p className="font-heading font-semibold text-xs text-muted-foreground uppercase tracking-wider">Cronômetro de Turno</p>
        {shiftStart ? (
          <p className="font-heading text-2xl font-bold tabular-nums tracking-tight">{formatTime(shiftElapsed)}</p>
        ) : (
          <p className="text-sm text-muted-foreground">Nenhum plantão ativo</p>
        )}
      </div>
      {shiftStart ? (
        <Button variant="outline" size="sm" onClick={endShift} className="gap-1.5 border-destructive/30 text-destructive hover:bg-destructive/10">
          <Square size={14} /> Encerrar
        </Button>
      ) : (
        <Button size="sm" onClick={startShift} className="gap-1.5">
          <Play size={14} /> Iniciar
        </Button>
      )}
    </div>
  );
}
