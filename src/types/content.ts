// src/types/content.ts
export type PageImage = {
  src: string;
  alt: string;
};

export type ParagraphBlock = {
  id: string;
  type: "paragraph";
  text: string;          // markdown-formatted
  images?: PageImage[];  // max 2, enforced by convention (single author) — not by the type
};

// Future block kinds slot in here as their own type, then join the union below:
// export type HeadingBlock = { id: string; type: "heading"; level: 1 | 2 | 3; text: string };
// export type QuoteBlock = { id: string; type: "quote"; text: string; cite?: string };

export type PageBlock = ParagraphBlock; // | HeadingBlock | QuoteBlock | ...