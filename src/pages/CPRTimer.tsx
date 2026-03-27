import { useState, useEffect, useRef, useCallback } from "react";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, RotateCcw, Pill, Heart, Zap, Clock } from "lucide-react";

interface DrugLog {
  drug: string;
  time: string;
  cycle: number;
}

export default function CPRTimer() {
  const { subscription } = useAuth();
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [cycleTime, setCycleTime] = useState(0);
  const [cycle, setCycle] = useState(1);
  const [rhythm, setRhythm] = useState<"shockable" | "non-shockable" | null>(null);
  const [drugLogs, setDrugLogs] = useState<DrugLog[]>([]);
  const [lastEpi, setLastEpi] = useState<number | null>(null);
  const [lastAmio, setLastAmio] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef = useRef<AudioContext | null>(null);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const beep = useCallback(() => {
    try {
      if (!audioRef.current) audioRef.current = new AudioContext();
      const ctx = audioRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 880;
      gain.gain.value = 0.3;
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {}
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setElapsed(p => p + 1);
        setCycleTime(p => {
          const next = p + 1;
          if (next >= 120) {
            beep();
            setCycle(c => c + 1);
            return 0;
          }
          if (next === 110) beep();
          return next;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running, beep]);

  const logDrug = (drug: string) => {
    const time = formatTime(elapsed);
    setDrugLogs(p => [{ drug, time, cycle }, ...p]);
    if (drug === "Adrenalina") setLastEpi(elapsed);
    if (drug.startsWith("Amiodarona")) setLastAmio(elapsed);
  };

  const reset = () => {
    setRunning(false);
    setElapsed(0);
    setCycleTime(0);
    setCycle(1);
    setRhythm(null);
    setDrugLogs([]);
    setLastEpi(null);
    setLastAmio(null);
  };

  const epiDue = lastEpi !== null ? Math.max(0, 180 - (elapsed - lastEpi)) : 0;
  const cycleProgress = (cycleTime / 120) * 100;

  if (!subscription.subscribed) {
    return <><TopBar title="Timer PCR" /><PremiumGate /></>;
  }

  return (
    <>
      <TopBar title="Timer PCR (ACLS)" />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4 pb-24">
        {/* Main timer */}
        <Card className="border-destructive/30">
          <CardContent className="p-6 text-center space-y-3">
            <p className="text-xs text-muted-foreground font-heading">Tempo total de PCR</p>
            <p className="font-heading text-5xl font-bold tracking-tight tabular-nums">{formatTime(elapsed)}</p>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Ciclo {cycle}</span>
                <span>{formatTime(cycleTime)} / 02:00</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${cycleTime >= 110 ? "bg-destructive animate-pulse" : "bg-primary"}`}
                  style={{ width: `${cycleProgress}%` }}
                />
              </div>
              {cycleTime >= 110 && <p className="text-xs text-destructive font-semibold animate-pulse">⚠ Preparar checagem de ritmo!</p>}
            </div>

            <div className="flex gap-2 justify-center">
              <Button size="lg" variant={running ? "outline" : "default"} onClick={() => setRunning(!running)} className="gap-2">
                {running ? <><Pause size={18} /> Pausar</> : <><Play size={18} /> {elapsed > 0 ? "Retomar" : "Iniciar"}</>}
              </Button>
              <Button size="lg" variant="outline" onClick={reset} className="gap-2"><RotateCcw size={18} /> Zerar</Button>
            </div>
          </CardContent>
        </Card>

        {/* Rhythm selection */}
        <div className="space-y-2">
          <p className="font-heading text-xs font-semibold text-muted-foreground">RITMO IDENTIFICADO</p>
          <div className="grid grid-cols-2 gap-2">
            <Button variant={rhythm === "shockable" ? "default" : "outline"} onClick={() => setRhythm("shockable")} className="gap-2 h-12">
              <Zap size={16} /> FV / TV sem pulso
            </Button>
            <Button variant={rhythm === "non-shockable" ? "default" : "outline"} onClick={() => setRhythm("non-shockable")} className="gap-2 h-12">
              <Heart size={16} /> Assistolia / AESP
            </Button>
          </div>
        </div>

        {/* Drug buttons */}
        <div className="space-y-2">
          <p className="font-heading text-xs font-semibold text-muted-foreground">MEDICAÇÕES</p>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" onClick={() => logDrug("Adrenalina")} className="gap-2 h-11 border-red-500/30 text-red-600 hover:bg-red-500/10">
              <Pill size={14} /> Adrenalina 1mg
            </Button>
            <Button variant="outline" onClick={() => logDrug("Amiodarona 300mg")} disabled={rhythm !== "shockable"} className="gap-2 h-11 border-violet-500/30 text-violet-600 hover:bg-violet-500/10">
              <Pill size={14} /> Amiodarona 300mg
            </Button>
            <Button variant="outline" onClick={() => logDrug("Amiodarona 150mg")} disabled={rhythm !== "shockable"} className="gap-2 h-11 border-violet-500/30 text-violet-600 hover:bg-violet-500/10">
              <Pill size={14} /> Amiodarona 150mg
            </Button>
            <Button variant="outline" onClick={() => logDrug("Choque aplicado")} disabled={rhythm !== "shockable"} className="gap-2 h-11 border-yellow-500/30 text-yellow-600 hover:bg-yellow-500/10">
              <Zap size={14} /> Choque (200J)
            </Button>
          </div>
          {lastEpi !== null && epiDue > 0 && (
            <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> Próxima adrenalina em {formatTime(epiDue)}</p>
          )}
          {lastEpi !== null && epiDue <= 0 && (
            <p className="text-xs text-destructive font-semibold animate-pulse">⚠ Adrenalina disponível — considerar aplicar!</p>
          )}
        </div>

        {/* ACLS quick reference */}
        <Card>
          <CardContent className="p-3 space-y-1.5">
            <p className="font-heading text-xs font-semibold">Lembrete ACLS</p>
            <ul className="text-[10px] text-muted-foreground space-y-0.5">
              <li>• Compressões 100-120/min, profundidade 5-6cm</li>
              <li>• Minimizar interrupções (&lt;10s para checagem)</li>
              <li>• Adrenalina 1mg EV a cada 3-5 min</li>
              <li>• FV/TV: choque → RCP 2min → checar ritmo</li>
              <li>• Amiodarona: 300mg (1ª) → 150mg (2ª) — só em FV/TV</li>
              <li>• Assistolia/AESP: NÃO chocar, tratar causa (5H e 5T)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Drug log */}
        {drugLogs.length > 0 && (
          <div className="space-y-2">
            <p className="font-heading text-xs font-semibold text-muted-foreground">REGISTRO DE MEDICAÇÕES</p>
            <div className="space-y-1">
              {drugLogs.map((log, i) => (
                <div key={i} className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-[10px]">Ciclo {log.cycle}</Badge>
                    <span className="text-xs font-medium">{log.drug}</span>
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
