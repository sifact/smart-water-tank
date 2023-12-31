"use client";

import { ColumnDef } from "@tanstack/react-table";

export type BillboardColumn = {
  id: 1;
  label: string;
};

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "name",
  },
  {
    accessorKey: "description",
  },
];
