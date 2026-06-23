import type { Metadata } from "next";
import Checklists from "@/components/Checklists";
import ChecklistsPageHeader from "@/components/ChecklistsPageHeader";

export const metadata: Metadata = {
  title: "Visa-Me Interactive Checklists — Track Your Visa Progress",
  description: "Interactive checklists for U.S. visa applicants. Track your progress through B-1/B-2, F-1, J-1, K-1, IR/CR, and H-1B visa application processes. Your progress saves automatically.",
};

export default function ChecklistsPage() {
  return (
    <>
      <ChecklistsPageHeader />
      <Checklists />
    </>
  );
}
