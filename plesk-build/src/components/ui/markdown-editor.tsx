"use client";

import React from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";
import { Button } from "./button";
import { MediaLibrary } from "./media-library";

interface MarkdownEditorProps {
  name: string;
  initialValue?: string;
  placeholder?: string;
}

// ── Custom heading commands with compact H1/H2/H3 pill labels ──
function HeadingIcon({ level }: { level: number }) {
  return (
    <span style={{ fontSize: 11, fontWeight: 700, fontFamily: "inherit", letterSpacing: "-0.02em", lineHeight: 1 }}>
      H{level}
    </span>
  );
}

const makeHeading = (level: number): commands.ICommand => ({
  name: `heading${level}`,
  keyCommand: `heading${level}`,
  buttonProps: { "aria-label": `Heading ${level}`, title: `Heading ${level}` },
  icon: <HeadingIcon level={level} />,
  execute(state, api) {
    const prefix = "#".repeat(level) + " ";
    const selected = state.selectedText || "Heading";
    api.replaceSelection(prefix + selected);
  },
});

// ── Custom table insertion command ──
const tableCommand: commands.ICommand = {
  name: "table",
  keyCommand: "table",
  buttonProps: { "aria-label": "Insert table", title: "Insert table" },
  icon: (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm6 0v4h4V2H6zm4 5H6v4h4V7zm1 4h3V7h-3v4zm0-5h3V2h-3v4zM5 2H2v4h3V2zM2 7v4h3V7H2zm0 5v2h3v-2H2zm4 2h4v-2H6v2zm5 0h3v-2h-3v2z" />
    </svg>
  ),
  execute(_state, api) {
    api.replaceSelection(
      "\n| Header 1 | Header 2 | Header 3 |\n|----------|----------|----------|\n| Cell     | Cell     | Cell     |\n| Cell     | Cell     | Cell     |\n"
    );
  },
};

// ── Custom callout/note command ──
const calloutCommand: commands.ICommand = {
  name: "callout",
  keyCommand: "callout",
  buttonProps: { "aria-label": "Callout / Note block", title: "Note callout" },
  icon: (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
  ),
  execute(state, api) {
    const selected = state.selectedText || "Important note here";
    api.replaceSelection(`\n> 💡 **Note:** ${selected}\n`);
  },
};

// ── Horizontal rule ──
const hrCommand: commands.ICommand = {
  name: "hr",
  keyCommand: "hr",
  buttonProps: { "aria-label": "Horizontal rule", title: "Horizontal rule" },
  icon: (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
      <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
    </svg>
  ),
  execute(_state, api) {
    api.replaceSelection("\n\n---\n\n");
  },
};

// ── Custom Alignments ──
const makeAlign = (alignment: "left" | "center" | "right", icon: React.ReactElement): commands.ICommand => ({
  name: `align-${alignment}`,
  keyCommand: `align-${alignment}`,
  buttonProps: { "aria-label": `Align ${alignment}`, title: `Align ${alignment}` },
  icon,
  execute(state, api) {
    const selected = state.selectedText || "Aligned content";
    api.replaceSelection(`\n<div align="${alignment}">\n\n${selected}\n\n</div>\n`);
  },
});

const alignLeftCommand = makeAlign(
  "left",
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
);
const alignCenterCommand = makeAlign(
  "center",
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>
);
const alignRightCommand = makeAlign(
  "right",
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg>
);

// ── Custom Colors ──
const makeColor = (colorName: string, hex: string): commands.ICommand => ({
  name: `color-${colorName}`,
  keyCommand: `color-${colorName}`,
  buttonProps: { "aria-label": `${colorName} text`, title: `${colorName} text` },
  icon: (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full border border-slate-200 dark:border-slate-700" style={{ backgroundColor: hex }} />
      <span className="text-[12px]">{colorName}</span>
    </div>
  ),
  execute(state, api) {
    const selected = state.selectedText || "colored text";
    api.replaceSelection(`<span style="color: ${hex}">${selected}</span>`);
  },
});

const colorGroup = commands.group(
  [
    makeColor("Red", "#ef4444"),
    makeColor("Blue", "#3b82f6"),
    makeColor("Green", "#22c55e"),
    makeColor("Yellow", "#eab308"),
    makeColor("Purple", "#a855f7"),
    makeColor("Gray", "#64748b"),
  ],
  {
    name: "colors",
    groupName: "colors",
    buttonProps: { "aria-label": "Text Color", title: "Text Color" },
    icon: (
      <div className="flex items-center gap-0.5">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"></path><path d="m6 16 6-12 6 12"></path><path d="M8 12h8"></path></svg>
        <svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    ),
  }
);

const headingGroup = commands.group(
  [
    makeHeading(1),
    makeHeading(2),
    makeHeading(3),
    makeHeading(4),
    makeHeading(5),
    makeHeading(6),
  ],
  {
    name: "headings",
    groupName: "headings",
    buttonProps: { "aria-label": "Select Heading Level", title: "Headings" },
    icon: (
      <div className="flex items-center gap-0.5">
        <span style={{ fontSize: 11, fontWeight: 800 }}>H</span>
        <svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    ),
  }
);

// ── Toolbar rows ──
const ROW1: commands.ICommand[] = [
  commands.bold,
  commands.italic,
  commands.strikethrough,
  commands.divider,
  headingGroup,
  commands.divider,
  commands.unorderedListCommand,
  commands.orderedListCommand,
  commands.checkedListCommand,
  commands.divider,
  commands.quote,
  calloutCommand,
];

const mediaLibraryCommand: commands.ICommand = {
  name: "media-library",
  keyCommand: "media-library",
  buttonProps: { "aria-label": "Insert from Media Library", title: "Media Library" },
  icon: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
  ),
  execute(state, api) {
    const event = new CustomEvent("open-media-library", { detail: api });
    window.dispatchEvent(event);
  },
};

const ROW2: commands.ICommand[] = [
  commands.code,
  commands.codeBlock,
  commands.divider,
  alignLeftCommand,
  alignCenterCommand,
  alignRightCommand,
  commands.divider,
  colorGroup,
  commands.divider,
  tableCommand,
  commands.link,
  mediaLibraryCommand,
  commands.image,
  hrCommand,
];

const EXTRA: commands.ICommand[] = [
  commands.codeEdit,
  commands.codeLive,
  commands.codePreview,
  commands.divider,
  commands.fullscreen,
];

export function MarkdownEditor({ name, initialValue = "", placeholder }: MarkdownEditorProps) {
  const [value, setValue] = React.useState(initialValue);
  const [showMediaModal, setShowMediaModal] = React.useState(false);
  const [editorApi, setEditorApi] = React.useState<any>(null);

  React.useEffect(() => {
    const handler = (e: any) => {
      setEditorApi(e.detail);
      setShowMediaModal(true);
    };
    window.addEventListener("open-media-library", handler);
    return () => window.removeEventListener("open-media-library", handler);
  }, []);

  const wordCount = value.trim() ? value.split(/\s+/).filter(Boolean).length : 0;
  const charCount = value.length;

  return (
    <div className="rich-editor-wrapper w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/25 focus-within:border-indigo-400 transition-all">
      <style>{`
        /* ── Root ── */
        .rich-editor-wrapper .w-md-editor {
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          background: transparent !important;
          font-family: inherit;
        }

        /* ── Toolbar ── */
        .rich-editor-wrapper .w-md-editor-toolbar {
          background: #f8fafc !important;
          border-bottom: 1px solid #e2e8f0 !important;
          padding: 5px 12px !important;
          min-height: unset !important;
          height: auto !important;
          flex-wrap: wrap !important;
          row-gap: 4px !important;
          column-gap: 1px !important;
          align-items: center !important;
        }

        /* hide the built-in ul that wraps commands */
        .rich-editor-wrapper .w-md-editor-toolbar > ul {
          display: flex !important;
          flex-wrap: wrap !important;
          align-items: center !important;
          gap: 1px !important;
          margin: 0 !important;
          padding: 0 !important;
          list-style: none !important;
        }

        /* ── Toolbar buttons ── */
        .rich-editor-wrapper .w-md-editor-toolbar li > button {
          width: 32px !important;
          height: 28px !important;
          min-width: 28px !important;
          border-radius: 6px !important;
          color: #64748b !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0 !important;
          background: transparent !important;
          border: none !important;
          cursor: pointer !important;
          transition: background 0.12s, color 0.12s !important;
          line-height: 1 !important;
        }

        /* ── Dropdown / Group Menu ── */
        .rich-editor-wrapper .w-md-editor-toolbar ul > li:hover > .w-md-editor-drop-down {
          display: block !important;
        }
        .rich-editor-wrapper .w-md-editor-drop-down {
          background: #fff !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 8px !important;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
          padding: 4px !important;
          z-index: 50 !important;
        }
        .rich-editor-wrapper .w-md-editor-drop-down ul {
          display: flex !important;
          flex-direction: column !important;
          gap: 2px !important;
          padding: 0 !important;
          margin: 0 !important;
          list-style: none !important;
        }
        .rich-editor-wrapper .w-md-editor-drop-down ul li {
          width: 100% !important;
          padding: 0 !important;
        }
        .rich-editor-wrapper .w-md-editor-drop-down ul li button {
          width: 100% !important;
          height: 32px !important;
          padding: 0 12px !important;
          justify-content: flex-start !important;
          font-size: 12px !important;
          border-radius: 4px !important;
          color: #475569 !important;
          background: transparent !important;
        }
        .rich-editor-wrapper .w-md-editor-drop-down ul li button:hover {
          background: #f1f5f9 !important;
          color: #4f46e5 !important;
        }

        .dark .rich-editor-wrapper .w-md-editor-drop-down {
          background: #0f172a !important;
          border-color: #1e293b !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-drop-down ul li button {
          color: #94a3b8 !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-drop-down ul li button:hover {
          background: #1e293b !important;
          color: #a5b4fc !important;
        }
        .rich-editor-wrapper .w-md-editor-toolbar li > button:hover {
          background: #e0e7ff !important;
          color: #4f46e5 !important;
        }
        .rich-editor-wrapper .w-md-editor-toolbar li.active > button,
        .rich-editor-wrapper .w-md-editor-toolbar li > button[data-active="true"] {
          background: #e0e7ff !important;
          color: #4338ca !important;
          font-weight: 700 !important;
        }
        .rich-editor-wrapper .w-md-editor-toolbar li > button svg {
          width: 13px !important;
          height: 13px !important;
          display: block !important;
        }

        /* ── Dividers ── */
        .rich-editor-wrapper .w-md-editor-toolbar-divider {
          width: 1px !important;
          height: 18px !important;
          background: #cbd5e1 !important;
          margin: 0 5px !important;
          flex-shrink: 0 !important;
          display: inline-block !important;
          vertical-align: middle !important;
        }
        .rich-editor-wrapper .w-md-editor-toolbar li.w-md-editor-toolbar-divider {
          padding: 0 !important;
          background: #cbd5e1 !important;
          width: 1px !important;
          height: 18px !important;
          margin: 0 4px !important;
        }

        /* ── Right-side extra commands ── */
        .rich-editor-wrapper .w-md-editor-toolbar > ul:last-child {
          margin-left: auto !important;
        }

        /* ── Text area — TOTAL SYNC REQUIRED ── */
        .rich-editor-wrapper .w-md-editor-content {
          background: #fff !important;
        }
        .rich-editor-wrapper .w-md-editor-text {
          margin: 0 !important;
        }
        
        /* Target BOTH the layers AND all syntax tokens inside them */
        .rich-editor-wrapper .w-md-editor-text-pre,
        .rich-editor-wrapper .w-md-editor-text-input,
        .rich-editor-wrapper .w-md-editor-text-pre *,
        .rich-editor-wrapper .w-md-editor-text-input * {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
          font-size: 14px !important;
          line-height: 1.7 !important;
          font-weight: 400 !important; /* NO BOLD in editor - prevents width drift */
          letter-spacing: normal !important;
          word-spacing: normal !important;
          tab-size: 2 !important;
          -moz-tab-size: 2 !important;
          white-space: pre-wrap !important;
          word-break: break-all !important;
          padding: 0 !important; /* Padding moved to parent to avoid desync */
          margin: 0 !important;
          text-indent: 0 !important;
          box-sizing: border-box !important;
          border: none !important;
          outline: none !important;
        }

        /* Container for the layers to handle padding safely */
        .rich-editor-wrapper .w-md-editor-text {
          padding: 20px 24px !important;
          position: relative !important;
        }

        .rich-editor-wrapper .w-md-editor-text-input {
          background: transparent !important;
          color: #1e293b !important;
          caret-color: #4f46e5 !important;
          resize: none !important;
          position: absolute !important;
          top: 20px !important;
          left: 24px !important;
          width: calc(100% - 48px) !important;
          height: calc(100% - 40px) !important;
        }
        
        .rich-editor-wrapper .w-md-editor-text-pre {
          background: transparent !important;
          color: #1e293b !important;
          pointer-events: none !important;
        }

        .rich-editor-wrapper .w-md-editor-text-input::placeholder {
          color: #94a3b8 !important;
          font-style: italic !important;
        }

        /* ── Preview ── */
        .rich-editor-wrapper .w-md-editor-preview {
          padding: 20px 24px !important;
          border-left: 1px solid #e2e8f0 !important;
          background: #fff !important;
        }

        /* ── Drag handle ── */
        .rich-editor-wrapper .w-md-editor-bar {
          display: none !important;
        }

        /* ── Dark mode ── */
        .dark .rich-editor-wrapper .w-md-editor-toolbar {
          background: #0f172a !important;
          border-bottom-color: #1e293b !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-toolbar li > button { color: #94a3b8 !important; }
        .dark .rich-editor-wrapper .w-md-editor-toolbar li > button:hover {
          background: #1e293b !important; color: #a5b4fc !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-toolbar li.active > button {
          background: #1e293b !important; color: #818cf8 !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-toolbar-divider,
        .dark .rich-editor-wrapper .w-md-editor-toolbar li.w-md-editor-toolbar-divider {
          background: #334155 !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-content,
        .dark .rich-editor-wrapper .w-md-editor-text-pre,
        .dark .rich-editor-wrapper .w-md-editor-text-input,
        .dark .rich-editor-wrapper .w-md-editor-text-pre *,
        .dark .rich-editor-wrapper .w-md-editor-text-input * {
          background: #0f172a !important;
          color: #e2e8f0 !important;
          font-size: 14px !important;
          line-height: 1.7 !important;
          letter-spacing: normal !important;
          word-spacing: normal !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-text-input {
          background: transparent !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-preview {
          background: #0f172a !important; border-left-color: #1e293b !important;
        }
      `}</style>

      <input type="hidden" name={name} value={value} />

      {/* ── Header bar ── */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-4 rounded-full bg-indigo-500" />
          <span className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
            Content Editor
          </span>
        </div>
        <div className="flex items-center gap-3">
          {wordCount > 0 && (
            <>
              <span className="text-[11px] text-slate-400 tabular-nums">
                <span className="font-medium text-slate-600 dark:text-slate-300">{wordCount}</span> words
              </span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-[11px] text-slate-400 tabular-nums">
                <span className="font-medium text-slate-600 dark:text-slate-300">{charCount}</span> chars
              </span>
            </>
          )}
          {wordCount === 0 && (
            <span className="text-[11px] italic text-slate-400">Start writing…</span>
          )}
        </div>
      </div>

      {/* ── Editor ── */}
      <div data-color-mode="light">
        <MDEditor
          value={value}
          onChange={(val) => setValue(val || "")}
          textareaProps={{ placeholder }}
          preview="edit"
          height={380}
          commands={[...ROW1, commands.divider, ...ROW2]}
          extraCommands={EXTRA}
          visibleDragbar={false}
        />
      </div>

      {/* ── Footer bar ── */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <span className="text-[11px] text-slate-400">
          Supports{" "}
          <span className="font-semibold text-slate-500">Markdown</span>{" "}
          · <kbd className="font-sans bg-slate-100 dark:bg-slate-800 text-slate-500 px-1 py-0.5 rounded text-[10px]">**bold**</kbd>{" "}
          <kbd className="font-sans bg-slate-100 dark:bg-slate-800 text-slate-500 px-1 py-0.5 rounded text-[10px]">_italic_</kbd>{" "}
          <kbd className="font-sans bg-slate-100 dark:bg-slate-800 text-slate-500 px-1 py-0.5 rounded text-[10px]"># Heading</kbd>
        </span>
        <span className="text-[11px] text-slate-400">
          Toggle{" "}
          <span className="font-medium text-slate-500">Live Preview</span>{" "}
          from the toolbar →
        </span>
      </div>

      {showMediaModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-950 rounded-xl max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Insert Media</h3>
              <Button size="sm" variant="ghost" onClick={() => setShowMediaModal(false)}>Close</Button>
            </div>
            <div className="p-5 overflow-auto flex-1">
              <MediaLibrary onSelect={(url) => {
                if (editorApi) {
                  editorApi.replaceSelection(`\n![image](${url})\n`);
                }
                setShowMediaModal(false);
              }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
