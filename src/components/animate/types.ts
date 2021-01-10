export interface Style {
  [key: string]: string | number;
}

export interface AnimationType {
  play?: boolean;
  overlay?: number;
  duration?: number;
  delay?: number;
  easeType?: string;
  children?: React.ReactNode | string;
}

export interface AnimationStateType {
  [key: string]: AnimationType;
}

export interface AnimationProps extends AnimationType {
  onComplete?: () => void;
  start?: Style;
  end?: Style;
  complete?: Style;
  animationStates?: AnimationStateType;
}

export const DEFAULT_DURATION = 0.3;
export const DEFAULT_EASE_TYPE = 'linear';
export const DEFAULT_DIRECTION = 'normal';
export const DEFAULT_FILLMODE = 'none';
export const RUNNING = 'running';
export const ALL = 'all';
