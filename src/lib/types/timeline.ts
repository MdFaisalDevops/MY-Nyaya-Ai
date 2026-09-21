export interface TimelineEvent {
  id: string;
  date: string; // ISO string or simple YYYY-MM-DD
  title: string;
  description: string;
  hasDocument?: boolean;
}
