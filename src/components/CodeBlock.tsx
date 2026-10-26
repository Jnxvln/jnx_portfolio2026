import { Component } from 'solid-js';
import { Highlight } from 'solid-highlight';
import '~/lib/prism'
import 'prismjs/components/prism-typescript';
// import 'prismjs/themes/prism-okaidia.min.css';

const CodeBlock: Component = () => {
  const tsCode = `if (workdayIdParam) {
  const workdayId = parseInt(workdayIdParam, 10);
  if (!isNaN(workdayId)) {
    // Auto-expand the workday
    const currentExpanded = new Set(expandedRows.value);
    currentExpanded.add(workdayId);
    expandedRows.value = currentExpanded;
  }
}
if (haulIdParam) {
  const haulId = parseInt(haulIdParam, 10);
  if (!isNaN(haulId)) {
    // Set the haul to highlight
    highlightHaulId.value = haulId;

    // Remove highlight after 3 seconds
    setTimeout(() => {
    highlightHaulId.value = null;
    }, 3000);
  }
}
  `;

  return (
    <div class="select-none cursor-default opacity-70 animate-[fadein_500ms_ease]">
      <Highlight language="typescript">{tsCode}</Highlight>
    </div>
  );
};

export default CodeBlock;   