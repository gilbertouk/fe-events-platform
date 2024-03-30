import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase';
import useAuthContext from '../hooks/useAuthContext';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Must be 8 or more characters long' }),
});

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { setCurrentUser } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleLogin = async (data) => {
    setErrorMessage('');
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      console.log(user);
      localStorage.setItem('token', user.accessToken);
      setCurrentUser(user);
      navigate('/');
    } catch (error) {
      const errorCode = error.code;
      console.log(errorCode);
      if (errorCode === 'auth/invalid-credential') {
        setErrorMessage('Invalid email or password');
        return;
      }

      if (errorCode === 'auth/user-disabled') {
        setErrorMessage('Your account has been disabled');
        return;
      }

      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="mx-auto max-w-sm space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to login to your account
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register('email', { required: true })}
                id="email"
                placeholder="john@example.com"
                required
                type="email"
              />
              <p className="text-sm text-red-400">{errors.email?.message}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register('password', { required: true })}
                id="password"
                required
                type="password"
              />
              <p className="text-sm text-red-400">{errors.password?.message}</p>
            </div>

            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
          {errorMessage && (
            <Alert variant="destructive">
              <AlertDescription className="flex gap-2 items-center">
                <AlertCircle className="h-4 w-4" />
                {errorMessage}
              </AlertDescription>
            </Alert>
          )}
          <div className="my-8 h-8 flex items-center">
            <Separator />
          </div>
          <div className="space-y-4">
            <Button className="w-full" variant="outline">
              Login with Google
            </Button>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?&nbsp;
              <Link to="/register" className="underline" href="#">
                Sign Up
              </Link>
            </div>
            <Link
              className="inline-block w-full text-center text-sm underline"
              href="#"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
