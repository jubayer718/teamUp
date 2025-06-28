'use client';

import dynamic from 'next/dynamic';

// Dynamically import Editor component with SSR disabled
const Editor = dynamic(() => import('./Editor'), {
  ssr: false,
});

export default Editor;