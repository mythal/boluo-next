export interface StyleProps {
  className?: string;
}

export type DataAttr<T> = { [P in keyof T & string as `data-${P}`]?: T[P] };
