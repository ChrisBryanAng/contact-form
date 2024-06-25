/// <reference types="vite/client" />
declare module "*";

type TInput = {
  id: string;
  name?: string;
  type?: string;
  label: string;
  value?: string;
  selected?: string;
  isTouched?: string;
  error?: string;
  onChange?: () => void;
};
