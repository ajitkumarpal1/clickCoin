// global.d.ts
declare global {
    interface Window {
      Telegram: {
        WebApp: {
          initDataUnsafe: {
            user: {
              id: number;
              first_name: string;
              last_name?: string;
              username?: string;
            };
          };
        };
      };
    }
  }
  
  // This is needed to make TypeScript treat this file as a module
  export {};
  