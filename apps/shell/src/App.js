import React, { lazy, Suspense } from 'react';

const App1 = lazy(() => import('APP1/App'));
const App2 = lazy(() => import('APP2/App'));

const App = () => (
  <div className="flex flex-col mx-auto gap-2 m-2 p-6 border-2 border-gray-400 rounded-lg w-fit">
    <h1 className="text-xl p-2 rounded-lg shadow-lg font-bold text-gray-800">
      This is a sample micro-frontend app to demonstrate usage with monorepo
      architecture
    </h1>
    <p className="p-2">
      One of powerful advantages of using monorepos is to be able to use a
      common UI components with common configs
    </p>
    <div>
      <p className="px-2 font-semibold">The project stack contains:</p>
      <ul className="px-2 list-disc">
        <li>
          Webpack Module Federation plugin for micro-frontend architecture
        </li>
        <li>Turborepo for applying monorepo</li>
        <li>CRAs for each individual Apps and Shell</li>
        <li>Tailwind CSS for styling</li>
      </ul>
    </div>
    <h2 className="p-2 text-xl underline underline-offset-2">
      Hi from Shell App
    </h2>
    <div className="p-2 flex flex-col gap-4">
      <Suspense fallback={<p>Loading App1...</p>}>
        <App1 />
      </Suspense>
      <Suspense fallback={<p>Loading App2...</p>}>
        <App2 />
      </Suspense>
    </div>
  </div>
);

export default App;
