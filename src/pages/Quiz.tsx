import { useState, useMemo } from "react";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { quizQuestions } from "@/data/quizQuestions";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";

export default function Quiz() {
  const { subscription } = useAuth();
  const [mode, setMode] = useState<"menu" | "playing" | "result">("menu");
  const [category, setCategory] = useState<string>("all");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title="Quiz Interativo" />
        <PremiumGate />
      </>
    );
  }

  const categories = useMemo(() => {
    const cats = new Set(quizQuestions.map((q) => q.category));
    return ["all", ...Array.from(cats)];
  }, []);

  const questions = useMemo(() => {
    const pool = category === "all" ? quizQuestions : quizQuestions.filter((q) => q.category === category);
    return [...pool].sort(() => Math.random() - 0.5);
  }, [category, mode]);

  const current = questions[currentIdx];

  const startQuiz = (cat: string) => {
    setCategory(cat);
    setCurrentIdx(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setMode("playing");
  };

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === current.correctIndex) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (currentIdx + 1 >= questions.length) {
      setMode("result");
    } else {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  if (mode === "menu") {
    return (
      <>
        <TopBar title="Quiz Interativo" />
        <div className="px-4 py-5 max-w-lg mx-auto space-y-4">
          <p className="text-sm text-muted-foreground">Escolha uma categoria para começar:</p>
          <div className="space-y-2">
            {categories.map((cat) => (
              <Card key={cat} onClick={() => startQuiz(cat)} className="cursor-pointer hover:shadow-sm active:scale-[0.99] transition-all">
                <CardContent className="p-3.5 flex items-center justify-between">
                  <span className="font-heading font-semibold text-sm">{cat === "all" ? "Todas as Categorias" : cat}</span>
                  <span className="text-xs text-muted-foreground">
                    {(cat === "all" ? quizQuestions : quizQuestions.filter((q) => q.category === cat)).length} questões
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (mode === "result") {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <>
        <TopBar title="Resultado" />
        <div className="px-4 py-10 max-w-lg mx-auto text-center space-y-6">
          <Trophy size={48} className="mx-auto text-warning" />
          <div>
            <p className="font-heading text-3xl font-bold">{pct}%</p>
            <p className="text-muted-foreground text-sm mt-1">{score} de {questions.length} corretas</p>
          </div>
          <Button onClick={() => setMode("menu")} className="gap-2">
            <RotateCcw size={16} /> Novo Quiz
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar title={`Questão ${currentIdx + 1}/${questions.length}`} />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4">
        <div className="w-full bg-secondary rounded-full h-1.5">
          <div className="bg-primary h-1.5 rounded-full transition-all" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
        </div>

        <p className="text-xs text-muted-foreground font-heading">{current.category}</p>
        <p className="font-heading font-semibold text-base">{current.question}</p>

        <div className="space-y-2">
          {current.options.map((opt, i) => {
            let variant = "bg-card border";
            if (answered) {
              if (i === current.correctIndex) variant = "bg-success/10 border-success text-success-foreground border";
              else if (i === selected) variant = "bg-destructive-surface border-destructive text-destructive border";
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={cn("w-full text-left p-3 rounded-lg text-sm transition-all flex items-center gap-2", variant)}
              >
                {answered && i === current.correctIndex && <CheckCircle size={16} className="text-success shrink-0" />}
                {answered && i === selected && i !== current.correctIndex && <XCircle size={16} className="text-destructive shrink-0" />}
                {opt}
              </button>
            );
          })}
        </div>

        {answered && (
          <Card className="border-primary/30 bg-accent/50">
            <CardContent className="p-3">
              <p className="text-xs font-heading font-semibold mb-1">Explicação:</p>
              <p className="text-sm leading-relaxed">{current.explanation}</p>
            </CardContent>
          </Card>
        )}

        {answered && (
          <Button onClick={nextQuestion} className="w-full">
            {currentIdx + 1 >= questions.length ? "Ver Resultado" : "Próxima Questão"}
          </Button>
        )}
      </div>
    </>
  );
}
