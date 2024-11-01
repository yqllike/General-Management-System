declare module 'mockjs' {
    interface Mock {
      mock: (url: RegExp | string, handler: () => any) => void;
    }
    const Mock: Mock;
    export default Mock;
  }
  