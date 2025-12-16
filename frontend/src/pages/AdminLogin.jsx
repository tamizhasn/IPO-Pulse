import Button from "../components/common/Button";
import Input from "../components/common/Input";

export default function AdminLogin({ onLogin }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 w-80 rounded-xl border border-border">
        <h2 className="font-semibold mb-4">Admin Login</h2>

        <Input label="Email" type="email" />
        <Input label="Password" type="password" />

        <Button className="w-full mt-4" onClick={onLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}
