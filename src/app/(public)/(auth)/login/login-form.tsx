"use client";
import { Button } from "@/components/ui/button";
import "./style.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
// import { LoginBody, LoginBodyType } from '@/schemaValidations/auth.schema'
import { zodResolver } from "@hookform/resolvers/zod";
// import { useLoginMutation } from '@/queries/useAuth'
// import { handleErrorApi } from '@/lib/utils'
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema";
import Link from "next/link";

export default function LoginForm() {
  //   const loginMutation = useLoginMutation()
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const router = useRouter();

  const onSubmit = async (data: LoginBodyType) => {
    // Khi nhấn submit thì React hook form sẽ validate cái form bằng zod schema ở client trước
    // Nếu không pass qua vòng này thì sẽ không gọi api
    // if (loginMutation.isPending) return
    // try {
    //   const result = await loginMutation.mutateAsync(data)
    //   toast({
    //     description: result.payload.message
    //   })
    //   router.push('/manage/dashboard')
    // } catch (error: any) {
    //   handleErrorApi({
    //     error,
    //     setError: form.setError
    //   })
  };

  return (
    <>
      <Card className="mx-auto max-w form-login">
        <CardHeader></CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="space-y-2 max-w-[600px] flex-shrink-0 w-full"
              noValidate
              onSubmit={form.handleSubmit(onSubmit, (err) => {
                console.log(err);
              })}
            >
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="form-email">
                      <div className="grid gap-2">
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          required
                          {...field}
                        />
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid gap-2">
                        <Input
                          id="password"
                          type="password"
                          placeholder="Password"
                          required
                          {...field}
                        />
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <Link href="/" className="text-[#1b5aff] forgot-password">
                  Forgot password ?
                </Link>
                <Button type="submit" className="w-full btn-login-form">
                  LOG IN
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="login-other">
        <div className="title">Log in with</div>
        <div className="btn-other">
          <Link href='/' className="tbn-fb">Facebook</Link>
          <Link href='/' className="tbn-google">Google</Link>
          <Link href='/' className="tbn-twitter">Twitter</Link>
        </div>
        <div className="title-sub">You do not have an account?</div>
        <div className="btn-create">Create an account</div>
      </div>
    </>
  );
}
