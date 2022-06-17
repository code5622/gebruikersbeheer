import { SyntheticEvent } from "react";

export default interface IFormData {
    e: SyntheticEvent
    email: string;
    password: string;
  };