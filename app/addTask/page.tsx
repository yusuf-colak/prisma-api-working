"use client";
import { FormPage } from "@/components/form-page";
import { Button } from "@/components/ui/button";
import React from "react";
import { AiFillBackward } from "react-icons/ai";
import { useRouter } from "next/navigation";

const AddTaskPage = () => {
  const router = useRouter();
  return (
    <main>
      <Button
        onClick={() => {
          router.push("/");
        }}
      >
        <AiFillBackward /> Anasayfa
      </Button>
      <FormPage />
    </main>
  );
};

export default AddTaskPage;
