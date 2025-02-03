export interface UserData {
  name: string;
  age: number;
  email: string;
  interests: string[];
  theme: "dark" | "light";
}

export interface TabConfig {
  label: string;
  component: React.ComponentType<TabComponentProps>;
}

export interface ErrorState {
  name?: string;
  age?: string;
  email?: string;
  interests?: string;
}

export interface TabComponentProps {
  data: UserData;
  setData: React.Dispatch<React.SetStateAction<UserData>>;
  errors: ErrorState;
  setErrors: React.Dispatch<React.SetStateAction<ErrorState>>;
}
