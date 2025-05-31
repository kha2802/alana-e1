declare module 'react-quill' {
  import * as React from 'react';

  interface ReactQuillProps {
    theme?: string;
    modules?: any;
    formats?: string[];
    value?: string;
    onChange?: (content: string) => void;
    [key: string]: any;  // Cho phép các props khác tùy ý
  }

  export default class ReactQuill extends React.Component<ReactQuillProps> {}
}
