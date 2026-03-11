import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

/**
 * Splits markdown by ## headings and renders each section as a visual card.
 * Anything before the first ## is rendered as an intro block.
 */
export default function ClinicalResponseCards({ content }: Props) {
  const sections = splitBySections(content);

  return (
    <div className="clinical-cards space-y-3">
      {sections.map((section, i) => (
        <div key={i} className={section.isIntro ? "clinical-intro" : "clinical-card"}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.markdown}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
}

interface Section {
  markdown: string;
  isIntro: boolean;
}

function splitBySections(md: string): Section[] {
  const lines = md.split("\n");
  const sections: Section[] = [];
  let current: string[] = [];
  let isFirst = true;

  for (const line of lines) {
    if (/^##\s/.test(line)) {
      if (current.length > 0) {
        const text = current.join("\n").trim();
        if (text) sections.push({ markdown: text, isIntro: isFirst });
      }
      current = [line];
      isFirst = false;
    } else {
      current.push(line);
    }
  }

  if (current.length > 0) {
    const text = current.join("\n").trim();
    if (text) sections.push({ markdown: text, isIntro: isFirst });
  }

  return sections;
}
