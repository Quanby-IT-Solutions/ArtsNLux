// src/components/forms/Register.tsx

import Button from "@/components/ui/Button";

const RegisterForm = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Register</h1>
            <form className="flex flex-col gap-4">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <Button> Register </Button>
            </form>
        </div>
    );
};

export default RegisterForm;
