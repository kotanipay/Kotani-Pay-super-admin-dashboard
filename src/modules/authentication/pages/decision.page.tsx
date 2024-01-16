"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const DecisionPage = () => {
  // useEffect that check if user is logged in
  // if logged in, redirect to /dashboard
  // if not logged in, redirect to /login
  const router = useRouter();
  //   const store = useAuthStore();

  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
      //   store.isUserLoggedIn();
    }, 1000);
  }, [router]);

  //   useEffect(() => {
  //     if (store.state === 'SUCCESS') {
  //       if (store.user) {
  //         navigation('/dashboard/home');
  //       } else {
  //         navigation('/dashboard/login');
  //       }
  //     }
  //   }, [store.user, store.state]);
  return <></>;
};