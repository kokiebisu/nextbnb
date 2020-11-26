export interface SignupTemplateProps {}

export interface LoginTemplateProps {}

export interface AuthTemplateProps {}

export interface ForgotPasswordTemplateProps {}

export interface ExistsTemplateProps {
  data?: {
    imgUrl: string;
    firstname: string;
    email: string;
  };
}
