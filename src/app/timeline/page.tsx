"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { TimelineEvent } from "@/lib/types/timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Calendar, Paperclip, Briefcase, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import EmptyState from "@/components/ui/EmptyState";

export default function TimelinePage() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Form State
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hasDocument, setHasDocument] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const saved = localStorage.getItem("nyaya_timeline");
    if (saved) {
      try {
        setEvents(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse timeline events", e);
      }
    }
  }, []);

  // Save to local storage whenever events change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("nyaya_timeline", JSON.stringify(events));
    }
  }, [events, isMounted]);

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !title) return;

    const newEvent: TimelineEvent = {
      id: Date.now().toString(),
      date,
      title,
      description,
      hasDocument,
    };

    // Sort events by date ascending
    const newEvents = [...events, newEvent].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setEvents(newEvents);

    // Reset form
    setDate("");
    setTitle("");
    setDescription("");
    setHasDocument(false);
  };

  const removeEvent = (id: string) => {
    setEvents(events.filter((ev) => ev.id !== id));
  };

  if (!isMounted) return null;

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <PageHeader 
          title="Legal Timeline" 
          description="Map out the chronological events of your situation."
          breadcrumb={[{label: 'Home', href: '/'}, {label: 'Timeline'}]} 
        />
        <Link 
          href="/lawyer-brief"
          className="shrink-0 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-2.5 text-sm font-medium inline-flex items-center justify-center transition-colors dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
        >
          <Briefcase className="w-4 h-4 mr-2" /> Prepare for Lawyer
        </Link>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: The Timeline Display */}
        <div className="lg:col-span-7 space-y-6">
          <Alert variant="default" className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/50">
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
            <AlertTitle className="text-amber-800 dark:text-amber-300">Important Date Warning</AlertTitle>
            <AlertDescription className="text-amber-700/80 dark:text-amber-400/80">
              Do not calculate or claim legal deadlines unless based on verified information. If uncertain about a deadline: <strong>Potential deadline — verify with an authoritative source.</strong>
            </AlertDescription>
          </Alert>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm min-h-[400px]">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Chronological Record</h3>
            
            {events.length === 0 ? (
              <EmptyState 
                title="No Events Added"
                description="Start building your chronological record using the panel on the right."
                icon={<Calendar className="w-10 h-10" />}
              />
            ) : (
              <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/50 ml-4 space-y-8 py-4">
                {events.map((ev) => (
                  <div key={ev.id} className="relative pl-8">
                    {/* Dot */}
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 bg-indigo-500" />
                    
                    <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl p-4 group">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                            {ev.date}
                          </span>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg">{ev.title}</h4>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => removeEvent(ev.id)} className="text-slate-400 hover:text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          Remove
                        </Button>
                      </div>
                      
                      {ev.description && (
                        <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">{ev.description}</p>
                      )}
                      
                      {ev.hasDocument && (
                        <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 w-fit px-2 py-1 rounded-md">
                          <Paperclip className="w-3 h-3" /> Document Available
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Event Entry Form */}
        <div className="lg:col-span-5 sticky top-8">
          <Card className="shadow-sm border-slate-200 dark:border-slate-800">
            <CardHeader className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-lg flex items-center gap-2">
                <Plus className="w-5 h-5 text-indigo-500" />
                Add Event
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleAddEvent} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Date</label>
                  <Input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Title / Event Type</label>
                  <Input 
                    placeholder="e.g. Received Notice, Signed Contract" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Description (Optional)</label>
                  <Textarea 
                    placeholder="Briefly describe what happened..." 
                    className="min-h-[100px] resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="flex items-center gap-2 py-2">
                  <input 
                    type="checkbox" 
                    id="hasDoc" 
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    checked={hasDocument}
                    onChange={(e) => setHasDocument(e.target.checked)}
                  />
                  <label htmlFor="hasDoc" className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2 cursor-pointer">
                    <Paperclip className="w-4 h-4 text-slate-400" /> I have a document for this event
                  </label>
                </div>

                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  Add to Timeline
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
