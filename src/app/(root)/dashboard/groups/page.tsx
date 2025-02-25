"use client";

import React, { useState } from "react";
import useSWR from "swr";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, Plus, Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Group } from "@/types";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const GroupsPage = () => {
  const { data: groups, mutate } = useSWR("/api/groups", fetcher);
  const [open, setOpen] = useState(false);
  const [editingGroup, setEditingGroup] = useState<Group | null>(null);
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("USD");
  const router = useRouter();
  const { toast } = useToast();

  // Open modal for editing
  const openEditModal = (group: Group) => {
    setEditingGroup(group);
    setName(group.name);
    setCurrency(group.currency);
    setOpen(true);
  };

  // Create or Update Group
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = { name, currency };

    try {
      if (editingGroup) {
        await axios.put(`/api/groups/${editingGroup.id}`, payload);
        toast("Group Updated");
      } else {
        await axios.post("/api/groups", payload);
        toast("Group Created");
      }
      setOpen(false);
      setEditingGroup(null);
      mutate();
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      toast("Error", {
        description: error.response?.data?.error || "Something went wrong",
        variant: "destructive",
      });
    }
  }

  // Delete Group
  async function handleDelete(id: string) {
    try {
      await axios.delete(`/api/groups/${id}`);
      toast("Group Deleted");
      mutate();
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      toast("Error", {
        description: error.response?.data?.error || "Something went wrong",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Groups</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingGroup(null)}>
              <Plus className="mr-2 h-4 w-4" />
              New Group
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>
              {editingGroup ? "Edit Group" : "Create Group"}
            </DialogTitle>
            <DialogDescription>Fill in the details below.</DialogDescription>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Group Name"
                required
              />
              <Input
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                placeholder="Currency (USD, EUR, etc.)"
                required
              />
              <DialogFooter>
                <Button type="submit">
                  {editingGroup ? "Update" : "Create"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups?.map((group: Group) => (
          <Card key={group.id}>
            <CardHeader>
              <CardTitle>{group.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <span className="text-muted-foreground">
                Currency: {group.currency}
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => openEditModal(group)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(group.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GroupsPage;
