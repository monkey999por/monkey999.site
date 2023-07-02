import React, { useEffect } from "react";

const ExampleComponent: React.FC = () => {
  useEffect(() => {
    console.log("Component Mounted"); // Componentのマウント時に実行される

    return () => {
      console.log("Component Unmounted"); // Componentのアンマウント時に実行される
    };
  }, []);

  console.log("Component Rendered"); // Componentがレンダリングされるたびに実行される

  return (
    <div>
      <h1>Hello Next.js with TypeScript</h1>
    </div>
  );
};

export default ExampleComponent;
