import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase';
import useAuthContext from '../hooks/useAuthContext';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: 'Must be 2 or more characters long' }),
    lastName: z
      .string()
      .min(2, { message: 'Must be 2 or more characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, { message: 'Must be 8 or more characters long' }),
    confirm: z
      .string()
      .min(8, { message: 'Must be 8 or more characters long' }),
    terms: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  })
  .refine((data) => data.terms === true, {
    message: 'You must agree to the terms',
    path: ['terms'],
  });

const Register = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleRegister = async (data) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      localStorage.setItem('token', user.accessToken);
      setCurrentUser(user);
      navigate('/');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <div className="h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gray-100">
      <main className="mx-auto max-w-2xl space-y-8 bg-white px-3 py-6 rounded-t">
        <div className="space-y-2 text-center">
          <h1 className="font-roboto text-lg sm:text-2xl lg:text-4xl">
            Sign Up
          </h1>
          <p className="text-slate-500 text-sm sm:text-base">
            Enter your information to create an account
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input
                {...register('firstName', { required: true })}
                id="first-name"
                placeholder="John"
                required
              />
              <p className="text-sm text-red-400">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                {...register('lastName', { required: true })}
                id="last-name"
                placeholder="Wick"
                required
              />
              <p className="text-sm text-red-400">{errors.lastName?.message}</p>
            </div>
          </div>
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
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm password</Label>
            <Input
              {...register('confirm', { required: true })}
              id="confirm-password"
              required
              type="password"
            />
            <p className="text-sm text-red-400">{errors.confirm?.message}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Input
                {...register('terms', { required: true })}
                type="checkbox"
                className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              />
              <Label className="ml-2 text-sm leading-none" htmlFor="terms">
                I agree to the&nbsp;
                <Link className="underline" href="#">
                  terms and conditions
                </Link>
              </Label>
            </div>
            <p className="text-sm text-red-400">{errors.terms?.message}</p>
          </div>
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
        </form>
      </main>
    </div>
  );
};

export default Register;
