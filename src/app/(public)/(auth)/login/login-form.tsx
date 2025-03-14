"use client";
import { Button } from "@/components/ui/button";
import "./style.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema";
import Link from "next/link";
import { useLoginMutation } from "@/queries/useAuth";
import authApiRequest from "@/apiRequests/auth";

export default function LoginForm() {
  const { toast } = useToast();
  const loginMutation = useLoginMutation();

  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: LoginBodyType) => {
    if (loginMutation.isPending) return;
    try {

      const result = await loginMutation.mutateAsync(values)

      await authApiRequest.auth({
        accessToken: result.data.access_token,
        refreshToken: result.data.refresh_token,
        access_expires_at: result.data.access_expires_at,
        refresh_expires_at: result.data.refresh_expires_at,
      });

      toast({
        description: "Login Thành Công",
        className: "text-[18px] !important toast",
      });

      router.push('/manage/dashboard')
      router.refresh()
    } catch (error: any) {
      console.error("Lỗi khi login:", error);
    }
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
                        <FormMessage className="error" />
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
                        <FormMessage className="error" />
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
    </>
  );
}
