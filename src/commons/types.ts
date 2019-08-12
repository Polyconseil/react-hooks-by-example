export interface IExample {
  title: string;
  Component: React.ComponentType<{}>;
  code?: string;
  preface?: React.ReactNode;
  explanation?: React.ReactNode;
}
