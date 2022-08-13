import React from 'react';

import { Button } from 'ui';

const App = () => (
  <div className="flex items-center gap-4 border-[1px] border-black">
    <h2 className="text-red-300 hover:bg-blue-500">
      App 1. Shared Button component:
    </h2>
    <Button>Content #1</Button>
  </div>
);

export default App;
