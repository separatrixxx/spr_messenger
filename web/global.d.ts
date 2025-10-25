import { User } from "@/types/User.interface";

declare global {
  interface Window {
    onTelegramAuth?: (user: User) => void
  }
}
