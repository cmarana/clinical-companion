import React from "react";

export default function DutySection({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="duty-card p-5 space-y-3">
      <h2 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
        {icon}
        {title}
      </h2>
      {children}
    </div>
  );
}
