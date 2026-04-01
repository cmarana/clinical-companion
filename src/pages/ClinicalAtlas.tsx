import { useState } from "react";
import TopBar from "@/components/TopBar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { atlasEntries, atlasCategories, type AtlasCategory, type AtlasEntry } from "@/data/clinicalAtlas";
import { Activity, Scan, ScanLine, Eye, Microscope, Search, ChevronDown, ChevronUp, Lightbulb, AlertTriangle, Stethoscope, BookOpen, ImageIcon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const buildRealImageUrl = (entry: AtlasEntry): string => {
  const searchTermMap: Record<string, string> = {
    "ecg-iam-supra": "STEMI ECG 12 lead",
    "ecg-brd": "right bundle branch block ECG",
    "ecg-bre": "left bundle branch block ECG",
    "ecg-fa": "atrial fibrillation ECG",
    "ecg-tv": "ventricular tachycardia ECG",
    "ecg-bavt": "third degree AV block ECG",
    "ecg-brugada": "Brugada syndrome ECG",
    "ecg-wellens": "Wellens syndrome ECG",
    "ecg-wpw": "WPW syndrome ECG",
    "ecg-hiperk": "hyperkalemia ECG peaked T waves",
    "ecg-qt-longo": "long QT syndrome ECG",
    "ecg-flutter": "atrial flutter ECG sawtooth",
    "derm-psoriase": "psoriasis vulgaris dermatology",
    "derm-melanoma": "melanoma ABCDE dermoscopy",
    "derm-herpes-zoster": "herpes zoster dermatomal",
    "derm-herpes-zoster-torax": "herpes zoster thoracic dermatome",
    "derm-sjs": "Stevens-Johnson syndrome skin",
    "derm-celulite": "cellulitis erysipelas skin",
    "derm-escabiose": "scabies burrow dermatology",
    "derm-urticaria": "urticaria wheals dermatology",
    "rad-pneumotorax": "pneumothorax chest X-ray",
    "rad-pneumonia": "lobar pneumonia chest X-ray",
    "rad-derrame-pleural": "pleural effusion chest X-ray",
    "rad-colles": "Colles fracture X-ray",
    "rad-hematoma-epidural": "epidural hematoma CT scan",
    "rad-hematoma-subdural": "subdural hematoma CT scan",
    "rad-avc-isquemico": "ischemic stroke CT scan",
    "rad-edema-pulmonar": "pulmonary edema chest X-ray",
    "oft-papiledema": "papilledema fundoscopy",
    "oft-retinopatia-diabetica": "diabetic retinopathy fundoscopy",
    "oft-oclusao-arteria": "central retinal artery occlusion fundus",
    "oft-glaucoma": "glaucoma optic disc cupping fundoscopy",
    "lab-falciforme": "sickle cell blood smear",
    "lab-blastos": "acute leukemia blasts blood smear",
    "lab-esquizocitos": "schistocytes blood smear TTP",
  };
  const term = searchTermMap[entry.id] || `${entry.title} medical image`;
  return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(term + " site:radiopaedia.org OR site:dermnet.com OR site:litfl.com")}`;
};

// Image map for atlas entries
import ecgStemi from "@/assets/atlas/ecg-stemi.jpg";
import ecgAfib from "@/assets/atlas/ecg-afib.jpg";
import ecgVt from "@/assets/atlas/ecg-vt.jpg";
import ecgBavt from "@/assets/atlas/ecg-bavt.jpg";
import dermPsoriasis from "@/assets/atlas/derm-psoriasis.jpg";
import dermMelanoma from "@/assets/atlas/derm-melanoma.jpg";
import dermHerpesZoster from "@/assets/atlas/derm-herpes-zoster.jpg";
import dermSjs from "@/assets/atlas/derm-sjs.jpg";
import xrPneumothorax from "@/assets/atlas/xr-pneumothorax.jpg";
import eyePapilledema from "@/assets/atlas/eye-papilledema.jpg";
import eyeDiabeticRetinopathy from "@/assets/atlas/eye-diabetic-retinopathy.jpg";
import labSickleCell from "@/assets/atlas/lab-sickle-cell.jpg";
import ctEpidural from "@/assets/atlas/ct-epidural.jpg";

const atlasImages: Record<string, string> = {
  "ecg-iam-supra": ecgStemi,
  "ecg-fa": ecgAfib,
  "ecg-tv": ecgVt,
  "ecg-bavt": ecgBavt,
  "derm-psoriase": dermPsoriasis,
  "derm-melanoma": dermMelanoma,
  "derm-herpes-zoster": dermHerpesZoster,
  "derm-herpes-zoster-torax": dermHerpesZoster,
  "derm-sjs": dermSjs,
  "rad-pneumotorax": xrPneumothorax,
  "oft-papiledema": eyePapilledema,
  "oft-retinopatia-diabetica": eyeDiabeticRetinopathy,
  "lab-falciforme": labSickleCell,
  "rad-hematoma-epidural": ctEpidural,
};

const iconMap: Record<string, React.ElementType> = {
  Activity, Scan, ScanLine, Eye, Microscope,
};

export default function ClinicalAtlas() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<AtlasCategory | "all">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = atlasEntries.filter(e => {
    const matchCat = activeCategory === "all" || e.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || e.title.toLowerCase().includes(q) || e.tags.some(t => t.includes(q)) || e.subcategory.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const grouped = filtered.reduce<Record<string, AtlasEntry[]>>((acc, e) => {
    const key = e.subcategory;
    if (!acc[key]) acc[key] = [];
    acc[key].push(e);
    return acc;
  }, {});

  return (
    <>
      <TopBar title="Atlas Clínico" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto pb-24">
        <div className="mb-4">
          <h1 className="text-xl font-bold font-heading">Atlas de Imagens Clínicas</h1>
          <p className="text-xs text-muted-foreground mt-1">
            Reconhecimento de padrões: ECG, Dermatologia, Radiologia e mais
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <Input
            placeholder="Buscar padrão, achado ou diagnóstico..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9 rounded-2xl bg-card border-0 shadow-sm h-10"
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-5 pb-1">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
              activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
            )}
          >
            Todos ({atlasEntries.length})
          </button>
          {atlasCategories.map(cat => {
            const Icon = iconMap[cat.icon] || Activity;
            const count = atlasEntries.filter(e => e.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5",
                  activeCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                )}
              >
                <Icon size={12} />
                {cat.title} ({count})
              </button>
            );
          })}
        </div>

        {/* Counter */}
        <p className="text-xs text-muted-foreground mb-3">{filtered.length} padrões encontrados</p>

        {/* Grouped entries */}
        {Object.entries(grouped).map(([subcategory, entries]) => (
          <div key={subcategory} className="mb-6">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
              {subcategory}
            </h2>
            <div className="space-y-3">
              {entries.map(entry => {
                const isExpanded = expandedId === entry.id;
                const catInfo = atlasCategories.find(c => c.id === entry.category);
                return (
                  <div
                    key={entry.id}
                    className="bg-card rounded-2xl shadow-sm overflow-hidden transition-all"
                  >
                    {/* Header */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                      className="w-full flex items-center justify-between p-4 text-left gap-3"
                    >
                      {atlasImages[entry.id] && !isExpanded && (
                        <img
                          src={atlasImages[entry.id]}
                          alt=""
                          className="w-14 h-14 rounded-lg object-cover shrink-0"
                          loading="lazy"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className={cn("text-[10px] px-1.5 py-0", catInfo?.color)}>
                            {catInfo?.title}
                          </Badge>
                          {atlasImages[entry.id] && (
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                              <ImageIcon size={8} className="mr-0.5" /> Ilustração
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-sm leading-tight">{entry.title}</h3>
                      </div>
                      {isExpanded ? <ChevronUp size={16} className="text-muted-foreground shrink-0" /> : <ChevronDown size={16} className="text-muted-foreground shrink-0" />}
                    </button>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div className="px-4 pb-4 space-y-4">
                        {/* Image */}
                        {atlasImages[entry.id] && (
                          <div className="rounded-xl overflow-hidden border border-border">
                            <img
                              src={atlasImages[entry.id]}
                              alt={entry.title}
                              loading="lazy"
                              width={800}
                              height={512}
                              className="w-full h-auto object-cover"
                            />
                            <div className="px-3 py-1.5 bg-muted/50 flex items-center gap-1.5">
                              <ImageIcon size={10} className="text-muted-foreground" />
                              <span className="text-[10px] text-muted-foreground italic">Ilustração didática gerada por IA — não substitui achados reais</span>
                            </div>
                          </div>
                        )}

                        {/* Image description */}
                        <div className="bg-muted/50 rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpen size={14} className="text-primary" />
                            <span className="text-xs font-semibold text-primary">Descrição da Imagem</span>
                          </div>
                          <p className="text-sm leading-relaxed">{entry.image_description}</p>
                        </div>

                        {/* Findings */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Stethoscope size={14} className="text-blue-500" />
                            <span className="text-xs font-semibold">Achados-Chave</span>
                          </div>
                          <ul className="space-y-1.5">
                            {entry.findings.map((f, i) => (
                              <li key={i} className="text-sm flex items-start gap-2">
                                <span className="text-primary font-bold mt-0.5 shrink-0">•</span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Clinical significance */}
                        <div className="bg-orange-500/10 dark:bg-orange-500/5 rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle size={14} className="text-orange-500" />
                            <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">Significado Clínico</span>
                          </div>
                          <p className="text-sm leading-relaxed">{entry.clinical_significance}</p>
                        </div>

                        {/* Pearls */}
                        <div className="bg-emerald-500/10 dark:bg-emerald-500/5 rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lightbulb size={14} className="text-emerald-500" />
                            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Pérolas Clínicas</span>
                          </div>
                          <ul className="space-y-1.5">
                            {entry.pearls.map((p, i) => (
                              <li key={i} className="text-sm flex items-start gap-2">
                                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">💡</span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Differentials */}
                        {entry.differentials && (
                          <div>
                            <span className="text-xs font-semibold mb-2 block">Diagnósticos Diferenciais</span>
                            <div className="flex flex-wrap gap-1.5">
                              {entry.differentials.map((d, i) => (
                                <Badge key={i} variant="secondary" className="text-[10px]">{d}</Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {entry.tags.map(t => (
                            <span key={t} className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground text-sm">
            Nenhum padrão encontrado para "{search}"
          </div>
        )}
      </div>
    </>
  );
}
