import Prism from 'prismjs';

// Language components expect a global Prism to exist
(globalThis as any).Prism = Prism;

export default Prism;