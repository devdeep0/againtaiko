interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (params?: any) => void) => void;
    };
    Telegram?: {
      WebApp: {
        openLink: (url: string) => void;
      };
    };
  }