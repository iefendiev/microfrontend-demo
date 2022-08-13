import React from 'react';
import { Button } from 'ui';

const App = () => (
  <div className="flex items-center gap-4">
    <h2 className="bg-blue-500 hover:bg-purple-600">
      App 2. Shared Button component:
    </h2>
    <Button>Content #2</Button>
  </div>
);

export default App;
