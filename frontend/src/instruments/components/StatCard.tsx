import type { ReactNode } from "react";

type StatCardProps = {
    label: string;
    value: ReactNode;
  };
  
  export function StatCard({ label, value }: StatCardProps) {
    return (
      <div className="stat-card">
        <p className="stat-label">{label}</p>
        <p className="stat-value">{value}</p>
      </div>
    );
  }