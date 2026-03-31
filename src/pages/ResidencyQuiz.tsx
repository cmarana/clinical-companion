import { useState, useMemo } from "react";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { residencyQuestions, bancas, years, categories, type ResidencyQuestion } from "@/data/residencyQuestions";
import { Search, ChevronRight, CheckCircle2, XCircle, RotateCcw, Filter, BookOpen } from "lucide-react";

export default function ResidencyQuiz() {
  const [filterBanca, setFilterBanca] = useState<string>("");
  const [filterYear, setFilterYear] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("");
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState<"browse" | "quiz">("browse");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let q = residencyQuestions;
    if (filterBanca) q = q.filter(x => x.banca === filterBanca);
    if (filterYear) q = q.filter(x => x.year === filterYear);
    if (filterCategory) q = q.filter(x => x.category === filterCategory);
    if (search.length >= 2) {
      const s = search.toLowerCase();
      q = q.filter(x => x.question.toLowerCase().includes(s) || x.theme.toLowerCase().includes(s) || x.category.toLowerCase().includes(s));
    }
    return q;
  }, [filterBanca, filterYear, filterCategory, search]);

  const startQuiz = () => {
    setMode("quiz");
    setCurrentIdx(0);
    setSelected(null);
    setShowExplanation(false);
    setScore({ correct: 0, total: 0 });
  };

  const currentQ = filtered[currentIdx];

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    setScore(prev => ({
      correct: prev.correct + (idx === currentQ.correctIndex ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const nextQuestion = () => {
    if (currentIdx < filtered.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const resetFilters = () => {
    setFilterBanca("");
    setFilterYear(null);
    setFilterCategory("");
    setSearch("");
  };

  if (mode === "quiz" && currentQ) {
    const progress = ((currentIdx + 1) / filtered.length) * 100;
    return (
      <>
        <TopBar title="Questões de Residência" />
        <div className="px-4 py-4 max-w-lg mx-auto space-y-4 pb-24">
          <div className="flex items-center justify-between">
            <button onClick={() => setMode("browse")} className="text-xs text-primary hover:underline">← Voltar</button>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-[10px]">{currentIdx + 1}/{filtered.length}</Badge>
              <Badge variant="outline" className="text-[10px]">{score.correct}/{score.total} ✓</Badge>
            </div>
          </div>

          <div className="w-full bg-muted rounded-full h-1.5">
            <div className="bg-primary h-1.5 rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>

          <div className="flex flex-wrap gap-1.5">
            <Badge className="text-[10px]">{currentQ.banca} {currentQ.year}</Badge>
            <Badge variant="secondary" className="text-[10px]">{currentQ.category}</Badge>
            <Badge variant="outline" className="text-[10px]">{currentQ.theme}</Badge>
          </div>

          <Card>
            <CardContent className="p-4">
              <p className="text-sm font-medium leading-relaxed">{currentQ.question}</p>
            </CardContent>
          </Card>

          <div className="space-y-2">
            {currentQ.options.map((opt, i) => {
              let cls = "border-border hover:bg-accent/50";
              if (selected !== null) {
                if (i === currentQ.correctIndex) cls = "border-green-500 bg-green-500/10";
                else if (i === selected) cls = "border-red-500 bg-red-500/10";
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${cls}`}
                >
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-xs text-muted-foreground mt-0.5">{String.fromCharCode(65 + i)}</span>
                    <span className="text-sm">{opt}</span>
                    {selected !== null && i === currentQ.correctIndex && <CheckCircle2 size={16} className="ml-auto text-green-500 shrink-0" />}
                    {selected !== null && i === selected && i !== currentQ.correctIndex && <XCircle size={16} className="ml-auto text-red-500 shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-4">
                <p className="text-xs font-semibold text-primary mb-1">Comentário</p>
                <p className="text-xs leading-relaxed text-foreground">{currentQ.explanation}</p>
              </CardContent>
            </Card>
          )}

          {selected !== null && currentIdx < filtered.length - 1 && (
            <Button onClick={nextQuestion} className="w-full">
              Próxima questão <ChevronRight size={16} />
            </Button>
          )}

          {selected !== null && currentIdx >= filtered.length - 1 && (
            <Card className="border-primary/30">
              <CardContent className="p-4 text-center space-y-2">
                <p className="font-heading font-bold text-lg">{score.correct}/{score.total} acertos</p>
                <p className="text-xs text-muted-foreground">{Math.round((score.correct / score.total) * 100)}% de aproveitamento</p>
                <Button onClick={startQuiz} variant="outline" size="sm">
                  <RotateCcw size={14} className="mr-1" /> Refazer
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar title="Questões de Residência" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl mx-auto space-y-4 pb-24">
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{filtered.length} questões disponíveis</p>
          <button onClick={() => setShowFilters(p => !p)} className="flex items-center gap-1 text-xs text-primary">
            <Filter size={12} /> Filtros
          </button>
        </div>

        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Buscar questão ou tema..." value={search} onChange={e => setSearch(e.target.value)} className="pl-8 h-10 text-sm rounded-xl" />
        </div>

        {showFilters && (
          <Card>
            <CardContent className="p-3 space-y-3">
              <div>
                <p className="text-[10px] font-semibold text-muted-foreground mb-1.5">BANCA</p>
                <div className="flex flex-wrap gap-1.5">
                  {bancas.map(b => (
                    <button key={b} onClick={() => setFilterBanca(filterBanca === b ? "" : b)}
                      className={`text-[10px] px-2 py-1 rounded-full border transition-all ${filterBanca === b ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-accent"}`}
                    >{b}</button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-muted-foreground mb-1.5">ANO</p>
                <div className="flex flex-wrap gap-1.5">
                  {years.map(y => (
                    <button key={y} onClick={() => setFilterYear(filterYear === y ? null : y)}
                      className={`text-[10px] px-2 py-1 rounded-full border transition-all ${filterYear === y ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-accent"}`}
                    >{y}</button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-muted-foreground mb-1.5">ESPECIALIDADE</p>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map(c => (
                    <button key={c} onClick={() => setFilterCategory(filterCategory === c ? "" : c)}
                      className={`text-[10px] px-2 py-1 rounded-full border transition-all ${filterCategory === c ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-accent"}`}
                    >{c}</button>
                  ))}
                </div>
              </div>
              {(filterBanca || filterYear || filterCategory) && (
                <button onClick={resetFilters} className="text-[10px] text-primary hover:underline">Limpar filtros</button>
              )}
            </CardContent>
          </Card>
        )}

        <Button onClick={startQuiz} className="w-full" disabled={filtered.length === 0}>
          <BookOpen size={16} className="mr-2" /> Iniciar simulado ({filtered.length} questões)
        </Button>

        <div className="space-y-1.5">
          {filtered.map(q => (
            <Card key={q.id} className="cursor-pointer hover:shadow-sm" onClick={startQuiz}>
              <CardContent className="p-3">
                <div className="flex items-start gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium truncate">{q.question.slice(0, 80)}...</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Badge variant="outline" className="text-[9px]">{q.banca} {q.year}</Badge>
                      <Badge variant="secondary" className="text-[9px]">{q.category}</Badge>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-muted-foreground shrink-0 mt-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
