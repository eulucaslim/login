
import { Input } from "@heroui/input";

interface UserProps {
    email: string,
    password: string
}
export function Login(){
    return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input 
        label="Email" 
        type="email" 
        />
      <Input 
        label="Password" 
        type="text"
        />
    </div>
  );

}