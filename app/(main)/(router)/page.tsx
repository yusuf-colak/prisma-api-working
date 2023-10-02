"use client";
import TaskListPage from "@/components/task-List";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MdFormatListBulletedAdd } from "react-icons/md";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/addTask`);
  };
  return (
    <>
      <Button onClick={() => handleClick()}>
        <MdFormatListBulletedAdd className="mr-2" /> Add Task Page
      </Button>
      <TaskListPage />
    </>
  );
}
